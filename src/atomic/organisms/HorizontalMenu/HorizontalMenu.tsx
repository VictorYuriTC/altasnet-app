import { SetStateAction } from "react";
import { Search } from "react-bootstrap-icons";
import { Col, Row } from "reactstrap";
import HeaderLink from "../Header/components/HeaderLink/HeaderLink";

interface IHorizontalMenu {
  setIsSearchInputDisplayed: React.Dispatch<SetStateAction<boolean>>;
  isSearchInputDisplayed: React.SetStateAction<boolean>;
}

export default function HorizontalMenu({
  setIsSearchInputDisplayed,
  isSearchInputDisplayed,
}: IHorizontalMenu) {
  return (
    <Row className="pb-3">
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
  );
}
