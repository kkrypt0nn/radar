import Link from "@/components/Link";
import SEO from "@/components/SEO";
import { config } from "@/config";

export default function AboutRoute() {
  return (
    <>
      <SEO
        title="About"
        description="Welcome to Radar! A community-driven, open source, directory of cybersecurity tools."
        slug="/about"
      />
      <section className="flex flex-col items-center text-center pt-12 pb-6 lg:pt-24 lg:pb-12.">
        <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          About <span className="gradient-primary">Radar</span>
        </h1>
      </section>
      <section className="space-y-6 pb-8 lg:pb-14">
        <p>
          Welcome to <strong>Radar</strong>! A community-driven, open source,
          directory of cybersecurity tools. The idea and mission of this website
          is to provide to cybersecurity enthusiasts a comprehensive, up-to-date
          resource for discovering and evaluating cybersecurity tools and
          applications.
        </p>
        <p>
          Whether you&apos;re looking for threat intelligence platforms, network
          security tools, or cutting-edge AI-powered defenses, this directory
          aims to be your go-to resource in the ever-evolving world of
          cybersecurity.
        </p>
      </section>
      <section className="space-y-6 pb-8 lg:pb-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          The contributors
        </h2>
        <p>
          I believe in the power of collective knowledge and experience. By
          contributing with reviews, additions, and insights, contributors help
          everyone in making decisions about the tools they use to protect
          digital assets and combat cyber threats.
        </p>
      </section>
      <section className="space-y-6 pb-8 lg:pb-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          How it works
        </h2>
        <p>
          The idea behind <strong>Radar</strong> is very simple. It is a
          directory for you to look through and find the most fitting tools for
          your usage. You can browse by <strong>categories</strong> or{" "}
          <strong>search</strong> for a name.
        </p>
        <p>
          If you believe a tool is missing on the website, or you would like to
          add your own you may open an{" "}
          <Link href={config.gitHub.requestNewToolIssueUrl} external>
            issue
          </Link>{" "}
          on the GitHub&apos;s page of this project.
        </p>
      </section>
      <section className="space-y-6 pb-9 lg:pb-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Contact
        </h2>
        <p>
          You can contact me (Krypton) by mail at{" "}
          <Link href="mailto:root@krypton.ninja">root@krypton.ninja</Link>.
        </p>
      </section>
      <section className="space-y-6 pb-8 lg:pb-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              Why have you created this website?
            </h3>
            <p>
              Because I want to help people find the right tool for the purpose
              they need. Lots of tools are <em>similar</em> though do not offer
              the same key features or cross-platform support. Sometimes the
              installation guides are outdated or hard to understand for
              newcomers.
              <br /> The goal of Radar is made to tackle these issues!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              How is the quality of information ensured?
            </h3>
            <p>
              This website relies on our contributors to maintain high
              standards. All contributions are subject to review, and through
              this process misinformation or spam may be minimized.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
