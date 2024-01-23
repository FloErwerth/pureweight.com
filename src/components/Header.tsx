import Logo from "../media/logo.svg";
import { Link } from "@/components/Link.tsx";
import { ThemeToggle } from "@/components/ThemeToggle.tsx";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CallToAction } from "@/components/CallToAction.tsx";

export const Header = () => {
  return (
    <div className="flex px-6py-2 items-center justify-between h-20 w-full">
      <a href="#home">
        <img id="home" className="h-16 w-16" src={Logo} />
      </a>
      <div className="items-center flex gap-5">
        <Link href="#functions" text="Funktionen" />
        <Popover>
          <PopoverTrigger className="hover:cursor-pointer font-semibold dark:text-[#fff] text-[#000] hover:text-indigo-500 hover:dark:text-[#ddd] focus:outline-none font-semibold border-none">
            Download
          </PopoverTrigger>
          <PopoverContent className="rounded-xl">
            Die App ist aktuell unter Entwicklung und wird bald verfügbar sein. Der Entwickler-Blog ist <Link href="BLOG" text="hier" /> zu finden.
          </PopoverContent>
        </Popover>
        <CallToAction text="Jetzt testen" />
        <ThemeToggle />
      </div>
    </div>
  );
};
