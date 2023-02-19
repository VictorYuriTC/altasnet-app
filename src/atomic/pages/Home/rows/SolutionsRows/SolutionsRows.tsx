import { Col, Row } from "reactstrap";
import Colors from "../../../../../foundations/Colors/Colors";
import SolutionCard from "./SolutionCard";
import useSolutionsData from "./useSolutionsData";

function SolutionsRow() {
  return (
    <>
      <Row
        style={{
          padding: "4em 0em 4em 0em",
        }}>
        <Col className="d-flex flex-column align-items-center">
          <p
            style={{
              color: Colors.BLACK,
              fontWeight: "900",
              fontSize: "16px",
            }}>
            E COMO NÓS FAZEMOS?
          </p>

          <h1
            style={{
              fontSize: "calc(60px + 4vw)",
              fontWeight: "900",
              color: "#84a0b2",
              zIndex: "25",
              width: "5em",
              paddingBottom: "0.5rem",
            }}
            className="text-center">
            soluções
          </h1>

          <h1
            style={{
              color: Colors.BLACK,
              fontSize: "calc(20px + 1vw)",
              fontWeight: "900",
              opacity: "0.8",
            }}
            className="text-center mb-0">
            e experts em todas as áres de TI
          </h1>
        </Col>
      </Row>

      <Row className="gx-4 gy-5 px-0 px-md-3 px-lg-5">
        {useSolutionsData().map((solution, index) => (
          <SolutionCard solution={solution} index={index} />
        ))}
      </Row>
    </>
  );
}
export default SolutionsRow;
