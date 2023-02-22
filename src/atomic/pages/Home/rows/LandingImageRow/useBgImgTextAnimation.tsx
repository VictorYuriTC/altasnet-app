import { useEffect, useState } from "react";

function useBgImgTextAnimation() {
  const [bgTextAnimation, setBgTextAnimation] = useState({
    translate: "0em 24em",
    opacity: "0",
    transition: "1500ms",
  });

  useEffect(() => {
    setTimeout(() => {
      setBgTextAnimation({
        translate: "0em 10em",
        opacity: "1.0",
        transition: "1500ms",
      });
    }, 500);
  }, []);

  return bgTextAnimation;
}
export default useBgImgTextAnimation;
