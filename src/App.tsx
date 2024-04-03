import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import { Header } from "@/components/Header.tsx";
import { Main } from "@/pages/main.tsx";
import { HeadlineContent } from "./components/HeadlineContent";
import { Functions } from "@/components/Functions.tsx";
import { FunctionAccordion } from "./components/FunctionsAccordion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Support } from "./pages/support";
import "./translation";
import * as i18n from "./translation";
import { useEffect } from "react";
import { AGBContent } from "./components/ui/AGBContents";
import { PrivacyContent } from "@/components/ui/PrivacyContents.tsx";
import { Footer } from "@/components/Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Main>
          <Header />
          <HeadlineContent />
          <Functions />
          <FunctionAccordion />
          <Footer />
        </Main>
      </div>
    ),
  },
  {
    path: "/support",
    element: (
      <div>
        <Main>
          <Header />
          <Support />
          <Footer />
        </Main>
      </div>
    ),
  },
  {
    path: "/termsandconditions",
    element: (
      <div>
        <Main>
          <Header />
          <AGBContent />
          <Footer />
        </Main>
      </div>
    ),
  },
  {
    path: "/privacy",
    element: (
      <div>
        <Main>
          <Header />
          <PrivacyContent />
          <Footer />
        </Main>
      </div>
    ),
  },
]);

function App() {
  useEffect(() => {
    const storedLanguage = sessionStorage.getItem("language");
    if (storedLanguage) {
      i18n.default.changeLanguage(storedLanguage);
    } else {
      i18n.default.changeLanguage("de");
      sessionStorage.setItem("language", "de");
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
