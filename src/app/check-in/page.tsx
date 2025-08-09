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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

export default function CheckInPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Pre-Check-In</h1>
        <p className="text-muted-foreground">
          Streamline your arrival by checking in ahead of time.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Check-In Form</CardTitle>
          <CardDescription>
            Select an event and the people you are checking in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="event">Event or Service</Label>
              <Select>
                <SelectTrigger id="event">
                  <SelectValue placeholder="Select an event" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sunday-service">Sunday Service - 10:00 AM</SelectItem>
                  <SelectItem value="youth-group">Youth Group - Wednesday 7:00 PM</SelectItem>
                  <SelectItem value="community-bbq">Community BBQ - Saturday 12:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">Family Members</h3>
                <div className="flex items-center space-x-2">
                    <Checkbox id="member-1" defaultChecked />
                    <Label htmlFor="member-1">John Doe</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="member-2" defaultChecked />
                    <Label htmlFor="member-2">Jane Doe</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="member-3" />
                    <Label htmlFor="member-3">Jimmy Doe</Label>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="guest">Add a Guest</Label>
                <Input id="guest" placeholder="e.g., Sarah Smith" />
            </div>

            <Button type="submit" className="w-full">
              Pre-Check-In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
