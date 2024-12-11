import InlineCodeblock from "../components/InlineCodeblock";
import Link from "../components/Link";
import SEO from "../components/SEO";

export default function ContributingGuidelinesRoute() {
  return (
    <>
      <SEO
        title="Contributing Guidelines"
        description="The contributing guidelines that is expected to be followed by anyone contributing to the project."
        slug="/code-of-conduct"
      />
      <section className="flex flex-col items-center text-center pt-12 pb-6 lg:pt-24 lg:pb-12.">
        <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Contributing Guidelines
        </h1>
      </section>
      <section className="space-y-6 pb-8 lg:pb-14">
        <div className="space-y-3">
          <p>
            Your input is amazing! Making contributing to this project as easy
            and transparent as possible is one of the most important side, this
            includes:
          </p>
          <ol className="list-disc list-inside">
            <li>Reporting a bug</li>
            <li>Discussing the current state of the code</li>
            <li>Submitting a fix</li>
            <li>Proposing new features</li>
            <li>Becoming a maintainer</li>
          </ol>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Wanted changes
          </h2>
          <ul className="list-disc list-inside">
            <li>New features</li>
            <li>Bug fixing</li>
            <li>Better documentation</li>
            <li>Fixing of spelling and grammatical issues</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Unwanted changes
          </h2>
          <ul className="list-disc list-inside">
            <li>Whitespaces and punctuation changes</li>
            <li>Word changes using synonyms</li>
            <li>
              Entire rewrites of the project, or parts of the project - unless
              first approved by a maintainer
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            All code changes happen through pull requests
          </h2>
          <p>
            Pull requests are the best way to propose changes to the codebase.
            We actively welcome your pull requests:
          </p>
          <ol className="list-decimal list-inside">
            <li>
              <span>
                Fork the repository and create your branch from{" "}
                <InlineCodeblock>main</InlineCodeblock>
              </span>
            </li>
            <li>Keep consistency with the current state of the codebase</li>
            <li>Format the code of the files properly</li>
            <li>Issue that pull request!</li>
          </ol>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Commit messages guidelines
          </h2>
          <p>
            This project uses{" "}
            <Link href="https://conventionalcommits.org/en/v1.0.0/" external>
              <InlineCodeblock>Conventional Commits 1.0.0</InlineCodeblock>
            </Link>{" "}
            hence your commit messages <strong>must</strong> follow the same
            convention or your contributions will be ignored, refused or
            assigned to another user or maintainer.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            License
          </h2>
          <p>
            Your submissions are understood to be under the same{" "}
            <Link
              href="https://github.com/kkrypt0nn/radar/blob/main/LICENSE.md"
              external
            >
              GPL v3 License
            </Link>{" "}
            that covers the project.
          </p>
        </div>
      </section>
    </>
  );
}
