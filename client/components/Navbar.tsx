import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div>
      <nav className="flex items-center flex-wrap p-3 bg-black">
        <div className="max-w-7xl mx-auto border border-red-400">
          <p>Test</p>
        </div>
      </nav>
    </div>
  );
};
