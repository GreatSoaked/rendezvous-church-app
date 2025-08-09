import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: August 12, 2024</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
          <CardDescription>
            Your privacy is important to us. This Privacy Policy explains how Rendezvous Church ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you use our application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold">Information We Collect</h3>
            <p className="text-sm text-muted-foreground">
              We may collect information about you in a variety of ways. The information we may collect on the App includes:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Personal Data: Personally identifiable information, such as your name, email address, and demographic information, that you voluntarily give to us when you register with the App.</li>
              <li>Usage Data: Information our servers automatically collect when you access the App, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the App.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Use of Your Information</h3>
            <p className="text-sm text-muted-foreground">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:
            </p>
             <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Enable user-to-user communications.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the App.</li>
                <li>Notify you of updates to the App.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Security of Your Information</h3>
            <p className="text-sm text-muted-foreground">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </div>
           <div className="space-y-2">
            <h3 className="font-semibold">Contact Us</h3>
            <p className="text-sm text-muted-foreground">
              If you have questions or comments about this Privacy Policy, please contact us at: contact@rendezvous.church
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
