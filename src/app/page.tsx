"use client";

import Button from "@/components/Button";
import LinkTile from "@/components/LinkTile";
import { config, NewCategory } from "@/config";
import { Category, Tool, tools } from "@/data/tools";
import { BlocksIcon, ClockIcon, PlusIcon, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function IndexRoute() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const uniqueCategories = Array.from(
    new Set(tools.flatMap((tool: Tool) => tool.categories))
  ).sort((a, b) => a.localeCompare(b));
  const recentlyAddedTools = tools
    .sort((a, b) => {
      return b.added.getTime() - a.added.getTime();
    })
    .slice(0, config.homeTotalRecentlyAddedTools);

  const performSearch = () => {
    router.push(`/tools?q=${encodeURIComponent(searchQuery)}`);
  };
  return (
    <>
      <section className="flex flex-col items-center text-center py-12 lg:py-24">
        <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight gradient-primary">
          Find the Right Cybersecurity Tools
        </h1>
        <p className="mb-12 text-lg lg:text-xl font-normal text-text-muted">
          The directory for protecting, testing, and fortifying your digital
          environment.
        </p>
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
          }}
          className="flex gap-3"
        >
          <input
            className="w-72 p-2 bg-background-muted border border-card-border rounded-lg"
            value={searchQuery}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Search for tools..."
          ></input>
          <Button onClick={performSearch}>
            <SearchIcon /> Search
          </Button>
        </form>
      </section>
      <section className="border-y border-card-border py-12 lg:py-24">
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <ClockIcon size={24} className="text-primary" />
            <h2 className="text-2xl tracking-tighter font-bold">
              Recently added tools
            </h2>
          </div>
          <p className="text-text-muted">
            Check out the freshest entries in the collection.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
          {recentlyAddedTools.map((tool: Tool) => {
            const toolPath = tool.name.toLowerCase().replace(" ", "-");
            const toolLowerDate = new Date();
            toolLowerDate.setDate(
              toolLowerDate.getDate() - config.newToolLastDays
            );
            return (
              <LinkTile
                key={tool.name}
                isNew={tool.added >= toolLowerDate}
                href={`/tools/${toolPath}`}
              >
                {tool.name}
              </LinkTile>
            );
          })}
          <LinkTile href={config.gitHub.requestNewToolIssueUrl} external dashed>
            <div className="flex justify-center gap-2 text-text-muted">
              <PlusIcon />
              <p>Add a new tool</p>
            </div>
          </LinkTile>
        </div>
      </section>
      <section className="py-12 lg:py-24">
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <BlocksIcon size={24} className="text-primary" />
            <h2 className="text-2xl tracking-tighter font-bold">
              Category-based tools
            </h2>
          </div>
          <p className="text-text-muted">
            Find tools sorted by categories to suit your needs.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
          {uniqueCategories.map((category: Category) => {
            const isNew = config.newCategories?.some(
              (newCategory: NewCategory) => {
                return (
                  newCategory.name == category &&
                  newCategory.until >= new Date()
                );
              }
            );
            return (
              <LinkTile
                key={category}
                href={`/tools?c=${category}`}
                isNew={isNew}
              >
                {category}
              </LinkTile>
            );
          })}
        </div>
      </section>
    </>
  );
}
