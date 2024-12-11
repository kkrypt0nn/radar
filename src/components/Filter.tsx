type FilterProps = {
  content: string;
  active?: boolean;
};

export default function Filter({ content, active }: FilterProps) {
  return (
    <>
      <span
        className={`rounded-lg border ${
          active ? "border-primary-accent" : "border-card-border"
        } bg-background-muted hover:border-primary hover:cursor-pointer font-medium inline-flex items-center px-2.5 py-0.5`}
      >
        <span
          className={`${
            active ? "bg-filter-enabled" : "bg-filter-disabled"
          } rounded-full mr-2 w-2 h-2`}
        ></span>
        {content}
      </span>
    </>
  );
}
