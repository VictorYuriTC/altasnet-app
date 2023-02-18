import { Dispatch, SetStateAction } from "react";
import { MenuDown, Search } from "react-bootstrap-icons";
import { Col, Row } from "reactstrap";

interface IHamburguerMenu {
  setIsSearchInputDisplayed: Dispatch<SetStateAction<boolean>>;
  isSearchInputDisplayed: SetStateAction<boolean>;

  setIsMenuSidebarDisplayed: Dispatch<SetStateAction<boolean>>;
  isMenuSidebarDisplayed: SetStateAction<boolean>;
}

function HamburguerMenu({
  setIsSearchInputDisplayed,
  isSearchInputDisplayed,
  setIsMenuSidebarDisplayed,
  isMenuSidebarDisplayed,
}: IHamburguerMenu) {
  return (
    <Row className="pb-3">
      {
        <>
          <Col className="d-flex align-items-center">
            <MenuDown
              role="button"
              onClick={() => {
                setIsMenuSidebarDisplayed(!isMenuSidebarDisplayed);
              }}
              width={32}
              height={32}
              className=""
            />
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
        </>
      }
    </Row>
  );
}
export default HamburguerMenu;
