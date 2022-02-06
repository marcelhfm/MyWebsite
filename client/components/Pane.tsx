import React from "react";

interface PaneProps {}

export const Pane: React.FC<PaneProps> = ({ children }) => {
  return (
    <div className="bg-violet-300 max-w-2xl flex m-auto mt-10 rounded-lg shadow-md text-gray-900 bg-opacity-50 backdrop-blur bg-clip-border">
      {children}
    </div>
  );
};
