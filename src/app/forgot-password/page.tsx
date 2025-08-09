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
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  return (
    <div className="max-w-md mx-auto">
       <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Forgot Password</h1>
        <p className="text-muted-foreground">
          Enter your email to receive a password reset link.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Reset Your Password</CardTitle>
          <CardDescription>
            We'll send a password reset link to the email address associated with your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="mt-4 text-center">
          <Button variant="link" asChild>
            <Link href="/login">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Login
            </Link>
          </Button>
      </div>
    </div>
  );
}
