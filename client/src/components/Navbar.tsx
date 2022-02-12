import React from "react";
import Link from "./Link";
import { NavbarDropdown } from "./NavbarDropdown";
import { NavbarMobile } from "./NavbarMobile";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="blur-backdrop-filter sticky top-0 z-50 w-full bg-nav bg-opacity-80 bg-clip-border shadow-md">
      <nav className="w-full shadow-md">
        <div className="mx-auto flex max-w-4xl justify-between">
          {/* Logo */}

          <div className="">
            <Link href="/">
              {({ isActive }) => (
                <div className="flex items-center py-2 px-4">
                  <div className="flex items-center rounded-xl px-1 py-1 duration-300 hover:bg-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`mr-3 h-10 w-10 duration-300 ${
                        isActive ? "text-orange-300" : "text-white"
                      } `}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span
                      className={`pr-1 text-2xl font-bold duration-300 ${
                        isActive ? "text-orange-300" : "text-white"
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
          <div className="hidden items-center md:flex">
            {/* Projects dropdown */}
            <NavbarDropdown />

            {/* Contact */}
            <div className="py-3 px-4">
              <Link href="/contact">
                {({ isActive }) => (
                  <div
                    className={`rounded-xl px-1 py-1 duration-300 hover:bg-gray-600 ${
                      isActive ? "text-orange-300" : "text-white"
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
                    className={`rounded-xl px-1 py-1 duration-300 hover:bg-gray-600 ${
                      isActive ? "text-orange-300" : "text-white"
                    }`}
                  >
                    About
                  </div>
                )}
              </Link>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <NavbarMobile />
          </div>
        </div>
      </nav>
    </div>
  );
};
