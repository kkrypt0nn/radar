export const tools: Tool[] = [
  {
    added: new Date("December 11, 2024 20:06:00 UTC"),
    name: "Nmap",
    tagLine: "The Network Mapper",
    links: {
      github: "https://github.com/nmap/nmap",
      website: "https://nmap.org",
    },
    description:
      "Nmap is a free and open source utility for network discovery and security auditing. Many systems and network administrators also find it useful for tasks such as network inventory, managing service upgrade schedules, and monitoring host or service uptime. Nmap uses raw IP packets in novel ways to determine what hosts are available on the network, what services (application name and version) those hosts are offering, what operating systems (and OS versions) they are running, what type of packet filters/firewalls are in use, and dozens of other characteristics. It was designed to rapidly scan large networks, but works fine against single hosts. Nmap runs on all major computer operating systems, and official binary packages are available for Linux, Windows, and Mac OS X.",
    installationSteps: {
      macos: ["Install [Homebrew](https://brew.sh)", "cmd:brew install nmap"],
    },
    keyFeatures: ["Port Scanning", "Host Discovery", "OS Detection"],
    categories: ["Network Security"],
  },
];

export type Tool = {
  added: Date;
  name: string;
  tagLine: string;
  links?: Links;
  description: string;
  installationSteps: InstallationSteps;
  keyFeatures: string[];
  categories: Category[];
};

export type Links = {
  github?: string;
  gitlab?: string;
  website?: string;
};

export type InstallationSteps = {
  macos?: string[];
  linux?: string[];
  windows?: string[];
};

export type Category = "Network Security";
