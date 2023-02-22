import { useEffect, useState } from "react";
import useWindowDimensions from "../../../../../hooks/useWindowDimensions";
import ISize from "../../../../../interfaces/ISize";

export default function useFooterLogoSize(): ISize {
  const screeSize = useWindowDimensions();
  const [logoSize, setLogoSize] = useState(getLogoSize());

  function getLogoSize() {
    if (screeSize.width > 991) {
      return {
        width: "100%",
      };
    }

    if (screeSize.width <= 991 && screeSize.width > 760) {
      return {
        width: "45%",
      };
    }

    if (screeSize.width <= 760 && screeSize.width > 560) {
      return {
        width: "55%",
      };
    }

    if (screeSize.width <= 560 && screeSize.width > 450) {
      return {
        width: "65%",
      };
    }

    if (screeSize.width <= 450 && screeSize.width > 360) {
      return {
        width: "75%",
      };
    }

    return {
      width: "85%",
    };
  }

  useEffect(() => {
    setLogoSize(getLogoSize());
  }, [screeSize.width]);

  return logoSize;
}
