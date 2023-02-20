import { Link } from "react-router-dom";
import Colors from "../../../../../foundations/Colors/Colors";
import ISolutionCard from "./ISolutionCard";
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
      className="offset-0 col-12 offset-sm-1 col-sm-10 offset-lg-0 col-lg-4"
      ref={ref}
      style={{
        backgroundColor: "white",
        ...solutionCardAnimation,
        position: isInViewport ? "static" : "absolute",
      }}>
      <div
        style={{
          backgroundColor: "#f2f5f9",
          height: "100%",
          padding: "0em 2em 0em 2em",
        }}
        className="d-flex flex-column align-items-center position-relative">
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
          className="d-flex flex-column justify-content-center align-items-center text-decoration-none w-100 gap-4 pt-5 pb-3">
          <img
            src={solution.image}
            alt={`${solution.title} svg.`}
            className=""
            style={{
              width: "auto",
              height: "auto",
            }}
          />

          <h4
            style={{
              fontSize: "calc(25px + 0.1vw)",
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
            fontSize: "calc(17.5px + 0.1vw)",
            lineHeight: "180%",
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
