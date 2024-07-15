import React, { useEffect, useState } from "react";
import LayoutComponent from "./components/LayoutComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
// import Markdown from 'markdown-to-jsx';
import Markdown from "react-markdown";
import MarkdownRenderer from "./components/MarkdownRenderer";
import ReactInfo from "./pages/ReactInfo";
import ComponentInfo from "./pages/ComponentInfo";
import JSX from "./pages/JSX";
import Props from "./pages/Props";

function App() {
  return (
    <Router>
      <LayoutComponent>
        <Routes>
          {/* <Route path='/' element={<App />} /> */}
          <Route path="/home" element={<Home />} />
          <Route
            path="/react-info"
            // element={<Markdown>{content}</Markdown>}
            // element={  <MarkdownRenderer  content={content}/>}
            element={<ReactInfo />}
          />
          <Route path="/component" element={<ComponentInfo />} />
          <Route path="/jsx" element={<JSX />} />
          <Route path="/props" element={<Props />} />

        </Routes>
      </LayoutComponent>
    </Router>
  );
}

export default App;
