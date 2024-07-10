import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { mdx } from "@mdx-js/react";

const MDXRenderer = ({ content }) => {
  return (
    <MDXProvider>
      <div>{mdx(content)}</div>
    </MDXProvider>
  );
};

export default MDXRenderer;
