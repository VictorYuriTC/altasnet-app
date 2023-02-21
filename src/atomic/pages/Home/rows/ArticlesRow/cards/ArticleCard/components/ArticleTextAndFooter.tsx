import { useState } from "react";
import { List } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Colors from "../../../../../../../../foundations/Colors/Colors";
import HeartSVG from "../../../../../../../../svgs/HeartSVG";
import useFormattedArticleText from "../../../hooks/useFormattedArticleText";
import IArticle from "../../../interfaces/IArticle";

interface IArticleFooter {
  article: IArticle;
}

function ArticleTextAndFooter({ article }: IArticleFooter) {
  const [isHoveringReadMore, setIsHoveringReadMore] = useState(false);
  const [isHoveringHeart, setIsHoveringHeart] = useState(false);

  const formatedText = useFormattedArticleText(article.text);
  return (
    <div className="d-flex flex-column justify-content-end">
      <p
        style={{
          color: "#9a9a9a",
          fontSize: "calc(18px + 0.1vw)",
          fontWeight: "500",
          padding: "0em 1em 0em 1em",
        }}>
        {`${formatedText} […]`}
      </p>

      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          backgroundColor: "#f3f3f3",
          padding: "0.5em 1em 0.5em 1em",
          width: "100%",
        }}>
        <div className="d-flex gap-1 align-items-center">
          <HeartSVG
            onMouseEnter={() => {
              setIsHoveringHeart(true);
            }}
            onMouseLeave={() => {
              setIsHoveringHeart(false);
            }}
            width={24}
            height={24}
            style={{
              fill: isHoveringHeart ? Colors.SECONDARY : "white",
              stroke: Colors.SECONDARY,
              transition: "400ms",
            }}
          />

          <span
            style={{
              color: Colors.LIGHT_GRAY,
            }}>
            {article.amountOfLikes}
          </span>
        </div>

        <div className="d-flex gap-3 align-items-center">
          <div
            style={{
              width: "1px",
              height: "2em",
              backgroundColor: "#e5e5e5",
            }}
          />
          <List width={20} height={20} />

          <Link
            to={article.linkTo}
            style={{
              color: Colors.SECONDARY,
              opacity: isHoveringReadMore ? "1" : "0.8",
              textDecoration: isHoveringReadMore ? "underline" : "none",
            }}
            onMouseEnter={() => {
              setIsHoveringReadMore(true);
            }}
            onMouseLeave={() => {
              setIsHoveringReadMore(false);
            }}>
            Leia mais
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ArticleTextAndFooter;
