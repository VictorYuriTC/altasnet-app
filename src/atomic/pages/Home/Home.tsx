import { Container } from "reactstrap";
import ArticlesRow from "./rows/ArticlesRow/ArticlesRow";
import LandingImageRow from "./rows/LandingImageRow/LandingImageRow";
import ServicesRow from "./rows/ServicesRow/ServicesRow";
import SolutionsRow from "./rows/SolutionsRows/SolutionsRows";
import StrategicAlliancesRow from "./rows/StrategicalAlliancesRow/StrategicalAlliancesRow";
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

      <ArticlesRow />

      <StrategicAlliancesRow />
    </Container>
  );
}
export default Home;
