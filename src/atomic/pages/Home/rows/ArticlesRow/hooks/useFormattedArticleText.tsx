import { useEffect, useState } from "react";

export default function useFormattedArticleText(text: string): string {
  const [formattedText, setFormattedText] = useState("");

  function formatArticleText(): void {
    const FIRST_CHAR_INDEX = 0;
    const LAST_CHAR_INDEX = -1;
    const MAX_TEXT_CHARS = 300;
    const textSlicedUpToMaxChars = text.slice(FIRST_CHAR_INDEX, MAX_TEXT_CHARS);
    const textToBeRenderWithoutLastWord = textSlicedUpToMaxChars
      .split(" ")
      .slice(FIRST_CHAR_INDEX, LAST_CHAR_INDEX)
      .join(" ");

    setFormattedText(textToBeRenderWithoutLastWord);
  }

  useEffect(() => {
    formatArticleText();
  }, []);

  return formattedText;
}
