import { useEffect, useState } from "react";
import useWindowDimensions from "../../../../../hooks/useWindowDimensions";

function useLandingBgImgSize() {
  const windowSize = useWindowDimensions();
  const [bgImgSize, setBgImgSize] = useState({
    width: "",
    height: "",
  });

  useEffect(() => {
    if (windowSize.width < 760) {
      setBgImgSize({
        height: "40em",
        width: "auto",
      });
    }

    if (windowSize.width >= 760 && windowSize.width < 1024) {
      setBgImgSize({
        height: "50em",
        width: "auto",
      });
    }

    if (windowSize.width >= 1024) {
      setBgImgSize({
        height: "60em",
        width: "auto",
      });
    }
  }, [windowSize.width, windowSize.height]);

  return bgImgSize;
}
export default useLandingBgImgSize;
