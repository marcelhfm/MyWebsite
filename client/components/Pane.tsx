import React from "react";

interface PaneProps {}

export const Pane: React.FC<PaneProps> = ({ children }) => {
  return (
    <div className="bg-opacity-60 bg-gray-500 max-w-2xl flex md:m-auto md:mt-10 md:mb-10 rounded-lg shadow-lg text-gray-300  p-2 mr-2 ml-2 mt-10">
      {children}
    </div>
  );
};
