import React, { useState, useEffect } from "react";
import data from "../../assets/data.json";
import { Sun, Moon, Laptop, Smartphone, Menu } from "lucide-react";

function ThemeIcon({ theme, isMobile }) {
  if (theme === "light") return <Sun size={24} />;
  if (theme === "dark") return <Moon size={24} />;
  return isMobile ? <Smartphone size={24} /> : <Laptop size={24} />;
}

function NavButton({ onClick, active, children }) {
  const activeClass = active ? "border-b-2 border-blue-500" : "";
  return (
    <button
      onClick={onClick}
      className={`block py-2 pr-4 pl-3 duration-200 text-sm py-1 ${activeClass}`}
    >
      {children}
    </button>
  );
}

function Header({ setView, currentView }) {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "device";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const applyTheme = (currentTheme) => {
    if (currentTheme === "device") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document
        .querySelector("html")
        .setAttribute("data-theme", prefersDark ? "dark" : "light");
    } else {
      document.querySelector("html").setAttribute("data-theme", currentTheme);
    }
  };

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleSystemThemeChange = () => {
      if (theme === "device") {
        applyTheme("device");
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const themeStyles = (themeType) => {
    if (
      themeType === "dark" ||
      (themeType === "device" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return "bg-gray-800 text-white";
    }
    return "bg-gray-200 text-black";
  };

  const handleViewChange = (view) => {
    setView(view);
    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", "/");
    }
    closeMenu();
  };

  // Navigation items to avoid duplication
  const navItems = [
    { name: "about", label: "About" },
    { name: "resume", label: "Resume" },
    { name: "projects", label: "Projects" },
    //{ name: 'certification', label: 'Certificates' },
    { name: "github", label: "Github" }
  ];

  return (
    <div className="mb-24 mt-6 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between w-full print:hidden">
          <div className="flex items-center">
            <button onClick={toggleMenu} className="sm:hidden mr-4">
              <Menu size={24} />
            </button>
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } sm:flex flex-col sm:flex-row gap-4 absolute sm:relative top-16 sm:top-0 left-0 sm:left-auto bg-base-100 sm:bg-transparent w-full sm:w-auto p-4 sm:p-0 shadow-md sm:shadow-none z-10`}
            >
              {navItems.map((item) => (
                <NavButton
                  key={item.name}
                  onClick={() => handleViewChange(item.name)}
                  active={currentView === item.name}
                >
                  {item.label}
                </NavButton>
              ))}
            </div>
          </div>
          <div className="theme-selector ml-4 relative">
            <button
              className={`flex items-center p-2 rounded-md ${themeStyles(
                theme
              )}`}
              onClick={toggleDropdown}
            >
              <ThemeIcon theme={theme} isMobile={isMobile} />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-1 shadow-lg rounded-md z-10">
                <button
                  onClick={() => handleThemeChange("light")}
                  className="flex items-center p-2 hover:bg-gray-300 w-full"
                >
                  <Sun size={24} />
                </button>
                <button
                  onClick={() => handleThemeChange("dark")}
                  className="flex items-center p-2 hover:bg-gray-300 w-full"
                >
                  <Moon size={24} />
                </button>
                <button
                  onClick={() => handleThemeChange("device")}
                  className="flex items-center p-2 hover:bg-gray-300 w-full"
                >
                  {isMobile ? <Smartphone size={24} /> : <Laptop size={24} />}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-16 sm:mt-36 print:mt-10 print:gap-2">
          <h1 className="text-3xl md:text-6xl font-black">
            {data.firstName}{" "}
            <span className="font-extralight">{data.lastName}</span>
          </h1>
          <h2 className="md:text-xl">{data.profession}</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
