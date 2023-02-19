import { useEffect, useState } from "react";
import useIsInViewport from "../../../../../hooks/useIsInViewport";

export default function useServiceThoughtfulManAnimation() {
  const { isInViewport, ref } = useIsInViewport();
  const [serviceThoughtfulManAnimation, setServiceThoughtfulManAnimation] =
    useState(getInitialSolutionCardAnimaton());

  function getInitialSolutionCardAnimaton() {
    return {
      translate: "8em 0em",
      transition: "1000ms",
      opacity: "0",
    };
  }

  function getFinalServiceThoughtfulManAnimation() {
    return {
      translate: "0em 0em",
      transition: "1000ms",
      opacity: "1.0",
    };
  }

  useEffect(() => {
    if (!isInViewport) return;
    if (isInViewport)
      setServiceThoughtfulManAnimation(getFinalServiceThoughtfulManAnimation());
  }, [isInViewport]);

  return {
    serviceThoughtfulManAnimation,
    isInViewport,
    ref,
  };
}
