import { Col, Container, Row } from "reactstrap";
import Colors from "../../../foundations/Colors/Colors";
import FooterLink from "./components/FooterLink/FooterLink";
import { ChevronUp, Linkedin, Rss } from "react-bootstrap-icons";
import { useState } from "react";
import FooterColTitleContainer from "./components/FooterColTitleContainer/FooterColTitleContainer";
import FooterColHorizontalRule from "./components/FooterColHorizontalRule/FooterColHorizontalRule";
import FooterLogo from "./components/FooterLogo/FooterLogo";

function Footer() {
  const [isHoveringLinkedin, setIsHoveringLinkedin] = useState(false);
  const [isHoveringRss, setIsHoveringRss] = useState(false);

  function handleOnClickChevronUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f2f2f2",
        color: Colors.BLACK,
        padding: "6em 6em 2em 6em",
      }}>
      <Row className="gx-4 gy-5" style={{ paddingBottom: "4em" }}>
        <Col lg={{ size: 3 }}>
          <div className="d-flex flex-column justify-content-between gap-4 ">
            <FooterLogo />
            <p
              style={{
                fontSize: "calc(17px + 0.1vw)",
                lineHeight: "2em",
              }}
              className="pe-sm-5">
              <span>Av. Olegário Maciel, 1217 4º andar •</span>{" "}
              <span>Lourdes CEP 30180-111</span>{" "}
              <span>Belo Horizonte • MG</span>
            </p>
          </div>
        </Col>

        <Col lg={{ size: 3 }}>
          <FooterColTitleContainer>
            <h5 style={{ fontWeight: "900" }}>Soluções</h5>
            <FooterColHorizontalRule />
          </FooterColTitleContainer>

          <div className="d-flex flex-column gap-2">
            <FooterLink to="/redes" text="Redes" />
            <FooterLink to="/data-center" text="Data Center" />
            <FooterLink to="/seguranca" text="Segurança" />
            <FooterLink
              to="/application-services"
              text="Application Services"
            />
            <FooterLink to="/digital-workflow" text="Digital Workflow" />
          </div>
        </Col>

        <Col lg={{ size: 3 }}>
          <FooterColTitleContainer>
            <h5 style={{ fontWeight: "900" }}>Serviços</h5>
            <FooterColHorizontalRule />
          </FooterColTitleContainer>

          <div className="d-flex flex-column gap-2">
            <FooterLink to="/servicos" text="Consultoria" />
            <FooterLink to="/servicos" text="Projetos" />
            <FooterLink to="/servicos" text="Implementações" />
            <FooterLink to="/gerencia-de-infra" text="Gerência de Infra" />
            <FooterLink to="/it-as-a-service" text="IT as a Service" />
          </div>
        </Col>

        <Col lg={{ size: 3 }}>
          <div className="d-flex flex-column gap-2">
            <FooterColTitleContainer>
              <h5 style={{ fontWeight: "900" }}>MSSP</h5>
              <FooterColHorizontalRule />
            </FooterColTitleContainer>
            <FooterLink to="/mssp" text="MSSP" />
          </div>
        </Col>
      </Row>

      <hr />

      <Row
        style={{ paddingTop: "2em" }}
        className="d-flex justify-content-between gy-2">
        <Col
          xs={{ size: 12 }}
          md={{ size: 6 }}
          className="d-flex flex-column gap-2 text-sm-center text-md-start">
          <h5 style={{ color: "#949494", fontSize: "calc(17px + 0.1vw)" }}>
            Todos direitos reservados © 2022 Altasnet
          </h5>
          <h5 style={{ color: Colors.BLACK, fontSize: "calc(17px + 0.1vw)" }}>
            M4 Comunicação
          </h5>
        </Col>

        <Col
          xs={{ size: 12 }}
          md={{ size: 6 }}
          className="d-flex justify-content-center justify-content-md-end gap-5">
          <div className="d-flex gap-3">
            <a href="https://www.linkedin.com/company/altasnet/">
              <Linkedin
                width={16}
                height={16}
                style={{ fill: isHoveringLinkedin ? "#808080" : "#606060" }}
                onMouseEnter={() => {
                  setIsHoveringLinkedin(true);
                }}
                onMouseLeave={() => {
                  setIsHoveringLinkedin(false);
                }}
              />
            </a>

            <a href="https://altasnet.com.br/feed/">
              <Rss
                width={16}
                height={16}
                style={{ fill: isHoveringRss ? "#808080" : "#606060" }}
                onMouseEnter={() => {
                  setIsHoveringRss(true);
                }}
                onMouseLeave={() => {
                  setIsHoveringRss(false);
                }}
              />
            </a>
          </div>

          <div>
            <ChevronUp
              role="button"
              width={24}
              height={24}
              style={{ fill: "#606060" }}
              onClick={handleOnClickChevronUp}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
