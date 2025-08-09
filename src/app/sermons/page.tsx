
"use client";

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle, Wifi, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const initialSermons = [
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

type Sermon = {
  title: string;
  speaker: string;
  date: string;
  series: string;
  imageUrl: string;
  dataAiHint: string;
};

export default function SermonsPage() {
  const [sermons, setSermons] = useState<Sermon[]>(initialSermons);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newSermon, setNewSermon] = useState({
      title: '',
      speaker: '',
      date: '',
      series: '',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'sermon church'
  });

  const handleAddSermon = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle file upload to a server/storage
    // and get back a URL. We'll use a placeholder.
    const sermonToAdd = {
        ...newSermon,
        imageUrl: newSermon.imageUrl || 'https://placehold.co/600x400.png'
    }
    setSermons(prevSermons => [sermonToAdd, ...prevSermons]);
    setIsDialogOpen(false);
    setNewSermon({
        title: '',
        speaker: '',
        date: '',
        series: '',
        imageUrl: 'https://placehold.co/600x400.png',
        dataAiHint: 'sermon church'
    });
  };
  
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold tracking-tight font-headline">Past Recordings</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Sermon
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a New Sermon</DialogTitle>
                <DialogDescription>
                  Fill out the details below to add a new sermon to the archive.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddSermon}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                      Title
                    </Label>
                    <Input id="title" value={newSermon.title} onChange={(e) => setNewSermon({...newSermon, title: e.target.value})} className="col-span-3" required />
                  </div>
                   <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="speaker" className="text-right">
                      Speaker
                    </Label>
                    <Input id="speaker" value={newSermon.speaker} onChange={(e) => setNewSermon({...newSermon, speaker: e.target.value})} className="col-span-3" required/>
                  </div>
                   <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="date" className="text-right">
                      Date
                    </Label>
                    <Input id="date" type="date" value={newSermon.date} onChange={(e) => setNewSermon({...newSermon, date: e.target.value})} className="col-span-3" required/>
                  </div>
                   <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="series" className="text-right">
                      Series
                    </Label>
                    <Input id="series" value={newSermon.series} onChange={(e) => setNewSermon({...newSermon, series: e.target.value})} className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="media" className="text-right">
                      Photo/Video
                    </Label>
                    <Input id="media" type="file" className="col-span-3" accept="image/*,video/*" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                  <Button type="submit">Add Sermon</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sermons.map((sermon) => (
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
