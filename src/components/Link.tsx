import React from "react";

type LinkProps = {
  href: string;
  external?: boolean;
  children: React.ReactNode;
};

export default function Link({ href, external, children }: LinkProps) {
  return (
    <a
      className="text-primary hover:text-primary-muted hover:underline"
      href={href}
      target={external ? "_blank" : "_self"}
    >
      {children}
    </a>
  );
}
