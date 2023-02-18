import useWindowDimensions from "../../../../../hooks/useWindowDimensions";

export default function useLogoSize() {
  const windowSize = useWindowDimensions();

  if (windowSize.width >= 1240) {
    return {
      width: "50%",
    };
  }

  if (windowSize.width < 1240 && windowSize.width >= 960) {
    return {
      width: "60%",
    };
  }

  if (windowSize.width < 960 && windowSize.width >= 760) {
    return {
      width: "80%",
    };
  }

  if (windowSize.width < 760 && windowSize.width >= 560) {
    return {
      width: "110%",
    };
  }

  if (windowSize.width < 560 && windowSize.width >= 360) {
    return {
      width: "125%",
    };
  }

  return {
    width: "150%",
  };
}
