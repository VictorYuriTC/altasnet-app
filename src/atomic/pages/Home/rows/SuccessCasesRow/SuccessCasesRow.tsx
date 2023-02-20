import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Colors from "../../../../../foundations/Colors/Colors";
import successCasesBgImg from "../../../../../imgs/home-page-success-cases-bg.jpg";

function SuccessCasesRow() {
  return (
    <Row
      style={{
        backgroundImage: `url(${successCasesBgImg})`,
        backgroundPosition: "50% 0%",
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        marginTop: "6em",
      }}>
      <Col
        xs={{ offset: 4, size: 6 }}
        sm={{ offset: 5, size: 5 }}
        md={{ offset: 5, size: 5 }}
        lg={{ offset: 6, size: 4 }}
        xl={{ offset: 7, size: 3 }}
        className="d-flex flex-column justify-content-center">
        <p
          style={{
            color: Colors.WHITE,
            fontWeight: "900",
            paddingBottom: "1em",
          }}>
          CASES DE SUCESSO
        </p>

        <h2
          style={{
            color: Colors.BLACK,
            fontWeight: "900",
            paddingBottom: "2em",
          }}>
          Soluções Altasnet de sucesso, validadas por grandes empresas.
        </h2>

        <p
          style={{
            color: Colors.WHITE,
            fontWeight: "500",
            paddingRight: "3em",
            fontSize: "calc(17px + 0.1vw)",
            paddingBottom: "1em",
          }}>
          Expertise de ponta a ponta para garantir disponibilidade, segurança,
          reduzir riscos e custos além de, ampliar a eficiência operacional.
        </p>

        <Link
          style={{
            backgroundColor: Colors.BLACK,
            color: Colors.WHITE,
            padding: "0.8em 0em 0.8em 0em",
            width: "calc(7.5em + 0.1vw)",
            borderRadius: "32px",
            fontSize: "calc(16px + 0.1vw)",
          }}
          to="/cases-de-sucesso"
          className="text-decoration-none text-center">
          Confira
        </Link>
      </Col>
    </Row>
  );
}
export default SuccessCasesRow;
