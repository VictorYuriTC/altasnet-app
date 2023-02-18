import { Col, Row } from "reactstrap";
import HeaderLink from "../HorizontalMenu/components/HorizontalLink/HorizontalLink";
import useLogoSize from "./useLogoSize";
import altasNetLogo from "../../../../../imgs/altas-net-logo.png";

function LogoRow() {
  const logoSize = useLogoSize();
  return (
    <Row>
      <Col xs={{ offset: 3, size: 6 }}>
        <HeaderLink to="/" className="d-flex justify-content-center">
          <img
            src={altasNetLogo}
            alt={`Altasnet 20 years comemorative logo.`}
            style={{
              width: logoSize?.width,
            }}
          />
        </HeaderLink>
      </Col>
    </Row>
  );
}
export default LogoRow;
