import Colors from "../../../foundations/Colors/Colors";

function Home({}) {
  return (
    <div>
      <span style={{ color: Colors.PRIMARY }}>Primary</span>
      <span style={{ color: Colors.SECONDARY }}>Secondary</span>
      <span style={{ color: Colors.DARK_GRAY }}>Dark Gray</span>
      <span style={{ color: Colors.GRAY }}>Gray</span>
      <span style={{ color: Colors.LIGHT_GRAY }}>Light gray</span>
    </div>
  );
}
export default Home;
