import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="flex text-sm m-auto font-light text-gray-400 justify-center mb-6">
      © 2022 Marcel Hofmann. All rights reserved.
    </div>
  );
};
