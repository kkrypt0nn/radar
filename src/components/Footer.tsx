import Link from "next/link";
import { config, FooterItem } from "../config";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row gap-2 py-6 w-full items-center border-t border-card-border">
      <p className="text-xs text-text-muted">
        Copyright © 2024 Krypton - All rights reserved
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        {config.footerItems.map((item: FooterItem) => {
          return (
            <Link
              key={item.name}
              href={item.path}
              className="text-xs hover:text-primary"
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}
