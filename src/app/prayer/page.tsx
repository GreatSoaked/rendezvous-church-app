import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Heart } from 'lucide-react';

const prayerRequests = [
    {
        name: 'A Member',
        request: 'Please pray for my mother\'s upcoming surgery to go smoothly and for a quick recovery.',
        date: '3 days ago'
    },
    {
        name: 'Anonymous',
        request: 'Pray for guidance and wisdom as I make a major career decision this week.',
        date: '1 day ago'
    },
    {
        name: 'The Johnson Family',
        request: 'For peace and comfort during a difficult family time. We appreciate the support.',
        date: '5 days ago'
    }
]

export default function PrayerPage() {
  return (
    <div className="grid gap-12 md:grid-cols-5">
      <div className="space-y-8 md:col-span-3">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight font-headline">Prayer Wall</h1>
          <p className="text-muted-foreground">
            Share your requests and lift up others in prayer.
          </p>
        </div>
        <div className="space-y-4">
            {prayerRequests.map((req, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle className="text-lg">{req.name}</CardTitle>
                        <CardDescription>{req.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-between items-start">
                        <p className="text-sm">{req.request}</p>
                        <Button variant="ghost" size="icon">
                            <Heart className="h-5 w-5" />
                            <span className="sr-only">Pray for this</span>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>

      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Submit a Prayer Request</CardTitle>
            <CardDescription>
              Your request will be shared with our prayer team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name (Optional)</Label>
                <Input id="name" placeholder="e.g., John D. or Anonymous" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="request">Prayer Request</Label>
                <Textarea
                  id="request"
                  placeholder="Please enter your prayer request here..."
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
