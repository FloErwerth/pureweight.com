import Logo from "../media/Logo.svg";
import Logo_Bright from "../media/Logo_Bright.svg";
import { Link } from "@/components/Link.tsx";
import { ThemeToggle } from "@/components/ThemeToggle.tsx";
import { CallToAction } from "@/components/CallToAction.tsx";
import { useCallback, useMemo, useState } from "react";
import { useTheme } from "@/components/ThemeProvider.tsx";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { theme } = useTheme();
  const LogoUrl = useMemo(() => (theme === "light" ? Logo : Logo_Bright), [theme]);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
    if (!showMenu) {
      document.body.className = "max-lg:overflow-hidden";
    } else {
      document.body.className = "max-lg:overflow-auto";
    }
  }, [showMenu]);

  const handleNavigateHome = useCallback(() => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setShowMenu(false);
    }
  }, [navigate]);

  const handleNavigateSupport = useCallback(() => {
    navigate("/support");
    setShowMenu(false);
  }, [navigate]);

  return (
    <div className="h-20 w-full">
      <div className="w-full grid justify-between grid-cols-[max-content_auto]">
        <a
          className={`${!showMenu ? "transition-opacity max-lg:opacity-100" : "max-lg:opacity-0 max-lg:pointer-events-none"} relative max-lg:left-2 top-2`}
        >
          <img onClick={handleNavigateHome} alt="Pure Weight" className="h-16 w-16" src={LogoUrl} />
        </a>
        <div
          id="nav"
          className={`${showMenu ? "max-lg:fixed transition-opacity max-lg:opacity-100 z-50" : "max-lg:opacity-0 max-lg:pointer-events-none"} max-lg:top-0 max-lg:w-[100vw] max-lg:h-[100vh] max-lg:flex-col max-lg:justify-center max-lg:dark:bg-[#333] max-lg:bg-[#eee] max-lg:left-0 items-center flex gap-5`}
        >
          <button onClick={handleToggleMenu} style={{ all: "unset" }}>
            <Link scrollsToAnchor classNames="max-lg:text-[30px]" href="#img1" text="Funktionen" />
          </button>
          <button style={{ all: "unset" }} onClick={handleNavigateSupport}>
            <Link classNames="max-lg:text-[30px]" href="" text="Support" />
          </button>
          <CallToAction classNames="max-lg:text-[24px] max-lg:mt-5" text="Jetzt testen" />
          <ThemeToggle />
        </div>
      </div>
      <div
        className={`z-50 ${showMenu ? "fixed" : "absolute"} lg:hidden right-2 top-2`}
        id="button"
      >
        <button style={{ all: "unset" }} onClick={handleToggleMenu}>
          {showMenu ? <X width={40} height={40} /> : <Menu width={40} height={40} />}
        </button>
      </div>
    </div>
  );
};
