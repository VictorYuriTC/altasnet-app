import { Link } from "react-router-dom";
import altasnetLogo from "../../../../../imgs/altas-net-logo.png";
import useFooterLogoSize from "./useFooterLogoSize";

function FooterLogo() {
  const logoSize = useFooterLogoSize();

  return (
    <Link to="/">
      <img
        src={altasnetLogo}
        alt=""
        style={{
          width: logoSize.width,
          borderRadius: "16px",
        }}
      />
    </Link>
  );
}
export default FooterLogo;
