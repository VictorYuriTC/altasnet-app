import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Colors from "../../../../../foundations/Colors/Colors";

interface IHeaderLink {
  text?: string;
  to: string;
  children?: ReactNode;
  className?: ReactNode;
}

function HeaderLink({ to, text, children, className }: IHeaderLink) {
  const { pathname } = useLocation();
  const firstPath = pathname;
  useEffect(() => {
    console.log(firstPath);
  });
  return (
    <Link
      to={to}
      className={`text-decoration-none text-nowrap px-sm-2 px-md-3 py-2 ${className}`}
      style={{ color: to === pathname ? Colors.GRAY : Colors.BLACK }}>
      <span
        style={{
          fontSize: "20px",
        }}>
        {text}
      </span>
      {children}
    </Link>
  );
}
export default HeaderLink;
