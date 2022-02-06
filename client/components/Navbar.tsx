import React from "react";
import Link from "./Link";
import { NavbarDropdown } from "./NavbarDropdown";
import { NavbarMobile } from "./NavbarMobile";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="bg-clip-border sticky top-0 z-50 shadow-md w-full bg-opacity-80 blur-backdrop-filter bg-nav">
      <nav className="shadow-md w-full">
        <div className="max-w-4xl mx-auto flex justify-between">
          {/* Logo */}

          <div className="">
            <Link href="/">
              {({ isActive }) => (
                <div className="flex items-center py-2 px-4">
                  <div className="flex items-center rounded-xl hover:bg-gray-600 px-1 py-1 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-10 w-10 mr-3 duration-300 ${
                        isActive ? "text-violet-300" : "text-white"
                      } `}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <span
                      className={`font-bold text-2xl text-violet-300 pr-1 duration-300 ${
                        isActive ? "text-violet-300" : "text-white"
                      }`}
                    >
                      Marcel Hofmann
                    </span>
                  </div>
                </div>
              )}
            </Link>
          </div>

          {/* Rest */}
          <div className="hidden md:flex items-center">
            {/* Projects dropdown */}
            <NavbarDropdown />

            {/* Contact */}
            <div className="py-3 px-4">
              <Link href="/contact">
                {({ isActive }) => (
                  <div
                    className={`rounded-xl hover:bg-gray-600 px-1 py-1 duration-300 ${
                      isActive ? "text-violet-300" : "text-white"
                    }`}
                  >
                    Contact
                  </div>
                )}
              </Link>
            </div>

            {/* About */}
            <div className="py-3 px-4">
              <Link href="/about">
                {({ isActive }) => (
                  <div
                    className={`rounded-xl hover:bg-gray-600 px-1 py-1 duration-300 ${
                      isActive ? "text-violet-300" : "text-white"
                    }`}
                  >
                    About
                  </div>
                )}
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <NavbarMobile />
          </div>
        </div>
      </nav>
    </div>
  );
};
