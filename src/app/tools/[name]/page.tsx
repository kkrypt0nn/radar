"use client";

import Card, { CardContent, CardTitle } from "@/components/Card";
import Filter from "@/components/Filter";
import InstallationSteps from "@/components/InstallationSteps";
import SEO from "@/components/SEO";
import { Category, Tool, tools } from "@/data/tools";
import {
  faGithub,
  faGitlab,
  faLinux,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CommandIcon, GlobeIcon, ShieldIcon } from "lucide-react";
import {
  notFound,
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Markdown from "react-markdown";

/* eslint-disable react-hooks/rules-of-hooks */
export default function ToolRoute() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = useParams().name;
  const tool: Tool | undefined = tools.find(
    (t: Tool) => t.name.toLowerCase().replace(" ", "-") == name
  );
  if (!tool) {
    return notFound();
  }

  const [installationPlatform, setInstallationPlatform] = useState<
    "linux" | "macos" | "windows"
  >(() => {
    const platformParam = searchParams.get("p");
    return platformParam && platformParam in tool.installationSteps
      ? (platformParam as "linux" | "macos" | "windows")
      : tool.installationSteps.linux
      ? "linux"
      : tool.installationSteps.macos
      ? "macos"
      : "windows";
  });

  const [installationSteps, setInstallationSteps] = useState(
    tool.installationSteps[installationPlatform]
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const platformParam = searchParams.get("p");
    if (platformParam && platformParam in tool.installationSteps) {
      setInstallationPlatform(platformParam as "linux" | "macos" | "windows");
    }
  }, [searchParams, tool.installationSteps]);

  useEffect(() => {
    setInstallationSteps(
      installationPlatform == "linux"
        ? tool.installationSteps.linux
        : installationPlatform == "macos"
        ? tool.installationSteps.macos
        : installationPlatform == "windows"
        ? tool.installationSteps.windows
        : []
    );
  }, [
    installationPlatform,
    tool.installationSteps.linux,
    tool.installationSteps.macos,
    tool.installationSteps.windows,
  ]);

  const changeInstallationPlatform = (
    platform: "linux" | "macos" | "windows"
  ) => {
    setInstallationPlatform(platform);
    setInstallationSteps(tool.installationSteps[platform]);
    router.push(`/tools/${name}/?${createQueryString("p", platform)}`, {
      scroll: false,
    });
  };

  return (
    <>
      <SEO
        title={tool.name}
        description={`Tool: ${tool.name}`}
        slug={`/tools/${name}`}
      />
      <section className="flex flex-col items-center text-center pt-12 pb-6 lg:pt-24 lg:pb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">
          {tool.name}
        </h1>
        <p className="text-md lg:text-lg font-normal text-text-muted mb-10">
          {tool.tagLine}
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {tool.categories.map((category: Category) => {
            return (
              <div
                key={category}
                onClick={() => {
                  router.push(`/tools?c=${encodeURIComponent(category)}`);
                }}
              >
                <Filter content={category} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3 justify-center items-center">
          {tool.links?.github && (
            <a
              className="hover:text-primary-muted"
              href={tool.links.github}
              target="_blank"
            >
              <FontAwesomeIcon size={"lg"} icon={faGithub} />
            </a>
          )}
          {tool.links?.gitlab && (
            <a
              className="hover:text-primary-muted"
              href={tool.links.gitlab}
              target="_blank"
            >
              <FontAwesomeIcon size={"lg"} icon={faGitlab} />
            </a>
          )}
          {tool.links?.website && (
            <a
              className="hover:text-primary-muted"
              href={tool.links.website}
              target="_blank"
            >
              <GlobeIcon size={23} />
            </a>
          )}
        </div>
      </section>
      <section id="description" className="pb-4 lg:pb-8">
        <Card>
          <CardTitle>
            <a href="#description">Description</a>
          </CardTitle>
          <CardContent>
            <Markdown className="markdown">{tool.description}</Markdown>
          </CardContent>
        </Card>
      </section>
      <section id="key-features" className="pb-4 lg:pb-8">
        <Card>
          <CardTitle>
            <a href="#key-features">Key Features</a>
          </CardTitle>
          <CardContent>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4">
              {tool.keyFeatures.map((keyFeature) => {
                return (
                  <div key={keyFeature} className="flex gap-1">
                    <ShieldIcon /> <p key={keyFeature}>{keyFeature}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>
      <section id="installation" className="pb-4 lg:pb-8">
        <Card>
          <CardTitle>
            <a href="#installation">Installation</a>
          </CardTitle>
          <CardContent>
            <div className="p-1 flex rounded-md bg-tab-background">
              {tool.installationSteps.linux && (
                <div
                  onClick={() => changeInstallationPlatform("linux")}
                  className={`flex-1 p-1 rounded-sm ${
                    installationPlatform === "linux"
                      ? "bg-tab-foreground"
                      : "bg-tab-background"
                  } hover:cursor-pointer`}
                >
                  <span className="flex items-center gap-1 justify-center">
                    <FontAwesomeIcon icon={faLinux} />
                    Linux
                  </span>
                </div>
              )}
              {tool.installationSteps.macos && (
                <div
                  onClick={() => changeInstallationPlatform("macos")}
                  className={`flex-1 p-1 rounded-sm ${
                    installationPlatform === "macos"
                      ? "bg-tab-foreground"
                      : "bg-tab-background"
                  } hover:cursor-pointer`}
                >
                  <span className="flex items-center gap-1 justify-center">
                    <CommandIcon size={16} />
                    macOS
                  </span>
                </div>
              )}
              {tool.installationSteps.windows && (
                <div
                  onClick={() => changeInstallationPlatform("windows")}
                  className={`flex-1 p-1 rounded-sm ${
                    installationPlatform === "windows"
                      ? "bg-tab-foreground"
                      : "bg-tab-background"
                  } hover:cursor-pointer`}
                >
                  <span className="flex items-center gap-1 justify-center">
                    <FontAwesomeIcon icon={faWindows} />
                    Windows
                  </span>
                </div>
              )}
            </div>
            {installationSteps && (
              <InstallationSteps steps={installationSteps} />
            )}
          </CardContent>
        </Card>
      </section>
    </>
  );
}
