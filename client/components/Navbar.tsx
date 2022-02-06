import React from "react";
import Link from "./Link";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="bg-grey-100 ">
      <div className="max-w-4xl mx-auto border border-red-600 flex justify-between">
        <div className="">
          <Link></Link>
        </div>
        <div className="flex">
          <div>Projects</div>
          <div>Contact</div>
          <div>About</div>
        </div>
      </div>
    </nav>
  );
};
