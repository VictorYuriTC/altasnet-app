import { Link } from "react-router-dom";
import Colors from "../../../../foundations/Colors/Colors";
import ISolutionCard from "../interfaces/ISolutionCard";
import useSolutionCardAnimation from "./useSolutionCardAnimation";

interface IProps {
  solution: ISolutionCard;
  index: number;
}

function SolutionCard({ solution, index }: IProps) {
  const { ref, solutionCardAnimation, isInViewport } = useSolutionCardAnimation(
    {
      solutionCardIndex: index,
    }
  );
  return (
    <div
      className="offset-1 col-10 offset-md-0 col-md-4"
      ref={ref}
      style={{
        backgroundColor: "white",
        ...solutionCardAnimation,
        position: isInViewport ? "static" : "absolute",
      }}>
      <div
        style={{ backgroundColor: "#f2f5f9", height: "100%" }}
        className="d-flex flex-column align-items-center gap-3 position-relative">
        <div
          style={{
            height: "6px",
            width: "80%",
            borderRadius: "16px",
            backgroundColor: "#dce2e9",
          }}
        />
        <Link
          to={solution.to}
          className="d-flex flex-column justify-content-center align-items-center text-decoration-none w-100">
          <img
            src={solution.image}
            alt={`${solution.title} svg.`}
            className="pt-4"
            style={{
              width: "auto",
              height: "auto",
            }}
          />

          <h4
            style={{
              fontSize: "30px",
              fontWeight: "900",
              color: Colors.BLACK,
            }}
            className="text-center">
            {solution.title}
          </h4>
        </Link>

        <p
          style={{
            color: "#5A5B5D",
            fontWeight: "500",
            lineHeight: "200%",
            padding: "0em 1em 0em 1em",
          }}
          className="text-center">
          {solution.text}
        </p>

        <div
          className="position-absolute bottom-0"
          style={{
            height: "6px",
            width: "80%",
            borderRadius: "16px",
            backgroundColor: "#dce2e9",
          }}
        />
      </div>
    </div>
  );
}
export default SolutionCard;
