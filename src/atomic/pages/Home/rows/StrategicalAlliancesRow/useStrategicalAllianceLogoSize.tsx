import { useEffect, useState } from "react";
import useWindowDimensions from "../../../../../hooks/useWindowDimensions";

function useStrategicalAllianceLogoSize() {
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
