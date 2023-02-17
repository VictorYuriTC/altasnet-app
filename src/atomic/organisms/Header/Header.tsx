import { useState } from "react";
import { Search, X } from "react-bootstrap-icons";
import { Col, Container, Row } from "reactstrap";
import Colors from "../../../foundations/Colors/Colors";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import altasNetLogo from "../../../imgs/altas-net-logo.png";
import HeaderLink from "./components/HeaderLink/HeaderLink";

function Header() {
  const windowSize = useWindowDimensions();
  function getLogoSize() {
    if (windowSize.width < 350) {
      return {
        width: `${windowSize.width * (2 / 3)}`,
        height: `${windowSize.height * (2 / 3)}`,
      };
    }

    return {
      width: "144px",
      height: "72px",
    };
  }

  const [isSearchInputDisplayed, setIsSearchInputDisplayed] = useState(false);

  return (
    <Container fluid>
      <Row>
        <Col
          xs={{ offset: 3, size: 6 }}
          className="d-flex justify-content-center">
          <HeaderLink to="/">
            <img
              src={altasNetLogo}
              alt={`Altasnet 20 years comemorative logo.`}
              style={{
                objectFit: "contain",
              }}
            />
          </HeaderLink>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col
          xs={{ offset: 3, size: 6 }}
          className="d-flex justify-content-center align-items-center">
          <HeaderLink to="/nossa-empresa" text="Empresa" />

          <HeaderLink to="/solucoes" text="Soluções" />

          <HeaderLink to="/servicos" text="Serviços" />

          <HeaderLink to="/mssp" text="MSSP" />

          <HeaderLink to="/cases-de-sucesso" text="Cases" />

          <HeaderLink to="/blog" text="Blog" />

          <HeaderLink to="/contato" text="Contato" />

          <HeaderLink to="/area-do-cliente" text="Área do Cliente" />
        </Col>

        <Col
          xs={{ size: 2 }}
          className="d-flex justify-content-end align-items-center">
          <Search
            role="button"
            onClick={() => {
              setIsSearchInputDisplayed(!isSearchInputDisplayed);
            }}
            width={24}
            height={24}
          />
        </Col>
      </Row>

      <Row style={{ padding: "0em 2em 0em 2em", height: "4em" }}>
        {
          <div
            style={{
              opacity: isSearchInputDisplayed ? "1.0" : "0",
              transition: "500ms",
            }}>
            <Search
              className="position-absolute"
              width={24}
              height={24}
              style={{
                translate: "1em 1.2em",
              }}
            />
            <input
              type="text"
              placeholder="Digite sua busca"
              style={{
                height: "4em",
                border: `1px solid ${Colors.PRIMARY}`,
                borderRadius: "16px",
                paddingLeft: "3em",
                width: "100%",
              }}
            />

            <X
              role="button"
              className="position-absolute"
              width={32}
              height={32}
              onClick={() => {
                setIsSearchInputDisplayed(false);
              }}
              style={{
                translate: "-3em 1em",
              }}
            />
          </div>
        }
      </Row>
    </Container>
  );
}
export default Header;
