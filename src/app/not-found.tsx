import { AlertCircleIcon, ArrowLeftIcon, HomeIcon } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import SEO from "../components/SEO";

export default function NotFoundRoute() {
  let navigate = useNavigate();
  return (
    <>
      <SEO
        title="404"
        description="We've lost the signal to the page you're looking for. It might have been moved, deleted, or never existed."
        slug=""
      />
      <section className="flex flex-col items-center text-center space-y-4 pt-12 pb-24 lg:pt-24 lg:pb-12.">
        <AlertCircleIcon
          size={32}
          className="text-primary animate-pulse mr-2"
        />
        <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold tracking-tight mr-8">
          404 - Signal Lost
        </h1>
        <p className="text-text-muted">
          We've lost the signal to the page you're looking for. It might have
          been moved, deleted, or never existed.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={() => navigate("/")}>
            <HomeIcon size={18} /> Home
          </Button>
          <Button onClick={() => navigate(-1)}>
            <ArrowLeftIcon size={18} /> Go back
          </Button>
        </div>
      </section>
    </>
  );
}