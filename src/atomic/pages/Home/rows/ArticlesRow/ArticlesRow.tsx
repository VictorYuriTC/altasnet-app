import { Col, Row } from "reactstrap";
import ArticleCard from "./cards/ArticleCard/ArticleCard";
import useArticlesData from "./hooks/useArticlesData";

function ArticlesRow() {
  const articlesData = useArticlesData();
  return (
    <>
      <Row
        style={{
          padding: "5em 0em 5em 0em",
        }}>
        <Col xs={{ offset: 1, size: 10 }} md={{ offset: 2, size: 8 }}>
          <h2
            className="text-center"
            style={{
              color: "#84a0b2",
              fontWeight: "900",
            }}>
            Atualize-se sobre as novidades, tendências e tranqueiras
            tecnológicas voltadas ao universo da TI!
          </h2>
        </Col>
      </Row>

      <Row style={{ padding: "0em 6em 0em 6em" }}>
        {articlesData.map((article) => (
          <ArticleCard article={article} />
        ))}
      </Row>
    </>
  );
}
export default ArticlesRow;
