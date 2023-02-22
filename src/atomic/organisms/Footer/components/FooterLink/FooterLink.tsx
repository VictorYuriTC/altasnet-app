import { useState } from "react";
import { Link } from "react-router-dom";
import Colors from "../../../../../foundations/Colors/Colors";

interface IFooterLink {
  to: string;
  text: string;
}

function FooterLink({ to, text }: IFooterLink) {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  return (
    <Link
      to={to}
      className="d-block"
      onMouseEnter={() => setIsHoveringLink(true)}
      onMouseLeave={() => setIsHoveringLink(false)}
      style={{
        color: isHoveringLink ? Colors.SECONDARY : Colors.BLACK,
        fontSize: "calc(17px + 0.1vw)",
        textDecoration: isHoveringLink ? "underline" : "none",
      }}>
      {text}
    </Link>
  );
}
export default FooterLink;
