import { useEffect, useState } from "react";
import useIsInViewport from "../../../../../hooks/useIsInViewport";

interface IProps {
  solutionCardIndex: number;
}

export default function useSolutionCardAnimation({
  solutionCardIndex,
}: IProps) {
  const { isInViewport, ref } = useIsInViewport();
  const [solutionCardAnimation, setSolutionCardAnimation] = useState(
    getInitialSolutionCardAnimaton()
  );

  function getInitialTranslate() {
    if (solutionCardIndex === 0) {
      return "-8em 0em";
    }

    if (solutionCardIndex === 1) {
      return "0em -8em";
    }

    if (solutionCardIndex === 2) {
      return "8em 0em";
    }

    if (solutionCardIndex === 3) {
      return "-8em 0em";
    }

    if (solutionCardIndex === 4) {
      return "0em 8em";
    }

    if (solutionCardIndex === 5) {
      return "8em 0em";
    }
  }

  function getInitialSolutionCardAnimaton() {
    return {
      translate: getInitialTranslate(),
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
