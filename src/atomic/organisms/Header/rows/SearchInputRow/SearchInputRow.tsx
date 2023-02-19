import { Dispatch, SetStateAction } from "react";
import { Search, X } from "react-bootstrap-icons";
import { Col, Row } from "reactstrap";
import Colors from "../../../../../foundations/Colors/Colors";

interface ISearchInputRow {
  setIsSearchInputDisplayed: Dispatch<SetStateAction<boolean>>;
  isSearchInputDisplayed: SetStateAction<boolean>;
}

function SearchInputRow({
  setIsSearchInputDisplayed,
  isSearchInputDisplayed,
}: ISearchInputRow) {
  return (
    <Row style={{ padding: "0em 2em 0em 2em", height: "4em" }}>
      <Col
        style={{
          visibility: isSearchInputDisplayed ? "visible" : "hidden",
          opacity: isSearchInputDisplayed ? "1.0" : "0",
          transition: "500ms",
          zIndex: "50",
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
      </Col>
    </Row>
  );
}
export default SearchInputRow;
