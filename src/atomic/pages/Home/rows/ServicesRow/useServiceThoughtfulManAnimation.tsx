import { useEffect, useState } from "react";
import useIsInViewport from "../../../../../hooks/useIsInViewport";

export default function useSolutionCardAnimation() {
  const { isInViewport, ref } = useIsInViewport();
  const [solutionCardAnimation, setSolutionCardAnimation] = useState(
    getInitialSolutionCardAnimaton()
  );

  function getInitialSolutionCardAnimaton() {
    return {
      translate: "8em 0em",
      transition: "1000ms",
      opacity: "0",
    };
  }

  function getFinalSolutionCardAnimation() {
    return {
      translate: "0em 0em",
      transition: "1000ms",
      opacity: "1.0",
    };
  }

  useEffect(() => {
    if (!isInViewport) return;
    if (isInViewport) setSolutionCardAnimation(getFinalSolutionCardAnimation());
  }, [isInViewport]);

  return {
    solutionCardAnimation,
    isInViewport,
    ref,
  };
}
