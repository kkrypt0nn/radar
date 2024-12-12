import Link from "next/link";

type LinkTileProps = {
  href: string;
  external?: boolean;
  size?: "sm" | "lg";
  isNew?: boolean;
  dashed?: boolean;
  children: React.ReactNode;
};

export default function LinkTile({
  href,
  external,
  size = "lg",
  isNew,
  dashed,
  children,
}: LinkTileProps) {
  const paddingY = size == "lg" ? "4" : "2";
  return (
    <>
      <Link
        href={href}
        target={external ? "_blank" : "_self"}
        className={`relative rounded-lg border ${
          dashed ? "border-dashed" : ""
        } border-card-border ${
          dashed ? "" : "bg-card-background"
        } pl-4 py-${paddingY} hover:border-primary`}
      >
        <span>{children}</span>
        {isNew && (
          <span className="flex gap-1 items-center absolute bottom-1 right-2 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute bg-primary-accent rounded-full w-2 h-2 animate-ping"></span>
              <span className="relative bg-primary-accent rounded-full w-2 h-2"></span>
            </span>
            <span className="text-text-muted">New</span>
          </span>
        )}
      </Link>
    </>
  );
}
