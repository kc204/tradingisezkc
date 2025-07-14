
'use client';
import type { PropFirm } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TrustpilotReviewsProps {
    firm: PropFirm;
}

const TrustpilotReviews = ({ firm }: TrustpilotReviewsProps) => {
    if (!firm.trustpilotReviews || firm.trustpilotReviews.length === 0) {
        return null;
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Trustpilot Reviews for {firm.name}</CardTitle>
                <CardDescription>See what other traders are saying.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {firm.trustpilotReviews.map((review, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <div className="flex items-center mb-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`}
                                />
                            ))}
                            <p className="ml-2 font-semibold text-foreground">{review.reviewerName}</p>
                            {review.isVerified && <span className="ml-2 text-xs text-green-500">(Verified)</span>}
                        </div>
                        <p className="text-sm text-muted-foreground">{`"${review.reviewContent}"`}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default TrustpilotReviews;
