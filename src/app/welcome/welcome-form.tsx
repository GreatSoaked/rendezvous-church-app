'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { getWelcomeMessage } from './actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Sparkles } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Generating...' : 'Generate Message'}
    </Button>
  );
}

export function WelcomeForm() {
  const initialState = { message: null, errors: null };
  const [state, dispatch] = useActionState(getWelcomeMessage, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.errors) {
      toast({
        title: 'Message Generated!',
        description: 'Your personalized welcome message is ready.',
      });
      formRef.current?.reset();
    } else if (state.message && state.errors) {
        toast({
            title: 'Error',
            description: state.message,
            variant: 'destructive',
        })
    }
  }, [state, toast]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card>
        <form action={dispatch} ref={formRef}>
          <CardHeader>
            <CardTitle>Newcomer Information</CardTitle>
            <CardDescription>
              Enter details below to generate a personalized welcome message.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newcomerDetails">Newcomer Details</Label>
              <Textarea
                id="newcomerDetails"
                name="newcomerDetails"
                placeholder="e.g., 'John, a software engineer who loves hiking and coffee. New to the city.'"
                className="min-h-[100px]"
                required
              />
               {state.errors?.newcomerDetails && (
                <p className="text-sm font-medium text-destructive">{state.errors.newcomerDetails[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="socialMediaPosts">Recent Social Media Posts</Label>
              <Textarea
                id="socialMediaPosts"
                name="socialMediaPosts"
                placeholder="Paste relevant posts here. e.g., 'Excited to announce our annual community picnic next month! All are welcome.'"
                className="min-h-[150px]"
                required
              />
               {state.errors?.socialMediaPosts && (
                <p className="text-sm font-medium text-destructive">{state.errors.socialMediaPosts[0]}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Generated Message</CardTitle>
          <CardDescription>
            The AI-powered welcome message will appear here.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex items-center justify-center">
            {state.message && !state.errors ? (
                <div className="text-center space-y-4 p-4 border-2 border-dashed rounded-lg">
                    <div className="flex justify-center">
                        <Sparkles className="h-8 w-8 text-primary"/>
                    </div>
                    <p className="text-sm text-foreground">{state.message}</p>
                </div>
            ) : (
                <div className="text-center text-muted-foreground p-4 border-2 border-dashed rounded-lg">
                    <p>Your message is waiting to be created...</p>
                </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
