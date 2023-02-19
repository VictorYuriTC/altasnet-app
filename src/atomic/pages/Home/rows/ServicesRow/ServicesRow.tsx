import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Colors from "../../../../../foundations/Colors/Colors";
import servicesThoughtfulMan from "../../../../../imgs/services-thoughtful-man.png";
import useSolutionCardAnimation from "./useServiceThoughtfulManAnimation";

function ServicesRow() {
  const { isInViewport, ref, solutionCardAnimation } =
    useSolutionCardAnimation();
  return (
    <Row
      className="gx-4 gy-5 px-0 px-md-3 px-lg-5"
      style={{
        paddingTop: "8em",
      }}>
      <Col xs={{ offset: 2, size: 8 }} md={{ offset: 0, size: 6 }}>
        <div className="d-flex flex-column gap-4">
          <small
            style={{
              color: "#838383",
              fontWeight: "900",
            }}>
            SERVIÇOS
          </small>
          <h2
            style={{
              color: Colors.BLACK,
              fontWeight: "900",
            }}>
            <span
              style={{
                color: Colors.SECONDARY,
              }}>
              Know-how e insights excepcionais,
            </span>{" "}
            para estimular seus negócios 24 horas, o ano todo.
          </h2>

          <p
            style={{
              color: "#949494",
            }}>
            Contamos com profissionais certificados e qualificados para atender
            de forma personalizada, levando soluções necessárias para melhoria
            do seu ambiente físico e virtual.
          </p>

          <p
            style={{
              color: "#949494",
            }}>
            Todos os serviços prestados pela nossa empresa respeitam as normas e
            condutas necessárias para fornecer a melhor solução para o negócio
            da sua empresa.
          </p>

          <Link
            to="/servicos"
            style={{
              backgroundColor: Colors.BLACK,
              width: "calc(10em + 9vw)",
              color: Colors.WHITE,
              borderRadius: "28px",
              fontSize: "calc(14px + 0.2vw)",
              padding:
                "calc(0.3em + 0.1vw) calc(0.5em + 0.1vw) calc(0.3em + 0.1vw) calc(0.5em + 0.1vw)",
            }}
            className="text-decoration-none text-center text-nowrap">
            Conheça nossos serviços
          </Link>
        </div>
      </Col>

      <Col xs={{ offset: 2, size: 8 }} md={{ offset: 0, size: 6 }}>
        <div
          ref={ref}
          style={{
            ...solutionCardAnimation,
            position: isInViewport ? "static" : "absolute",
          }}>
          <img
            src={servicesThoughtfulMan}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </div>
      </Col>
    </Row>
  );
}
export default ServicesRow;
