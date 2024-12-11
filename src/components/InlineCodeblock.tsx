import React from "react";

export default function InlineCodeblock({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <pre className="bg-code-background px-2 rounded break-all whitespace-pre-wrap inline">
      {children}
    </pre>
  );
}
