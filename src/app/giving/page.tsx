"use client"
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';

export default function GivingPage() {
    const [amount, setAmount] = useState('50');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Online Giving</h1>
        <p className="text-muted-foreground">
          Support our ministry and mission with your generous gift.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Give a Donation</CardTitle>
          <CardDescription>
            Your contribution helps us make a difference in our community and beyond.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Amount</Label>
            <RadioGroup
              defaultValue="50"
              className="grid grid-cols-2 gap-4 md:grid-cols-4"
              onValueChange={setAmount}
              value={amount}
            >
              <div>
                <RadioGroupItem value="25" id="amount-25" className="peer sr-only" />
                <Label
                  htmlFor="amount-25"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  $25
                </Label>
              </div>
              <div>
                <RadioGroupItem value="50" id="amount-50" className="peer sr-only" />
                <Label
                  htmlFor="amount-50"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  $50
                </Label>
              </div>
              <div>
                <RadioGroupItem value="100" id="amount-100" className="peer sr-only" />
                <Label
                  htmlFor="amount-100"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  $100
                </Label>
              </div>
              <div>
                <RadioGroupItem value="250" id="amount-250" className="peer sr-only" />
                <Label
                  htmlFor="amount-250"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  $250
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="custom-amount">Or Custom Amount</Label>
            <Input id="custom-amount" type="number" placeholder="$0.00" />
          </div>
          <div className="space-y-2">
            <Label>Frequency</Label>
            <RadioGroup defaultValue="one-time" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" />
                <Label htmlFor="one-time">One Time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weekly" id="weekly" />
                <Label htmlFor="weekly">Weekly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">Monthly</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Give Securely</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
