
import { StarBorder } from "@/components/ui/star-border";
import { mockFreeResources } from "@/lib/mockData";
import type { VideoLesson } from "@/lib/types";
import { PlayCircle, ListChecks, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: 'Al Brooks Free Video Course Samples | TradingisEZ',
  description: "Access free sample video lessons from Al Brooks' renowned price action trading course. Understand market structure and bar-by-bar analysis.",
};

export default function AlBrooksFreeCoursePage() {
  const courseData = mockFreeResources.find(r => r.slug === "al-brooks-course" && r.resourceType === "Free Video Course Series");

  if (!courseData) {
    return <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">Course data not found.</div>;
  }

  const { title, pageIntroduction, mainAffiliateLink, mainCTAText, videoLessons, concludingCTASection } = courseData;

  return (
    <div className="space-y-12">
      <section className="text-center py-12 md:py-16 bg-background rounded-xl shadow-xl">
        <div className="container mx-auto px-4">
          <PlayCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
          {pageIntroduction && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
               dangerouslySetInnerHTML={{ __html: pageIntroduction.replace(/\n/g, '<br />') }} />
          )}
          {mainAffiliateLink && mainCTAText && (
            <StarBorder<typeof Link>
              as={Link}
              href={mainAffiliateLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {mainCTAText} <ExternalLink className="ml-2 h-4 w-4" />
            </StarBorder>
          )}
        </div>
      </section>

      {videoLessons && videoLessons.length > 0 && (
        <section className="container mx-auto px-4 space-y-8">
          {videoLessons.map((lesson, index) => (
            <Card key={index} className="shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-muted p-4 md:p-6 flex items-center justify-center aspect-video max-w-xl mx-auto w-full">
                  {lesson.videoEmbedCodeOrURL && lesson.videoEmbedCodeOrURL.includes("youtube.com/embed") ? (
                     <iframe
                        className="w-full h-full"
                        src={lesson.videoEmbedCodeOrURL}
                        title={lesson.lessonTitle}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                  ) : (
                    <div className="w-full h-full bg-black text-white flex flex-col items-center justify-center text-center">
                      <PlayCircle className="w-12 h-12 mb-2 opacity-50" />
                      <p>Video: {lesson.lessonTitle}<br/> 
                         {lesson.videoEmbedCodeOrURL ? `(Embed: ${lesson.videoEmbedCodeOrURL})` : '(Video source not available)'}
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-2xl text-foreground">{lesson.lessonTitle}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    {lesson.lessonDescription && (
                      <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: lesson.lessonDescription.replace(/\n/g, '<br />') }} />
                    )}
                    {lesson.lessonKeyTakeaways && lesson.lessonKeyTakeaways.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-1.5 flex items-center">
                          <ListChecks className="w-5 h-5 mr-2 text-primary" /> Key Takeaways:
                        </h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm pl-2">
                          {lesson.lessonKeyTakeaways.map((takeaway, i) => (
                            <li key={i}>{takeaway}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {lesson.lessonCTAText && lesson.lessonCTALink && (
                      <div className="mt-6">
                        <StarBorder<typeof Link>
                          as={Link}
                          href={lesson.lessonCTALink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                           {lesson.lessonCTAText} <ExternalLink className="ml-1.5 h-4 w-4" />
                        </StarBorder>
                      </div>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </section>
      )}

      {concludingCTASection && (
         <section className="container mx-auto px-4 text-center py-10 bg-card rounded-xl shadow-xl">
          <div className="prose prose-lg dark:prose-invert mx-auto text-foreground">
             <div dangerouslySetInnerHTML={{ __html: concludingCTASection.replace(/\n/g, '<br />') }} />
          </div>
          {mainAffiliateLink && mainCTAText && (
            <div className="mt-8">
              <StarBorder<typeof Link>
                as={Link}
                href={mainAffiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg"
              >
                {mainCTAText} <ExternalLink className="ml-2 h-4 w-4" />
              </StarBorder>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
