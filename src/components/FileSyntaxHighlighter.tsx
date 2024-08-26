import React, { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProps {
  content: string;
}

const FileSyntaxHighlighter = ({ content }: IProps) => {
  const [fontSize, setFontSize] = useState<string>("1.1rem");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
        setFontSize("0.9rem"); // Decrease font size for medium screens
      } else {
        setFontSize("1.1rem"); // Default font size
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the font size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        height: "100vh",
        overflowX: "auto",
        fontSize: fontSize,
      }}
      showLineNumbers
    >
      {String(content)}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
