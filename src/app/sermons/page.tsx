import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, Wifi } from 'lucide-react';

const pastSermons = [
  {
    title: 'The Foundation of Faith',
    speaker: 'Pastor John Smith',
    date: 'August 11, 2024',
    series: 'Building a Strong Life',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'sermon church'
  },
  {
    title: 'Living in Grace',
    speaker: 'Pastor John Smith',
    date: 'August 4, 2024',
    series: 'Building a Strong Life',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'pastor preaching'
  },
  {
    title: 'A Heart of Service',
    speaker: 'Guest Speaker: Jane Doe',
    date: 'July 28, 2024',
    series: 'Guest Series',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'church congregation'
  },
  {
    title: 'The Power of Prayer',
    speaker: 'Pastor John Smith',
    date: 'July 21, 2024',
    series: 'Spiritual Disciplines',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'prayer hands'
  },
];

export default function SermonsPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Sermons</h1>
        <p className="text-muted-foreground">
          Watch our latest sermon or browse our archives.
        </p>
      </div>

      <Card>
        <CardHeader>
            <div className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-red-500 animate-pulse" />
                <CardTitle>Live Stream</CardTitle>
            </div>
            <CardDescription>Our Sunday service is currently live. Join us!</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <Image
                    src="https://placehold.co/1280x720.png"
                    alt="Live sermon stream"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover"
                    data-ai-hint="live stream church"
                />
            </div>
            <Button className="w-full mt-4">
                <PlayCircle className="mr-2 h-4 w-4" /> Watch Live
            </Button>
        </CardContent>
      </Card>
      
      <div>
        <h2 className="text-2xl font-bold tracking-tight font-headline mb-4">Past Recordings</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pastSermons.map((sermon) => (
            <Card key={sermon.title} className="flex flex-col">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <Image
                    src={sermon.imageUrl}
                    alt={sermon.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    data-ai-hint={sermon.dataAiHint}
                    />
                </div>
              </CardContent>
              <CardHeader className="flex-grow">
                <CardTitle className="text-base">{sermon.title}</CardTitle>
                <CardDescription>
                  {sermon.speaker} - {sermon.date}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
