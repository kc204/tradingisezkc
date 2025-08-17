
'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Star, MessageSquare, Youtube, X, Loader2, Wand2, PlusCircle, Trash2, CalendarIcon } from 'lucide-react';
import type { WeeklyData, FirmData, ContentSource, TrendData } from '@/lib/types';
import { generateSentimentSummaryAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AdminPanelProps {
  weeklyData: WeeklyData;
  trendData: TrendData[];
  allFirms: FirmData[];
  onSave: (data: WeeklyData) => void;
  calculateWeightedScore: (data: { trustpilotRating: number; redditSentiment: number; youtubeSentiment: number; xSentiment: number; }) => number;
  children: React.ReactNode;
}

const XIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-300">
        <title>X</title>
        <path
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
            fill="currentColor"
        />
    </svg>
);


const SourceInputList: React.FC<{
  sources: ContentSource[];
  onSourcesChange: (sources: ContentSource[]) => void;
  platformName: 'Reddit' | 'YouTube' | 'X';
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
  
  const getPlatformIcon = () => {
      switch(platformName) {
          case 'Reddit': return <MessageSquare className="w-5 h-5 text-orange-400" />;
          case 'YouTube': return <Youtube className="w-5 h-5 text-red-500" />;
          case 'X': return <XIcon />;
          default: return null;
      }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="flex items-center gap-2">
          {getPlatformIcon()}
          Raw {platformName} Sources
        </Label>
        <Button size="sm" variant="ghost" type="button" onClick={addSource}>
          <PlusCircle className="w-4 h-4 mr-2" />
          Add {platformName === 'YouTube' ? 'Video' : 'Post'}
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
              placeholder={`${platformName === 'YouTube' ? 'Video transcript' : 'Post content'}...`}
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


export const AdminPanel: React.FC<AdminPanelProps> = ({ weeklyData, trendData, onSave, children, allFirms, calculateWeightedScore }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const [localWeeklyData, setLocalWeeklyData] = useState<WeeklyData | null>(null);
  const [editingFirm, setEditingFirm] = useState<string | null>(null);
  const [editingWeekLabel, setEditingWeekLabel] = useState<string | null>(null);
  
  useEffect(() => {
    if (isPanelOpen) {
      setLocalWeeklyData(JSON.parse(JSON.stringify(weeklyData)));
      if (allFirms.length > 0 && !editingFirm) {
        setEditingFirm(allFirms[0].name);
      }
      if (trendData.length > 0 && !editingWeekLabel) {
        setEditingWeekLabel(trendData[trendData.length -1].week);
      }
    }
  }, [isPanelOpen, weeklyData, allFirms, editingFirm, trendData]);

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

  const handleSourcesChange = (platform: 'reddit' | 'youtube' | 'x', sources: ContentSource[]) => {
      let field: 'redditSources' | 'youtubeSources' | 'xSources';
      switch(platform) {
          case 'reddit': field = 'redditSources'; break;
          case 'youtube': field = 'youtubeSources'; break;
          case 'x': field = 'xSources'; break;
      }
      handleFieldChange(field, sources);
  }

  const handleGenerateSummary = async () => {
      if (!editingFirm || !localWeeklyData) return;

      const currentFirm = localWeeklyData[editingFirm];
      const redditContent = currentFirm.redditSources.map(s => `${s.post}\n${s.comments}`).join('\n\n---\n\n');
      const youtubeContent = currentFirm.youtubeSources.map(s => `${s.post}\n${s.comments}`).join('\n\n---\n\n');
      const xContent = currentFirm.xSources.map(s => `${s.post}\n${s.comments}`).join('\n\n---\n\n');

      if (!redditContent && !youtubeContent && !xContent) {
          toast({ variant: 'destructive', title: 'Error', description: 'Please provide content from at least one platform to generate a summary.' });
          return;
      }

      setIsGenerating(true);
      const result = await generateSentimentSummaryAction({ redditContent, youtubeContent, xContent });
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
            <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
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
                <div>
                   <Label htmlFor="week-select">Select Week to Edit</Label>
                   <Select value={editingWeekLabel || ''} onValueChange={setEditingWeekLabel}>
                      <SelectTrigger id="week-select"><SelectValue placeholder="Select a week..." /></SelectTrigger>
                      <SelectContent>
                          {trendData.map(week => (
                              <SelectItem key={week.week} value={week.week}>{week.week}</SelectItem>
                          ))}
                      </SelectContent>
                  </Select>
                </div>
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
                     <SourceInputList 
                      sources={currentFirmData.xSources || []}
                      onSourcesChange={(sources) => handleSourcesChange('x', sources)}
                      platformName="X"
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
                    <div className="space-y-3">
                        <Label className="flex items-center gap-2"><XIcon /> X Sentiment ({currentFirmData.xSentiment})</Label>
                        <Slider value={[currentFirmData.xSentiment]} onValueChange={(value) => handleFieldChange('xSentiment', value[0])} max={100} step={1} />
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
