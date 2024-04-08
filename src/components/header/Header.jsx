import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <div className="mb-24 mt-6 flex flex-col items-center justify-center px-6">
      <div className="flex w-full max-w-4xl flex-col gap-36 print:gap-10">
        <div className="flex gap-10 print:hidden">
          <Link
            to="/"
            className="text-sm py-1 border-b-2 hover:border-blue-600 border-b-transparent"
          >
            About
          </Link>
          <Link
            to="/resume/"
            className="text-sm py-1 border-b-2 hover:border-blue-600 border-b-transparent"
          >
            Resume
          </Link>
          <Link
            to="/projects/"
            className="text-sm py-1 border-b-2 hover:border-blue-600 border-b-transparent"
          >
            Projects
          </Link>
        </div>
        <div className="flex flex-col gap-6 print:mt-10 print:gap-2">
          <h1 className="text-3xl md:text-6xl font-black">
            Pouya <span className="font-extralight">Saadeghi</span>
          </h1>
          <h2 className="md:text-xl">Full Stack Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
