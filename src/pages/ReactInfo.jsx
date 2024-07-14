import React, { useState, useEffect } from "react";
// import Markdown from 'markdown-to-jsx';
import MarkdownRenderer from "../components/MarkdownRenderer";
// import MDXRenderer from "../components/MDXRenderer"
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // Allows HTML in markdown
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import '../styles/ReactMarkdownStyles.css';
const ReactInfo = () => {
  const fileName = "what_is_react.md";
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(fileName)
      .then((res) => res.text())
      .then((res) => setContent(res))
      .catch((err) => console.error("fetching error markdown file: ", err));
  }, []);

  return (
    <div className="markdown-content">
      {/* <MarkdownRenderer  content={content} /> */}
      <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
        {content}
      </ReactMarkdown>
      {/* if write html style markdown then use this */}
      {/* <Markdown>{content}</Markdown>   */}
    </div>
  );
};

export default ReactInfo;
