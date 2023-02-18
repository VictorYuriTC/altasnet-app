import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import Colors from "../../../../../../../foundations/Colors/Colors";

interface ISolutionsLink {
  text?: string;
  to: string;
  children?: ReactNode;
  className?: ReactNode;
}

function SolutionsLink({ to, text, children, className }: ISolutionsLink) {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  return (
    <Link
      to={to}
      className={`text-decoration-none text-nowrap px-sm-2 px-md-3 py-2 ${className}`}
      style={{
        color: Colors.BLACK,
        backgroundColor: isHoveringLink ? "#e9e9e9" : "#f5f5f5",
        borderTop: `1px solid #dadada`,
        transition: "300ms",
      }}
      onMouseEnter={() => setIsHoveringLink(true)}
      onMouseLeave={() => setIsHoveringLink(false)}>
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
export default SolutionsLink;
