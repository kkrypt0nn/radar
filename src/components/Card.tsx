import { ReactElement } from "react";

interface CardProps {
  children: [ReactElement<typeof CardTitle>, ReactElement<typeof CardContent>];
}

export default function Card({ children }: CardProps) {
  return (
    <div className="p-6 border border-card-border bg-card-background rounded-lg space-y-4">
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
      {children}
    </h2>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
