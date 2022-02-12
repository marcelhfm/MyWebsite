import React from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "./Link";

interface NavbarDropdownProps {}

export const NavbarDropdown: React.FC<NavbarDropdownProps> = ({}) => {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={`inline-flex justify-center w-full rounded-lg hover:bg-gray-600 px-1 py-1`}
          >
            <div className="flex items-center">
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </Menu.Button>
        </div>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-6 origin-top-right bg-gray-500 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                <Link href="/projects/overview">
                  {({ isActive }) => (
                    <div
                      className={`group flex rounded-md items-center w-full px-2 py-2 ${
                        isActive ? "text-orange-300" : "hover:text-orange-300"
                      }`}
                    >
                      Overview
                    </div>
                  )}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/projects/comments">
                  {({ isActive }) => (
                    <div
                      className={`group flex rounded-md items-center w-full px-2 py-2 ${
                        isActive ? "text-orange-300" : "hover:text-orange-300"
                      }`}
                    >
                      Leave a Comment
                    </div>
                  )}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="">
                  {({ isActive }) => (
                    <div
                      className={`group flex rounded-md items-center w-full px-2 py-2 ${
                        isActive ? "text-orange-300" : "hover:text-orange-300"
                      }`}
                    >
                      More Coming soon...
                    </div>
                  )}
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
