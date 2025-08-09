import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-lg font-bold font-headline", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <circle cx="12" cy="12" r="11" fill="black" stroke="none" />
        <path
          d="M7 11.5L12 7.5L17 11.5"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M8 17V12H12"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M12 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M14 8.5C14 9.32843 13.1046 10 12 10C10.8954 10 10 9.32843 10 8.5"
           stroke="white"
           strokeWidth="1"
        />
      </svg>
      <span>Rendezvous Church</span>
    </div>
  );
}
