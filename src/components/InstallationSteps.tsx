import Markdown from "react-markdown";
import InlineCodeblock from "./InlineCodeblock";

type InstallationStepsProps = {
  steps: string[];
};

export default function InstallationSteps({ steps }: InstallationStepsProps) {
  return (
    <ol className="list-decimal pl-6 space-y-4 mt-4">
      {steps.map((step) => {
        return step.startsWith("cmd:") ? (
          <li key={step} className="break-words">
            <span className="flex items-center gap-2">
              Execute: <InlineCodeblock>{step.substring(4)}</InlineCodeblock>
            </span>
          </li>
        ) : (
          <li key={step} className="break-words">
            <Markdown className="markdown">{step}</Markdown>
          </li>
        );
      })}
    </ol>
  );
}
