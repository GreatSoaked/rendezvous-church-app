import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Terms & Conditions</h1>
        <p className="text-muted-foreground">Last updated: August 12, 2024</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Agreement to Terms</CardTitle>
          <CardDescription>
            These Terms and Conditions constitute a legally binding agreement made between you and Rendezvous Church concerning your access to and use of the application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold">1. User Accounts</h3>
            <p className="text-sm text-muted-foreground">
              When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">2. User Conduct</h3>
            <p className="text-sm text-muted-foreground">
              You agree not to use the Service to post or otherwise transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">3. Intellectual Property</h3>
            <p className="text-sm text-muted-foreground">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Rendezvous Church and its licensors.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">4. Termination</h3>
            <p className="text-sm text-muted-foreground">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">5. Governing Law</h3>
            <p className="text-sm text-muted-foreground">
              These Terms shall be governed and construed in accordance with the laws of the land, without regard to its conflict of law provisions.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Contact Us</h3>
            <p className="text-sm text-muted-foreground">
              If you have any questions about these Terms, please contact us at: contact@rendezvous.church
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
