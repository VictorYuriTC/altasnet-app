import { SetStateAction, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { Col, Row } from "reactstrap";
import HorizontalLink from "./components/HorizontalLink/HorizontalLink";
import SolutionsLink from "./components/SolutionsLink/SolutionsLink";

interface IHorizontalMenu {
  setIsSearchInputDisplayed: React.Dispatch<SetStateAction<boolean>>;
  isSearchInputDisplayed: React.SetStateAction<boolean>;
}

export default function HorizontalMenu({
  setIsSearchInputDisplayed,
  isSearchInputDisplayed,
}: IHorizontalMenu) {
  const [isHoveringSolutions, setIsHoveringSolutions] = useState(false);
  return (
    <Row className="pb-3">
      <Col
        xs={{ offset: 3, size: 6 }}
        className="d-flex justify-content-center align-items-center">
        <HorizontalLink to="/nossa-empresa" text="Empresa" />

        <HorizontalLink
          to="/solucoes"
          text="Soluções"
          onMouseEnter={() => setIsHoveringSolutions(true)}
          onMouseLeave={() => setIsHoveringSolutions(false)}>
          {isHoveringSolutions && (
            <div className="d-flex flex-column position-absolute py-3">
              <SolutionsLink to="/redes" text="Redes" />
              <SolutionsLink to="/data-center" text="Data Center" />
              <SolutionsLink to="/seguranca" text="Segurança" />
              <SolutionsLink
                to="/application-services"
                text="Application Services"
              />
              <SolutionsLink to="/digital-workflow" text="Digital Workflow" />
            </div>
          )}
        </HorizontalLink>

        <HorizontalLink to="/servicos" text="Serviços" />

        <HorizontalLink to="/mssp" text="MSSP" />

        <HorizontalLink to="/cases-de-sucesso" text="Cases" />

        <HorizontalLink to="/blog" text="Blog" />

        <HorizontalLink to="/contato" text="Contato" />

        <HorizontalLink to="/area-do-cliente" text="Área do Cliente" />
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
