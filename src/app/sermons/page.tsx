
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
import { PlayCircle, Wifi, PlusCircle, Pencil, Trash2 } from 'lucide-react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';


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

type UserRole = 'Admin' | 'Tribe Leader' | 'Editor' | 'Viewer';

export default function SermonsPage() {
  const [sermons, setSermons] = useState<Sermon[]>(initialSermons);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingSermon, setEditingSermon] = useState<Sermon | null>(null);
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>('Viewer');

  const canEdit = ['Admin', 'Editor'].includes(currentUserRole);

  const handleSaveSermon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSermon) return;

    const isNew = !sermons.some(s => s.title === (editingSermon as any).originalTitle);
    
    if (isNew) {
      setSermons([editingSermon, ...sermons]);
    } else {
      setSermons(sermons.map(s => s.title === (editingSermon as any).originalTitle ? editingSermon : s));
    }
    
    setIsDialogOpen(false);
    setEditingSermon(null);
  };

  const handleAddNewSermon = () => {
    setEditingSermon({
        title: '',
        speaker: '',
        date: '',
        series: '',
        imageUrl: 'https://placehold.co/600x400.png',
        dataAiHint: 'sermon church'
    });
    setIsDialogOpen(true);
  };

  const handleEditSermon = (sermon: Sermon) => {
    setEditingSermon({...sermon, originalTitle: sermon.title});
    setIsDialogOpen(true);
  }

  const handleDeleteSermon = (title: string) => {
    setSermons(sermons.filter(s => s.title !== title));
  }
  
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Sermons</h1>
        <p className="text-muted-foreground">
          Watch our latest sermon or browse our archives.
        </p>
      </div>

       <Card className="max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <Label htmlFor="role-switcher" className="whitespace-nowrap">Viewing as:</Label>
            <Select value={currentUserRole} onValueChange={(value: UserRole) => setCurrentUserRole(value)}>
                <SelectTrigger id="role-switcher" className="w-full">
                    <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Tribe Leader">Tribe Leader</SelectItem>
                    <SelectItem value="Editor">Editor</SelectItem>
                    <SelectItem value="Viewer">Viewer</SelectItem>
                </SelectContent>
            </Select>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            This is for demonstration. Admins, Tribe Leaders, and Editors can see editing controls.
          </p>
        </CardContent>
      </Card>

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
          {canEdit && (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={handleAddNewSermon}>
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Sermon
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{editingSermon && sermons.some(s => s.title === editingSermon.title) ? 'Edit Sermon' : 'Add New Sermon'}</DialogTitle>
                  <DialogDescription>
                    Fill out the details below.
                  </DialogDescription>
                </DialogHeader>
                {editingSermon && (
                  <form onSubmit={handleSaveSermon}>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">Title</Label>
                        <Input id="title" value={editingSermon.title} onChange={(e) => setEditingSermon({...editingSermon, title: e.target.value})} className="col-span-3" required />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="speaker" className="text-right">Speaker</Label>
                        <Input id="speaker" value={editingSermon.speaker} onChange={(e) => setEditingSermon({...editingSermon, speaker: e.target.value})} className="col-span-3" required/>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">Date</Label>
                        <Input id="date" type="date" value={editingSermon.date} onChange={(e) => setEditingSermon({...editingSermon, date: e.target.value})} className="col-span-3" required/>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="series" className="text-right">Series</Label>
                        <Input id="series" value={editingSermon.series} onChange={(e) => setEditingSermon({...editingSermon, series: e.target.value})} className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="media" className="text-right">Photo/Video</Label>
                        <Input id="media" type="file" className="col-span-3" accept="image/*,video/*" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" type="button" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                      <Button type="submit">Save</Button>
                    </DialogFooter>
                  </form>
                )}
              </DialogContent>
            </Dialog>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sermons.map((sermon) => (
            <Card key={sermon.title} className="flex flex-col group">
              <CardContent className="p-0 relative">
                {canEdit && (
                  <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                      <Button size="icon" variant="secondary" onClick={() => handleEditSermon(sermon)}><Pencil className="h-4 w-4" /></Button>
                      <Button size="icon" variant="destructive" onClick={() => handleDeleteSermon(sermon.title)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                )}
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
