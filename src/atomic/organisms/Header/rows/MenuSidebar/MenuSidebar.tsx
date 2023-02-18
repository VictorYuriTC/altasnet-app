import { Dispatch, SetStateAction, useState } from "react";
import { Linkedin, Rss, X } from "react-bootstrap-icons";
import { Col, Row } from "reactstrap";
import Colors from "../../../../../foundations/Colors/Colors";
import MenuSidebarLink from "./components/MenuSidebarLink";
import MenuSidebarSolutionsLink from "./components/MenuSidebarSolutionsLink";

interface IMenuSidebar {
  setIsMenuSidebarDisplayed: Dispatch<SetStateAction<boolean>>;
  isMenuSidebarDisplayed: SetStateAction<boolean>;
}

function MenuSidebar({
  setIsMenuSidebarDisplayed,
  isMenuSidebarDisplayed,
}: IMenuSidebar) {
  const [isHoveringSolutions, setIsHoveringSolutions] = useState(false);
  return (
    <Row className="">
      <Col
        className="position-absolute p-0"
        xs={{ size: 12 }}
        sm={{ offset: 8, size: 4 }}
        style={{
          height: "100vh",
          backgroundColor: "#191919",
          visibility: isMenuSidebarDisplayed ? "visible" : "hidden",
          opacity: isMenuSidebarDisplayed ? "1.0" : "0",
          transition: "500ms",
          zIndex: "100",
        }}>
        <div className="d-flex justify-content-end pt-3 pb-5">
          <X
            role="button"
            onClick={() => {
              setIsMenuSidebarDisplayed(!isMenuSidebarDisplayed);
            }}
            style={{
              color: Colors.WHITE,
              opacity: "0.8",
            }}
            width={32}
            height={32}
          />
        </div>

        <MenuSidebarLink to="/nossa-empresa" text="Empresa" />

        <MenuSidebarSolutionsLink
          to="/solucoes"
          text="Soluções"
          isHoveringSolutions={isHoveringSolutions}
          setIsHoveringSolutions={
            setIsHoveringSolutions
          }></MenuSidebarSolutionsLink>

        {isHoveringSolutions && (
          <div
            style={{
              backgroundColor: Colors.DARK_GRAY,
            }}
            onMouseEnter={() => setIsHoveringSolutions(true)}
            onMouseLeave={() => setIsHoveringSolutions(false)}>
            <MenuSidebarLink to="/redes" text="Redes" />
            <MenuSidebarLink to="/data-center" text="Data Center" />
            <MenuSidebarLink to="/seguranca" text="Segurança" />
            <MenuSidebarLink
              to="/application-services"
              text="Application Services"
            />
            <MenuSidebarLink to="/digital-workflow" text="Digital Workflow" />
          </div>
        )}

        <MenuSidebarLink to="/servicos" text="Serviços" />

        <MenuSidebarLink to="/mssp" text="MSSP" />

        <MenuSidebarLink to="/cases-de-sucesso" text="Cases" />

        <MenuSidebarLink to="/blog" text="Blog" />

        <MenuSidebarLink to="/contato" text="Contato" />

        <MenuSidebarLink to="/area-do-cliente" text="Área do Cliente" />

        <div className="d-flex justify-content-center gap-3 pt-4">
          <a href="https://www.linkedin.com/company/altasnet/">
            <Linkedin width={16} height={16} style={{ fill: "#a6a6a6" }} />
          </a>

          <a href="https://altasnet.com.br/feed/">
            <Rss width={16} height={16} style={{ fill: "#a6a6a6" }} />
          </a>
        </div>
      </Col>
    </Row>
  );
}
export default MenuSidebar;
