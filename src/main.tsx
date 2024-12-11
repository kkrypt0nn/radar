import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./app";
import AboutRoute from "./app/about";
import CodeOfConductRoute from "./app/code-of-conduct";
import ContributingGuidelinesRoute from "./app/contributing-guidelines";
import NotFoundRoute from "./app/not-found";
import ToolRoute from "./app/tool";
import ToolsRoute from "./app/tools";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <main className="h-screen max-w-screen-xl mx-auto px-4 text-lg">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="about" element={<AboutRoute />} />
        <Route path="code-of-conduct" element={<CodeOfConductRoute />} />
        <Route
          path="contributing-guidelines"
          element={<ContributingGuidelinesRoute />}
        />
        <Route path="tools">
          <Route index element={<ToolsRoute />} />
          <Route path=":name" element={<ToolRoute />} />
        </Route>
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </main>
);
