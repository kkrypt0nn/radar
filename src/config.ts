import { Category } from "./data/tools";

export const config: Config = {
  title: "Radar",
  gitHub: {
    repositoryUrl: "https://github.com/kkrypt0nn/radar",
    chooseIssueUrl: "https://github.com/kkrypt0nn/radar/issues/new/choose",
    requestNewToolIssueUrl:
      "https://github.com/kkrypt0nn/radar/issues/new?assignees=&labels=enhancement&projects=&template=request_a_new_tool.md&title=%5BRequest+New+Tool%5D+",
  },

  homeTotalRecentlyAddedTools: 11,
  newToolLastDays: 7,

  navbarItems: [
    { name: "Tools", path: "/tools" },
    { name: "About", path: "/about" },
  ],
  footerItems: [
    { name: "Code of Conduct", path: "/code-of-conduct" },
    { name: "Contributing Guidelines", path: "/contributing-guidelines" },
  ],

  newCategories: [
    {
      name: "Network Security",
      until: new Date("December 31, 2024 23:59:59 UTC"),
    },
  ],
};

export type GitHubInformation = {
  repositoryUrl: string;
  chooseIssueUrl: string;
  requestNewToolIssueUrl: string;
};

export type NavbarItem = {
  name: string;
  path: string;
};

export type FooterItem = {
  name: string;
  path: string;
};

export type NewCategory = {
  name: Category;
  until: Date;
};

export type Config = {
  title: string;
  gitHub: GitHubInformation;

  homeTotalRecentlyAddedTools: number;
  newToolLastDays: number;

  navbarItems: NavbarItem[];
  footerItems: FooterItem[];

  newCategories?: NewCategory[];
};
