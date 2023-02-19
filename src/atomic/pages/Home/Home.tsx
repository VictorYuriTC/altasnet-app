import { Container } from "reactstrap";
import Colors from "../../../foundations/Colors/Colors";
import LandingImageRow from "./rows/LandingImageRow/LandingImageRow";
import ServicesRow from "./rows/ServicesRow/ServicesRow";
import SolutionsRow from "./rows/SolutionsRows/SolutionsRows";

function Home() {
  return (
    <Container fluid style={{ translate: "0em -4em" }}>
      <LandingImageRow />

      <SolutionsRow />

      <ServicesRow />

      <div>
        <span style={{ color: Colors.PRIMARY }}>Primary</span>
        <span style={{ color: Colors.SECONDARY }}>Secondary</span>
        <span style={{ color: Colors.DARK_GRAY }}>Dark Gray</span>
        <span style={{ color: Colors.GRAY }}>Gray</span>
        <span style={{ color: Colors.LIGHT_GRAY }}>Light gray</span>
      </div>
    </Container>
  );
}
export default Home;
