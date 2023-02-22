import { useEffect, useState } from "react";
import useWindowDimensions from "../../../../../../hooks/useWindowDimensions";

export default function useArticlesRowPadding(): string {
  const screenSize = useWindowDimensions();

  const [rowPadding, setRowPadding] = useState(getRowPadding());

  function getRowPadding() {
    if (screenSize.width < 760) {
      return "0em 3em 0em 3em";
    }

    if (screenSize.width >= 760 && screenSize.width < 960) {
      return "0em 7em 0em 7em";
    }

    if (screenSize.width >= 960 && screenSize.width < 1240) {
      return "0em 10em 0em 10em";
    }

    if (screenSize.width > 1240) {
      return "0em 12em 0em 12em";
    }

    return "0em 2em 0em 2em";
  }

  useEffect(() => {
    setRowPadding(getRowPadding());
  }, [screenSize.width]);

  return rowPadding;
}
