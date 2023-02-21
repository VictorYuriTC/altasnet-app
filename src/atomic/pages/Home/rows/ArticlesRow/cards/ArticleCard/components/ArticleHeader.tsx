import { useState } from "react";
import { Link } from "react-router-dom";
import Colors from "../../../../../../../../foundations/Colors/Colors";
import IArticle from "../../../interfaces/IArticle";

interface IArticleImage {
  article: IArticle;
}

export default function ArticleHeader({ article }: IArticleImage) {
  const [isHoveringImg, setIsHoveringImg] = useState(false);
  return (
    <Link
      className="text-decoration-none"
      to={article.linkTo}
      style={{
        color: Colors.BLACK,
      }}>
      <div
        style={{
          display: "inline-block",
          overflow: "hidden",
        }}
        onMouseEnter={() => {
          setIsHoveringImg(true);
        }}
        onMouseLeave={() => {
          setIsHoveringImg(false);
        }}>
        <img
          src={article.image}
          alt={`${article.companyName} case card header. Contains ${article.companyName} logo.`}
          style={{
            width: "100%",
            WebkitTransition: "all 500ms ease",
            MozTransition: "all 500ms ease",
            msTransition: "all 500ms ease",
            OTransition: "all 500ms ease",
            transition: "all 500ms ease",
            WebkitTransform: isHoveringImg ? "scale(1.1)" : "",
            verticalAlign: "middle",
          }}
        />
      </div>

      <h3
        style={{
          fontWeight: "900",
          padding: "1em 1em 1em 1em",
        }}>
        {article.title}
      </h3>
    </Link>
  );
}
