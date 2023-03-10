import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Colors from "../../../../../foundations/Colors/Colors";
import useBgImgTextAnimation from "./useBgImgTextAnimation";
import useLandingBgImgSize from "./useLandingBgImgSize";
import homePageLandingBg from "../../../../../imgs/home-page-landing-bg.jpg";

function LandingImageRow() {
  const bgImgSize = useLandingBgImgSize();
  const bgImgTextAnimation = useBgImgTextAnimation();
  return (
    <Row
      style={{
        zIndex: "25",
        backgroundImage: `url(${homePageLandingBg})`,
        backgroundSize: "cover",
        backgroundPosition: "60% 0%",
        backgroundRepeat: "no-repeat",
        height: bgImgSize.height,
      }}
      className="d-flex flex-column justify-content-center align-items-center">
      <Col
        style={{
          ...bgImgTextAnimation,
        }}
        className="d-flex flex-column align-items-center">
        <h3
          style={{
            fontSize: "calc(20px + 1vw)",
            lineHeight: "2vw",
            color: Colors.WHITE,
            zIndex: "25",
            fontWeight: "600",
            opacity: "0.8",
          }}
          className="text-center mb-0">
          Qual a nossa ideia?
        </h3>

        <h1
          style={{
            fontSize: "calc(60px + 4vw)",
            color: Colors.SECONDARY,
            zIndex: "25",
            width: "5em",
            paddingBottom: "0.5rem",
          }}
          className="text-center">
          inovar sua empresa
        </h1>

        <Link
          style={{
            backgroundColor: Colors.DARK,
            color: Colors.WHITE,
            width: "calc(10em + 10vw)",
            fontSize: "16px",
            fontWeight: "900",
            letterSpacing: "4px",
            textAlign: "center",
          }}
          className="text-decoration-none d-flex justify-content-center align-items-center py-3 "
          to="/nossa-empresa">
          CONHEÇA-NOS
        </Link>
      </Col>
    </Row>
  );
}
export default LandingImageRow;
