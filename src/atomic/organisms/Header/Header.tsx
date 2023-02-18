import { useEffect, useState } from "react";
import { MenuDown, Search, X } from "react-bootstrap-icons";
import { Col, Container, Row } from "reactstrap";
import Colors from "../../../foundations/Colors/Colors";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import altasNetLogo from "../../../imgs/altas-net-logo.png";
import HamburguerMenu from "./components/HamburguerMenu/HamburguerMenu";
import HorizontalMenu from "./components/HorizontalMenu/HorizontalMenu";
import MenuSidebar from "./components/MenuSidebar/MenuSidebar";
import HeaderLink from "./components/HeaderLink/HeaderLink";

function Header() {
  const windowSize = useWindowDimensions();

  useEffect(() => {
    handleOnWindowSizeChange();
  }, [windowSize.width, windowSize.height]);

  function handleOnWindowSizeChange() {
    setLogoSize(getLogoSize());
    if (windowSize.width < 1240) {
      setIsHorizontalMenuDisplayed(false);
      return;
    }

    setIsMenuSidebarDisplayed(false);
    setIsHorizontalMenuDisplayed(true);
  }

  function getLogoSize() {
    if (windowSize.width >= 1240) {
      return {
        width: "50%",
      };
    }

    if (windowSize.width < 1240 && windowSize.width >= 960) {
      return {
        width: "60%",
      };
    }

    if (windowSize.width < 960 && windowSize.width >= 760) {
      return {
        width: "80%",
      };
    }

    if (windowSize.width < 760 && windowSize.width >= 560) {
      return {
        width: "110%",
      };
    }

    if (windowSize.width < 560 && windowSize.width >= 360) {
      return {
        width: "125%",
      };
    }

    return {
      width: "150%",
    };
  }

  const [logoSize, setLogoSize] = useState(getLogoSize());
  const [isHorizontalMenuDisplayed, setIsHorizontalMenuDisplayed] =
    useState(true);
  const [isSearchInputDisplayed, setIsSearchInputDisplayed] = useState(false);
  const [isMenuSidebarDisplayed, setIsMenuSidebarDisplayed] = useState(false);

  return (
    <Container fluid>
      <Row>
        {
          <MenuSidebar
            isMenuSidebarDisplayed={isMenuSidebarDisplayed}
            setIsMenuSidebarDisplayed={setIsMenuSidebarDisplayed}
          />
        }
      </Row>

      <Row>
        <Col xs={{ offset: 3, size: 6 }}>
          <HeaderLink to="/" className="d-flex justify-content-center">
            <img
              src={altasNetLogo}
              alt={`Altasnet 20 years comemorative logo.`}
              style={{
                width: logoSize?.width,
              }}
            />
          </HeaderLink>
        </Col>
      </Row>

      <hr />

      {isHorizontalMenuDisplayed && (
        <HorizontalMenu
          setIsSearchInputDisplayed={setIsSearchInputDisplayed}
          isSearchInputDisplayed={isSearchInputDisplayed}
        />
      )}

      {!isHorizontalMenuDisplayed && (
        <HamburguerMenu
          setIsMenuSidebarDisplayed={setIsMenuSidebarDisplayed}
          isMenuSidebarDisplayed={isMenuSidebarDisplayed}
          setIsSearchInputDisplayed={setIsSearchInputDisplayed}
          isSearchInputDisplayed={isSearchInputDisplayed}
        />
      )}

      <Row style={{ padding: "0em 2em 0em 2em", height: "4em" }}>
        {
          <div
            style={{
              visibility: isSearchInputDisplayed ? "visible" : "hidden",
              opacity: isSearchInputDisplayed ? "1.0" : "0",
              transition: "500ms",
            }}>
            <Search
              className="position-absolute"
              width={24}
              height={24}
              style={{
                translate: "1em 1.2em",
              }}
            />

            <input
              type="text"
              placeholder="Digite sua busca"
              style={{
                height: "4em",
                border: `1px solid ${Colors.PRIMARY}`,
                borderRadius: "16px",
                paddingLeft: "3em",
                width: "100%",
              }}
            />

            <X
              role="button"
              className="position-absolute"
              width={32}
              height={32}
              onClick={() => {
                setIsSearchInputDisplayed(false);
              }}
              style={{
                translate: "-3em 1em",
              }}
            />
          </div>
        }
      </Row>
    </Container>
  );
}
export default Header;
