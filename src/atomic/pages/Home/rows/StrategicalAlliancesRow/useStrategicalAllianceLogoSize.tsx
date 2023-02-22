import { useEffect, useState } from "react";
import useWindowDimensions from "../../../../../hooks/useWindowDimensions";
import ISize from "../../../../../interfaces/ISize";

function useStrategicalAllianceLogoSize(): ISize {
  const { width } = useWindowDimensions();

  const [logoSize, setLogoSize] = useState(getLogoSize());

  function getLogoSize() {
    if (width < 768) {
      return {
        width: "50%",
      };
    }

    return {
      width: "100%",
    };
  }

  useEffect(() => {
    setLogoSize(getLogoSize());
  }, [width]);

  return logoSize;
}
export default useStrategicalAllianceLogoSize;
