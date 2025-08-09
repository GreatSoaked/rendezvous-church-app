import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const groups = [
  {
    name: 'Young Adults Connect',
    schedule: 'Tuesdays at 7:00 PM',
    leader: 'John & Jane Smith',
    category: 'Small Group',
    material: 'Book of Romans',
  },
  {
    name: 'Men\'s Bible Study',
    schedule: 'Saturdays at 8:00 AM',
    leader: 'David Chen',
    category: 'Bible Study',
    material: 'The Pursuit of Holiness',
  },
  {
    name: 'Worship Team',
    schedule: 'Thursdays at 6:30 PM',
    leader: 'Sarah Lee',
    category: 'Ministry Team',
    material: 'Weekly Song Set',
  },
  {
    name: 'Alpha Course',
    schedule: 'Mondays at 7:00 PM',
    leader: 'Michael Brown',
    category: 'Class',
    material: 'Alpha Film Series',
  },
   {
    name: 'Women of Faith',
    schedule: 'Wednesdays at 9:30 AM',
    leader: 'Emily White',
    category: 'Small Group',
    material: 'Seamless by Angie Smith',
  },
   {
    name: 'Welcome Team',
    schedule: 'Sundays before service',
    leader: 'Chris Green',
    category: 'Ministry Team',
    material: 'N/A',
  },
];

export default function GroupsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Find Your Group</h1>
        <p className="text-muted-foreground">
          Life is better together. Find a group to connect with.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <Card key={group.name} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{group.name}</CardTitle>
                <Badge variant="outline">{group.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow">
               <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{group.schedule}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="mr-2 h-4 w-4" />
                <span>Led by {group.leader}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <BookOpen className="mr-2 h-4 w-4" />
                <span>Studying: {group.material}</span>
              </div>
            </CardContent>
            <div className="p-6 pt-0">
               <Button variant="outline" className="w-full">Request to Join</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
