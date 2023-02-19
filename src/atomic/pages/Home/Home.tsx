import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Colors from "../../../foundations/Colors/Colors";
import homePageLandingBg from "../../../imgs/home-page-landing-bg.jpg";
import useBgImgTextAnimation from "./hooks/useBgImgTextAnimation";
import useLandingBgImgSize from "./hooks/useLandingBgImgSize";
import useSolutionsData from "./hooks/useSolutionsData";
import SolutionCard from "./components/SolutionCard";
import servicesThoughtfulMan from "../../../imgs/services-thoughtful-man.png";

function Home({}) {
  const bgImgSize = useLandingBgImgSize();
  const bgImgTextAnimation = useBgImgTextAnimation();

  return (
    <Container fluid style={{ translate: "0em -4em" }}>
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
              Contamos com profissionais certificados e qualificados para
              atender de forma personalizada, levando soluções necessárias para
              melhoria do seu ambiente físico e virtual.
            </p>

            <p
              style={{
                color: "#949494",
              }}>
              Todos os serviços prestados pela nossa empresa respeitam as normas
              e condutas necessárias para fornecer a melhor solução para o
              negócio da sua empresa.
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
          <div>
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

      <div>
        <span style={{ color: Colors.PRIMARY }}>Primary</span>
        <span style={{ color: Colors.SECONDARY }}>Secondary</span>
        <span style={{ color: Colors.DARK_GRAY }}>Dark Gray</span>
        <span style={{ color: Colors.GRAY }}>Gray</span>
        <span style={{ color: Colors.LIGHT_GRAY }}>Light gray</span>
      </div>
    </Container>
  );
}
export default Home;
