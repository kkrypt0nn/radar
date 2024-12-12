"use client";

import Filter from "@/components/Filter";
import Link from "@/components/Link";
import LinkTile from "@/components/LinkTile";
import SEO from "@/components/SEO";
import { config } from "@/config";
import { Category, Tool, tools } from "@/data/tools";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function ToolsRoute() {
  const uniqueCategories = [
    "All Tools" as Category,
    ...Array.from(new Set(tools.flatMap((tool: Tool) => tool.categories))).sort(
      (a, b) => a.localeCompare(b)
    ),
  ];
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("c") as Category;
  const queryParam = searchParams.get("q");
  const [activeCategory, setActiveCategory] = useState<Category | "All Tools">(
    uniqueCategories.includes(categoryParam) ? categoryParam : "All Tools"
  );
  const [searchQuery, setSearchQuery] = useState(queryParam ? queryParam : "");

  const filteredTools = tools
    .filter((tool: Tool) =>
      activeCategory === "All Tools"
        ? true
        : tool.categories.includes(activeCategory as Category)
    )
    .filter((tool: Tool) => tool.name.toLowerCase().includes(searchQuery))
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const params = new URLSearchParams();
    if (newValue) {
      params.set("q", newValue);
    }
    if (activeCategory !== "All Tools") {
      params.set("c", activeCategory);
    }
    router.push(`/tools?${params.toString()}`);
    setSearchQuery(newValue);
  };

  const handleCategoryClick = (category: Category) => {
    const params = new URLSearchParams();
    if (category !== ("All Tools" as Category)) {
      params.set("c", category);
    }
    if (searchQuery) {
      params.set("q", searchQuery);
    }
    router.push(`/tools?${params.toString()}`);
    setActiveCategory(category);
  };

  return (
    <>
      {activeCategory !== "All Tools" ? (
        <SEO
          title={`${activeCategory} Tools`}
          description={`Browse the list of ${activeCategory.toLowerCase()} tools`}
          slug={`/tools?${new URLSearchParams({ c: activeCategory })}`}
        />
      ) : (
        <SEO
          title="Tools"
          description="Explore the collection of tools"
          slug="/tools"
        />
      )}
      <section className="flex flex-col items-center text-center pt-12 pb-6 lg:pt-24 lg:pb-12.">
        <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Tools
        </h1>
        <p className="text-md lg:text-lg font-normal text-text-muted mb-4">
          Explore the collection of tools
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 mb-12">
          <input
            className="w-72 p-2 bg-background-muted border border-card-border rounded-lg"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
          ></input>
        </div>
      </section>
      <section className="flex flex-wrap gap-2 justify-center pb-3 lg:pb-6">
        {uniqueCategories.map((category: Category) => {
          return (
            <div onClick={() => handleCategoryClick(category)} key={category}>
              <Filter content={category} active={activeCategory === category} />
            </div>
          );
        })}
      </section>
      <section className="pb-12 lg:pb-24">
        {filteredTools.length === 0 ? (
          <p className="text-center text-xl mt-8 text-text-muted">
            No results found. If you think this is a mistake or would like to
            add the tool, please open an issue{" "}
            <Link href={config.gitHub.requestNewToolIssueUrl} external>
              here
            </Link>
            .
          </p>
        ) : (
          <div className="w-full grid gap-3 md:grid-cols-3 lg:grid-cols-4">
            {filteredTools.map((tool: Tool) => {
              const toolPath = tool.name.toLowerCase().replace(" ", "-");
              const toolLowerDate = new Date();
              toolLowerDate.setDate(
                toolLowerDate.getDate() - config.newToolLastDays
              );
              return (
                <LinkTile
                  key={toolPath}
                  href={`/tools/${toolPath}`}
                  isNew={tool.added >= toolLowerDate}
                >
                  {tool.name}
                </LinkTile>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
