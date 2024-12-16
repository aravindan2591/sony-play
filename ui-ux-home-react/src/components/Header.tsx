import { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return <p className="text-header-mobile pad:text-header-desktop"> {children}</p>;
};

export default Header;
