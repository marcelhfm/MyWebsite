import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface LinkProps {
  href: any;
  children: any;
  activeClassName: string;
  inactiveClassName: string;
  className: string;
}

const Link: React.FC<LinkProps> = ({
  href,
  activeClassName,
  inactiveClassName,
  className,
  children,
  ...rest
}) => {
  const router = useRouter();

  let currentClassName = className;
  let isActive = router.pathname === href;
  if (isActive) {
    currentClassName += ` ${activeClassName}`;
  } else {
    currentClassName += `${inactiveClassName}`;
  }

  return (
    <NextLink href={href} {...rest}>
      <a className={currentClassName}>{children({ isActive })}</a>
    </NextLink>
  );
};

export default Link;
