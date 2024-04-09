import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <div className="mb-24 mt-6 flex flex-col items-center justify-center px-6">
      <div className="flex w-full max-w-4xl flex-col gap-36 print:gap-10">
        <div className="flex gap-10 print:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "border-blue-600" : "border-b-transparent"
                    } text-sm py-1 border-b-2`
                  }
          >
            About
          </NavLink>
          <NavLink
            to="/resume/"
            className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "border-blue-600" : "border-b-transparent"
                    } text-sm py-1 border-b-2`
                  }
          >
            Resume
          </NavLink>
          <NavLink
            to="/projects/"
            className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "border-blue-600" : "border-b-transparent"
                    } text-sm py-1 border-b-2`
                  }
          >
            Projects
          </NavLink>
          <NavLink
            to="/github/"
            className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "border-blue-600" : "border-b-transparent"
                    } text-sm py-1 border-b-2`
                  }
          >
            Github
          </NavLink>
        </div>
        <div className="flex flex-col gap-6 print:mt-10 print:gap-2">
          <h1 className="text-3xl md:text-6xl font-black">
            Ashish <span className="font-extralight">Vaghela</span>
          </h1>
          <h2 className="md:text-xl">Full Stack Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
