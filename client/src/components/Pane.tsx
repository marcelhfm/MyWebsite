import React from "react";

interface PaneProps {}

export const Pane: React.FC<PaneProps> = ({ children }) => {
  return (
    <div className="mr-5 ml-5 mt-10 flex max-w-2xl rounded-lg bg-gray-500 bg-opacity-60 p-2 text-gray-300  shadow-lg md:m-auto md:mt-14 md:mb-5">
      {children}
    </div>
  );
};
