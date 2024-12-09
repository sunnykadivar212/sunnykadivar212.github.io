import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import data from "../../assets/data.json";
import { Sun, Moon, Monitor, Menu } from 'lucide-react';

function Header() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "device";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const applyTheme = (currentTheme) => {
    if (currentTheme === "device") {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.querySelector("html").setAttribute("data-theme", prefersDark ? "dark" : "light");
    } else {
      document.querySelector("html").setAttribute("data-theme", currentTheme);
    }
  };

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

useEffect(() => {
  const handleSystemThemeChange = (e) => {
    if (theme === "device") {
        applyTheme("device");
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

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
    if (themeType === 'dark' || (themeType === 'device' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      return 'bg-gray-800 text-white';
    }
    return 'bg-gray-200 text-black';
  };

  return (
    <div className="mb-24 mt-6 px-4 sm:px-6"><div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between w-full print:hidden">
          <div className="flex items-center">
            <button onClick={toggleMenu} className="sm:hidden mr-4">
              <Menu size={24} />
            </button>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row gap-4 absolute sm:relative top-16 sm:top-0 left-0 sm:left-auto bg-base-100 sm:bg-transparent w-full sm:w-auto p-4 sm:p-0 shadow-md sm:shadow-none z-10`}>
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "border-blue-600" : "border-b-transparent"} text-sm py-1 border-b-2`}>About</NavLink>
              <NavLink to="/resume/" onClick={closeMenu} className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "border-blue-600" : "border-b-transparent"} text-sm py-1 border-b-2`}>Resume</NavLink>
              <NavLink to="/projects/" onClick={closeMenu} className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "border-blue-600" : "border-b-transparent"} text-sm py-1 border-b-2`}>Projects</NavLink>
              <NavLink to="/certification/" onClick={closeMenu} className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "border-blue-600" : "border-b-transparent"} text-sm py-1 border-b-2`}>Certificates</NavLink>
              <NavLink to="/github/" onClick={closeMenu} className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "border-blue-600" : "border-b-transparent"} text-sm py-1 border-b-2`}>Github</NavLink>
              </div>
            </div>
            <div className="theme-selector ml-4 relative">
              <button
                  className={`flex items-center p-2 rounded-md ${themeStyles(theme)}`}
                  onClick={toggleDropdown}
              >
                {theme === 'light' && <Sun size={24} />}
                {theme === 'dark' && <Moon size={24} />}
                {theme === 'device' && <Monitor size={24} />}
              </button>
              {isDropdownOpen && (
                  <div className={`absolute mt-1 shadow-lg rounded-md z-10 ${themeStyles(theme)}`}>
                    <button onClick={() => handleThemeChange('light')} className="flex items-center p-2 hover:bg-gray-300 w-full">
                      <Sun size={24} />
                    </button>
              <button onClick={() => handleThemeChange('dark')} className="flex items-center p-2 hover:bg-gray-300 w-full">
            <Moon size={24} />
            </button>
             <button onClick={() => handleThemeChange('device')} className="flex items-center p-2 hover:bg-gray-300 w-full">
                      <Monitor size={24} />
            </button>
              </div>
              )}
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-16 sm:mt-36 print:mt-10 print:gap-2">
          <h1 className="text-3xl md:text-6xl font-black">
            {data.firstName} <span className="font-extralight">{data.lastName}</span>
          </h1>
          <h2 className="md:text-xl">{data.proffession}</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;