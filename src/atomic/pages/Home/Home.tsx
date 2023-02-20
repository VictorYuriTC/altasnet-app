import { Container } from "reactstrap";
import Colors from "../../../foundations/Colors/Colors";
import LandingImageRow from "./rows/LandingImageRow/LandingImageRow";
import ServicesRow from "./rows/ServicesRow/ServicesRow";
import SolutionsRow from "./rows/SolutionsRows/SolutionsRows";
import SuccessCasesRow from "./rows/SuccessCasesRow/SuccessCasesRow";

function Home() {
  return (
    <Container fluid style={{ translate: "0em -4em" }}>
      <LandingImageRow />

      <Container fluid style={{ padding: "0em 2.5em 0em 2.5em" }}>
        <SolutionsRow />

        <ServicesRow />
      </Container>

      <SuccessCasesRow />
    </Container>
  );
}
export default Home;
