import { Dispatch, SetStateAction } from "react";
import { X } from "react-bootstrap-icons";
import { Col } from "reactstrap";
import Colors from "../../../foundations/Colors/Colors";
import MenuSidebarLink from "./components/MenuSidebarLink";

interface IMenuSidebar {
  setIsMenuSidebarDisplayed: Dispatch<SetStateAction<boolean>>;
  isMenuSidebarDisplayed: SetStateAction<boolean>;
}

function MenuSidebar({
  setIsMenuSidebarDisplayed,
  isMenuSidebarDisplayed,
}: IMenuSidebar) {
  return (
    <Col
      className="position-absolute"
      xs={{ size: 12 }}
      sm={{ offset: 8, size: 4 }}
      style={{
        height: "100vh",
        backgroundColor: Colors.DARK,
        visibility: isMenuSidebarDisplayed ? "visible" : "hidden",
        opacity: isMenuSidebarDisplayed ? "1.0" : "0",
        transition: "500ms",
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

      <MenuSidebarLink to="/solucoes" text="Soluções" />

      <MenuSidebarLink to="/servicos" text="Serviços" />

      <MenuSidebarLink to="/mssp" text="MSSP" />

      <MenuSidebarLink to="/cases-de-sucesso" text="Cases" />

      <MenuSidebarLink to="/blog" text="Blog" />

      <MenuSidebarLink to="/contato" text="Contato" />

      <MenuSidebarLink to="/area-do-cliente" text="Área do Cliente" />
    </Col>
  );
}
export default MenuSidebar;
