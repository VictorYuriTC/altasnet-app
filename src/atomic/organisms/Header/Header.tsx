import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import HamburguerMenu from "./rows/HamburguerMenu/HamburguerMenu";
import HorizontalMenu from "./rows/HorizontalMenu/HorizontalMenu";
import MenuSidebar from "./rows/MenuSidebar/MenuSidebar";
import LogoRow from "./rows/LogoRow/LogoRow";
import SearchInputRow from "./rows/SearchInputRow/SearchInputRow";

function Header() {
  const windowSize = useWindowDimensions();

  useEffect(() => {
    handleOnWindowSizeChange();
  }, [windowSize.width, windowSize.height]);

  function handleOnWindowSizeChange() {
    if (windowSize.width < 1240) {
      setIsHorizontalMenuDisplayed(false);
      return;
    }

    setIsMenuSidebarDisplayed(false);
    setIsHorizontalMenuDisplayed(true);
  }

  const [isHorizontalMenuDisplayed, setIsHorizontalMenuDisplayed] =
    useState(true);
  const [isSearchInputDisplayed, setIsSearchInputDisplayed] = useState(false);
  const [isMenuSidebarDisplayed, setIsMenuSidebarDisplayed] = useState(false);

  return (
    <Container fluid>
      <MenuSidebar
        isMenuSidebarDisplayed={isMenuSidebarDisplayed}
        setIsMenuSidebarDisplayed={setIsMenuSidebarDisplayed}
      />

      <LogoRow />

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

      <SearchInputRow
        setIsSearchInputDisplayed={setIsSearchInputDisplayed}
        isSearchInputDisplayed={isSearchInputDisplayed}
      />
    </Container>
  );
}
export default Header;
