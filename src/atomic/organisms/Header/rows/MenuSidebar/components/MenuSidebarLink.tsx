import { useState } from "react";
import { Link } from "react-router-dom";
import Colors from "../../../../../../foundations/Colors/Colors";

interface IMenuSibarLink {
  text: string;
  to: string;
}

function MenuSidebarLink({ to, text }: IMenuSibarLink) {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  return (
    <Link
      className="d-flex flex-column text-decoration-none py-2"
      to={to}
      style={{
        borderBottom: `1px solid ${Colors.WHITE}10`,
      }}
      onMouseEnter={() => setIsHoveringLink(true)}
      onMouseLeave={() => setIsHoveringLink(false)}>
      <span
        className="ps-3"
        style={{
          color: Colors.WHITE,
          opacity: isHoveringLink ? "1.0" : "0.8",
        }}>
        {text}
      </span>
    </Link>
  );
}
export default MenuSidebarLink;
