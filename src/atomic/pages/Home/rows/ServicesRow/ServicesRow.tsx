import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Colors from "../../../../../foundations/Colors/Colors";
import servicesThoughtfulMan from "../../../../../imgs/services-thoughtful-man.png";
import useServiceThoughtfulManAnimation from "./useServiceThoughtfulManAnimation";

function ServicesRow() {
  const { isInViewport, ref, serviceThoughtfulManAnimation } =
    useServiceThoughtfulManAnimation();
  return (
    <Row
      className="gx-4 gy-5 px-0 px-md-3 px-lg-5 d-flex justify-content-center"
      style={{
        paddingTop: "8em",
      }}>
      <Col
        xs={{ offset: 0, size: 12 }}
        sm={{ offset: 1, size: 10 }}
        lg={{ offset: 0, size: 6 }}>
        <div className="d-flex flex-column gap-4" style={{ width: "78%" }}>
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
              fontSize: "1.2em",
              lineHeight: "2em",
            }}>
            Contamos com profissionais certificados e qualificados para atender
            de forma personalizada, levando soluções necessárias para melhoria
            do seu ambiente físico e virtual.
          </p>

          <p
            style={{
              color: "#949494",
              fontSize: "1.2em",
              lineHeight: "2em",
            }}>
            Todos os serviços prestados pela nossa empresa respeitam as normas e
            condutas necessárias para fornecer a melhor solução para o negócio
            da sua empresa.
          </p>

          <Link
            to="/servicos"
            style={{
              backgroundColor: Colors.BLACK,
              width: "calc(16em + 0.3vw)",
              color: Colors.WHITE,
              borderRadius: "28px",
              fontSize: "calc(14px + 0.3vw)",
              padding: "0.8em 0.5em 0.8em 0.5em",
              fontWeight: "500",
            }}
            className="text-decoration-none text-center text-nowrap">
            Conheça nossos serviços
          </Link>
        </div>
      </Col>

      <Col
        xs={{ offset: 2, size: 8 }}
        md={{ offset: 0, size: 6 }}
        style={{ position: isInViewport ? "static" : "absolute" }}
        className="d-flex align-items-center">
        <div
          ref={ref}
          style={{
            ...serviceThoughtfulManAnimation,
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
