import { Col } from "reactstrap";
import IArticle from "../../interfaces/IArticle";
import ArticleTextAndFooter from "./components/ArticleTextAndFooter";
import ArticleHeader from "./components/ArticleHeader";

interface IArticleCard {
  article: IArticle;
}

function ArticleCard({ article }: IArticleCard) {
  return (
    <Col
      xs={{ offset: 1, size: 10 }}
      md={{ offset: 0, size: 4 }}
      className="d-flex flex-column justify-content-between pb-4">
      <ArticleHeader article={article} />

      <ArticleTextAndFooter article={article} />
    </Col>
  );
}
export default ArticleCard;
