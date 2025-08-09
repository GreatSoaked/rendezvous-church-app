
"use client";

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowUp, ArrowDown, Home, Calendar, Clapperboard, HandHelping, HeartHandshake, Users, BookOpen, LogIn, Sparkles, Mail, KeyRound, UserPlus, MessageSquare, Settings } from 'lucide-react';

const initialUsers = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    initials: 'JD',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Editor',
    initials: 'JS',
  },
  {
    name: 'Michael Johnson',
    email: 'michael.j@example.com',
    role: 'Viewer',
    initials: 'MJ',
  },
];

type User = {
  name: string;
  email: string;
  role: string;
  initials: string;
};

const initialNavItems = [
    { href: "/", label: "Dashboard", icon: Home },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/sermons", label: "Sermons", icon: Clapperboard },
    { href: "/giving", label: "Giving", icon: HandHelping },
    { href: "/prayer", label: "Prayer Requests", icon: HeartHandshake },
    { href: "/groups", label: "Groups", icon: Users },
    { href: "/resources", label: "Resources", icon: BookOpen },
    { href: "/check-in", label: "Pre-Check-In", icon: LogIn },
    { href: "/welcome", label: "Welcome Tool", icon: Sparkles },
    { href: "/inbox", label: "Inbox", icon: Mail },
    { href: "/login", label: "Login", icon: KeyRound },
    { href: "/register", label: "Register", icon: UserPlus },
    { href: "/admin/messaging", label: "Messaging", icon: MessageSquare },
    { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminSettingsPage() {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [navItems, setNavItems] = useState(initialNavItems);

  const handleEditClick = (user: User) => {
    setEditingUser(user);
    setIsDialogOpen(true);
  };

  const handleSaveChanges = () => {
    if (editingUser) {
      setUsers(users.map(u => u.email === editingUser.email ? editingUser : u));
    }
    setIsDialogOpen(false);
    setEditingUser(null);
  };

  const moveNavItem = (index: number, direction: 'up' | 'down') => {
    const newNavItems = [...navItems];
    const item = newNavItems[index];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (swapIndex < 0 || swapIndex >= newNavItems.length) {
      return;
    }

    newNavItems.splice(index, 1);
    newNavItems.splice(swapIndex, 0, item);
    setNavItems(newNavItems);
  };

  return (
    <div className="space-y-8">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Admin Settings</h1>
        <p className="text-muted-foreground">
          Manage your application's configuration and users.
        </p>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Update your site's basic information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input id="site-name" defaultValue="Rendezvous Church" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea
                  id="site-description"
                  defaultValue="Your central hub for church community and engagement."
                  className="min-h-[100px]"
                />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the look and feel of your application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="space-y-2">
                <Label htmlFor="logo">Logo</Label>
                <Input id="logo" type="file" />
                <p className="text-sm text-muted-foreground">Upload a new logo (e.g., PNG, JPG, SVG).</p>
              </div>
               <div className="space-y-2">
                <Label>Theme Colors</Label>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary border" />
                        <span>Primary</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-accent border" />
                        <span>Accent</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-background border" />
                        <span>Background</span>
                    </div>
                </div>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="navigation">
          <Card>
            <CardHeader>
              <CardTitle>Sidebar Navigation</CardTitle>
              <CardDescription>
                Drag and drop to reorder the items in the main sidebar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.href} className="flex items-center justify-between rounded-md border bg-background p-3">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" onClick={() => moveNavItem(index, 'up')} disabled={index === 0}>
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => moveNavItem(index, 'down')} disabled={index === navItems.length - 1}>
                        <ArrowDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
             <CardFooter>
                <Button>Save Order</Button>
            </CardFooter>
          </Card>
        </TabsContent>


        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Manage who has access to your application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.email}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                           <Avatar>
                            <AvatarImage src={`https://placehold.co/40x40.png?text=${user.initials}`} />
                            <AvatarFallback>{user.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>{user.role}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" onClick={() => handleEditClick(user)}>Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Make changes to the user's profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          {editingUser && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Photo
                </Label>
                <div className="col-span-3 flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={`https://placehold.co/40x40.png?text=${editingUser.initials}`} />
                        <AvatarFallback>{editingUser.initials}</AvatarFallback>
                    </Avatar>
                    <Input id="photo" type="file" className="text-sm"/>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={editingUser.name}
                  onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <Select
                  value={editingUser.role}
                  onValueChange={(value) => setEditingUser({ ...editingUser, role: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Editor">Editor</SelectItem>
                    <SelectItem value="Viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveChanges}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
