import { Link } from "react-router-dom";
import Colors from "../../../../../../foundations/Colors/Colors";

interface IMenuSibarLink {
  text: string;
  to: string;
}

function MenuSidebarLink({ to, text }: IMenuSibarLink) {
  return (
    <Link
      className="d-flex flex-column text-decoration-none"
      to={to}
      style={{
        borderTop: `1px solid ${Colors.WHITE}`,
        borderBottom: `1px solid ${Colors.WHITE}`,
        padding: "3px 0px 3px 0px",
      }}>
      <span style={{ color: Colors.WHITE }}>{text}</span>
    </Link>
  );
}
export default MenuSidebarLink;
