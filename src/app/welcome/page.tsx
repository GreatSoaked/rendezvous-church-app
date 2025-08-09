import { WelcomeForm } from './welcome-form';

export default function WelcomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight font-headline">AI Welcome Message Generator</h1>
        <p className="text-muted-foreground">
          Craft the perfect welcome for newcomers based on their interests.
        </p>
      </div>
      <WelcomeForm />
    </div>
  );
}
