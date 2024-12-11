type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
};

export default function Button({ onClick, type, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="max-w-28 flex items-center p-2 bg-primary-accent hover:bg-primary-muted gap-2 rounded-lg"
    >
      {children}
    </button>
  );
}
