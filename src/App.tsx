import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import { Header } from "@/components/Header.tsx";
import { Main } from "@/pages/main.tsx";
import { HeadlineContent } from "./components/HeadlineContent";
import { Functions } from "@/components/Functions.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <Main>
        <Header />
        <HeadlineContent />
        <Functions />
      </Main>
    </ThemeProvider>
  );
}

export default App;
