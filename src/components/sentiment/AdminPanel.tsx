
'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Star, MessageSquare, Youtube, X, Loader2, Wand2, PlusCircle, Trash2 } from 'lucide-react';
import type { WeeklyData, FirmData, ContentSource } from '@/lib/types';
import { generateSentimentSummaryAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AdminPanelProps {
  weeklyData: WeeklyData;
  allFirms: FirmData[];
  onSave: (data: WeeklyData) => void;
  calculateWeightedScore: (data: { trustpilotRating: number; redditSentiment: number; youtubeSentiment: number; }) => number;
  children: React.ReactNode;
}

const SourceInputList: React.FC<{
  sources: ContentSource[];
  onSourcesChange: (sources: ContentSource[]) => void;
  platformName: 'Reddit' | 'YouTube';
}> = ({ sources, onSourcesChange, platformName }) => {
  
  const addSource = () => {
    onSourcesChange([...sources, { post: '', comments: '' }]);
  };

  const removeSource = (index: number) => {
    onSourcesChange(sources.filter((_, i) => i !== index));
  };

  const handleSourceChange = (index: number, field: keyof ContentSource, value: string) => {
    const newSources = [...sources];
    newSources[index][field] = value;
    onSourcesChange(newSources);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="flex items-center gap-2">
          {platformName === 'Reddit' ? <MessageSquare className="w-5 h-5 text-orange-400" /> : <Youtube className="w-5 h-5 text-red-500" />}
          Raw {platformName} Sources
        </Label>
        <Button size="sm" variant="ghost" type="button" onClick={addSource}>
          <PlusCircle className="w-4 h-4 mr-2" />
          Add {platformName === 'Reddit' ? 'Post' : 'Video'}
        </Button>
      </div>
      <div className="space-y-3 rounded-md border p-3 max-h-64 overflow-y-auto">
        {sources.length === 0 && <p className="text-sm text-muted-foreground text-center py-4">No {platformName} sources added.</p>}
        {sources.map((source, index) => (
          <div key={index} className="space-y-2 border-b pb-3 last:border-b-0">
            <div className="flex justify-between items-center">
              <Label className="text-xs font-semibold">Source #{index + 1}</Label>
              <Button size="icon" variant="ghost" type="button" onClick={() => removeSource(index)} className="h-6 w-6">
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            </div>
            <Textarea
              value={source.post}
              onChange={e => handleSourceChange(index, 'post', e.target.value)}
              rows={3}
              placeholder={`${platformName === 'Reddit' ? 'Post content' : 'Video transcript'}...`}
            />
            <Textarea
              value={source.comments}
              onChange={e => handleSourceChange(index, 'comments', e.target.value)}
              rows={3}
              placeholder="Comments..."
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export const AdminPanel: React.FC<AdminPanelProps> = ({ weeklyData, onSave, children, allFirms, calculateWeightedScore }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const [localWeeklyData, setLocalWeeklyData] = useState<WeeklyData | null>(null);
  const [editingFirm, setEditingFirm] = useState<string | null>(null);
  
  useEffect(() => {
    if (isPanelOpen) {
      setLocalWeeklyData(JSON.parse(JSON.stringify(weeklyData)));
      if (allFirms.length > 0 && !editingFirm) {
        setEditingFirm(allFirms[0].name);
      }
    }
  }, [isPanelOpen, weeklyData, allFirms, editingFirm]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin") {
      setShowPasswordPrompt(false);
      setIsPanelOpen(true);
      setError('');
      setPassword('');
    } else {
      setError("Incorrect password.");
    }
  };

  const handleOpenAdminPanel = () => {
    setShowPasswordPrompt(true);
  };
  
  const handleSaveChanges = () => {
    if (localWeeklyData) {
      onSave(localWeeklyData);
    }
    setIsPanelOpen(false);
  };

  const handleFieldChange = (field: string, value: any) => {
    if (!editingFirm || !localWeeklyData) return;
    setLocalWeeklyData(prev => {
        if (!prev) return null;
        const updatedFirmData = { ...prev[editingFirm], [field]: value };
        return { ...prev, [editingFirm]: updatedFirmData };
    });
  };

  const handleSourcesChange = (platform: 'reddit' | 'youtube', sources: ContentSource[]) => {
      const field = platform === 'reddit' ? 'redditSources' : 'youtubeSources';
      handleFieldChange(field, sources);
  }

  const handleGenerateSummary = async () => {
      if (!editingFirm || !localWeeklyData) return;

      const currentFirm = localWeeklyData[editingFirm];
      const redditContent = currentFirm.redditSources.map(s => `${s.post}\n${s.comments}`).join('\n\n---\n\n');
      const youtubeContent = currentFirm.youtubeSources.map(s => `${s.post}\n${s.comments}`).join('\n\n---\n\n');

      if (!redditContent && !youtubeContent) {
          toast({ variant: 'destructive', title: 'Error', description: 'Please provide Reddit or YouTube content to generate a summary.' });
          return;
      }

      setIsGenerating(true);
      const result = await generateSentimentSummaryAction({ redditContent, youtubeContent });
      setIsGenerating(false);

      if (result.error) {
          toast({ variant: 'destructive', title: 'Generation Failed', description: result.error });
      } else if (result.data) {
          handleFieldChange('summary', result.data.summary);
          handleFieldChange('positivePoints', result.data.positivePoints);
          handleFieldChange('negativePoints', result.data.negativePoints);
          toast({ title: 'Summary Generated!', description: 'The summary and points have been populated.' });
      }
  };

  const currentFirmData = editingFirm && localWeeklyData ? localWeeklyData[editingFirm] : null;

  return (
    <Dialog open={isPanelOpen || showPasswordPrompt} onOpenChange={(open) => {
        if (!open) {
            setIsPanelOpen(false);
            setShowPasswordPrompt(false);
        }
    }}>
      <DialogTrigger asChild onClick={handleOpenAdminPanel}>
        {children}
      </DialogTrigger>

      {showPasswordPrompt && !isPanelOpen && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Access</DialogTitle>
            <DialogDescription>Enter the password to manage sentiment data.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePasswordSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password-prompt" className="text-right">Password</Label>
                <Input id="password-prompt" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="col-span-3" />
              </div>
              {error && <p className="col-span-4 text-center text-destructive text-sm">{error}</p>}
            </div>
            <DialogFooter>
              <DialogClose asChild><Button type="button" variant="secondary">Cancel</Button></DialogClose>
              <Button type="submit">Enter</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      )}

      {isPanelOpen && localWeeklyData && currentFirmData && (
        <DialogContent className="max-w-4xl h-[90vh]">
          <DialogHeader>
            <DialogTitle>Update Weekly Sentiment</DialogTitle>
            <DialogDescription>
              Adjust the sentiment scores and text for the selected firm. Changes will update the chart in real-time.
            </DialogDescription>
          </DialogHeader>
            <div className="my-4">
                <Label htmlFor="firm-select">Select Firm to Edit</Label>
                <Select value={editingFirm || ''} onValueChange={setEditingFirm}>
                    <SelectTrigger id="firm-select"><SelectValue placeholder="Select a firm..." /></SelectTrigger>
                    <SelectContent>
                        {allFirms.map(firm => (
                            <SelectItem key={firm.name} value={firm.name}>{firm.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
          <ScrollArea className="flex-1 -mr-6 pr-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                <div className="space-y-4">
                    <SourceInputList 
                      sources={currentFirmData.redditSources || []}
                      onSourcesChange={(sources) => handleSourcesChange('reddit', sources)}
                      platformName="Reddit"
                    />
                     <SourceInputList 
                      sources={currentFirmData.youtubeSources || []}
                      onSourcesChange={(sources) => handleSourcesChange('youtube', sources)}
                      platformName="YouTube"
                    />
                    <Button onClick={handleGenerateSummary} disabled={isGenerating} className="w-full">
                        {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                        Generate Summary & Points
                    </Button>
                     <div className="space-y-2">
                        <Label>Generated Summary</Label>
                        <Textarea value={currentFirmData.summary} onChange={e => handleFieldChange('summary', e.target.value)} rows={4}/>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <div className="flex-grow">
                            <Label>Trustpilot (1-5)</Label>
                            <Input type="number" step="0.1" min="1" max="5" value={currentFirmData.trustpilotRating} onChange={(e) => handleFieldChange('trustpilotRating', parseFloat(e.target.value))} />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <Label className="flex items-center gap-2"><MessageSquare className="w-5 h-5 text-orange-400" /> Reddit Sentiment ({currentFirmData.redditSentiment})</Label>
                        <Slider value={[currentFirmData.redditSentiment]} onValueChange={(value) => handleFieldChange('redditSentiment', value[0])} max={100} step={1} />
                    </div>
                    <div className="space-y-3">
                        <Label className="flex items-center gap-2"><Youtube className="w-5 h-5 text-red-500" /> YouTube Sentiment ({currentFirmData.youtubeSentiment})</Label>
                        <Slider value={[currentFirmData.youtubeSentiment]} onValueChange={(value) => handleFieldChange('youtubeSentiment', value[0])} max={100} step={1} />
                    </div>
                     <div className="space-y-2">
                        <Label>Generated Positive Points (one per line)</Label>
                        <Textarea value={currentFirmData.positivePoints.join('\n')} onChange={e => handleFieldChange('positivePoints', e.target.value.split('\n'))} rows={4} />
                    </div>
                    <div className="space-y-2">
                        <Label>Generated Negative Points (one per line)</Label>
                        <Textarea value={currentFirmData.negativePoints.join('\n')} onChange={e => handleFieldChange('negativePoints', e.target.value.split('\n'))} rows={4} />
                    </div>
                </div>
            </div>
          </ScrollArea>
          <DialogFooter className="mt-4">
             <DialogClose asChild><Button type="button" variant="secondary">Cancel</Button></DialogClose>
            <Button type="button" onClick={handleSaveChanges}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      )}

    </Dialog>
  );
};
