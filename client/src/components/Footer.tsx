import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="m-auto mb-6 mt-5 flex justify-center text-sm font-light text-gray-400">
      © 2022 Marcel Hofmann. All rights reserved.
    </div>
  );
};
