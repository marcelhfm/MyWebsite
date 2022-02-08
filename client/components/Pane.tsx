import React from "react";

interface PaneProps {}

export const Pane: React.FC<PaneProps> = ({ children }) => {
  return (
    <div className="bg-opacity-60 bg-gray-500 max-w-2xl flex md:m-auto md:mt-14 md:mb-5 rounded-lg shadow-lg text-gray-300  p-2 mr-5 ml-5 mt-10">
      {children}
    </div>
  );
};
