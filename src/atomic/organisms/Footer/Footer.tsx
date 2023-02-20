import { Col, Container, Row } from "reactstrap";
import Colors from "../../../foundations/Colors/Colors";
import FooterLink from "./FooterLink";
import altasnetLogo from "../../../imgs/altas-net-logo.png";
import { ChevronUp, Linkedin, Rss } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Footer() {
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
      <Row className="gx-4">
        <Col md={{ size: 3 }} style={{ paddingBottom: "4em" }}>
          <div className="d-flex flex-column gap-5">
            <Link to="/">
              <img
                src={altasnetLogo}
                alt=""
                style={{
                  width: "100%",
                  borderRadius: "16px",
                }}
              />
            </Link>

            <p
              style={{
                paddingRight: "3em",
                fontSize: "calc(17px + 0.1vw)",
                lineHeight: "1.8em",
              }}>
              Av. Olegário Maciel, 1217 4º andar • Lourdes CEP 30180-111 Belo
              Horizonte • MG
            </p>
          </div>
        </Col>
        <Col md={{ size: 3 }}>
          <div className="d-flex flex-column gap-2">
            <h5 style={{ fontWeight: "900" }}>Soluções</h5>
            <hr />
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
        <Col md={{ size: 3 }}>
          <div className="d-flex flex-column gap-2">
            <h5 style={{ fontWeight: "900" }}>Serviços</h5>
            <hr />
            <FooterLink to="/servicos" text="Consultoria" />
            <FooterLink to="/servicos" text="Projetos" />
            <FooterLink to="/servicos" text="Implementações" />
            <FooterLink to="/gerencia-de-infra" text="Gerência de Infra" />
            <FooterLink to="/it-as-a-service" text="IT as a Service" />
          </div>
        </Col>
        <Col md={{ size: 3 }}>
          <div className="d-flex flex-column gap-2">
            <h5 style={{ fontWeight: "900" }}>MSSP</h5>
            <hr />
            <FooterLink to="/mssp" text="MSSP" />
          </div>
        </Col>
      </Row>

      <hr />

      <Row style={{ paddingTop: "2em" }}>
        <Col className="d-flex justify-content-between">
          <div>
            <h5 style={{ color: "#949494", fontSize: "calc(17px + 0.1vw)" }}>
              Todos direitos reservados © 2022 Altasnet
            </h5>
            <h5 style={{ color: Colors.BLACK, fontSize: "calc(17px + 0.1vw)" }}>
              M4 Comunicação
            </h5>
          </div>

          <div className="d-flex justify-content-between gap-5">
            <div className="d-flex gap-3">
              <a href="https://www.linkedin.com/company/altasnet/">
                <Linkedin width={16} height={16} style={{ fill: "#606060" }} />
              </a>

              <a href="https://altasnet.com.br/feed/">
                <Rss width={16} height={16} style={{ fill: "#606060" }} />
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
