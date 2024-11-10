import React, { useEffect, useState } from "react";
import LayoutComponent from "./components/LayoutComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

// import Markdown from 'markdown-to-jsx';
import Markdown from "react-markdown";
import MarkdownRenderer from "./components/MarkdownRenderer";
import ReactInfo from "./pages/ReactInfo";
import ComponentInfo from "./pages/ComponentInfo";
import JSX from "./pages/JSX";
import Props from "./pages/Props";
import Installation from "./pages/Installation";
import ComponentShort from "./pages/ComponentShort";
import State from "./pages/State";
import Hooks from "./pages/Hooks/Hooks";
import ReactRoadMap from "./pages/ReactRoadMap";

function App() {
  return (
    <Router>
      <LayoutComponent>
        <Routes>
          {/* <Route path='/' element={<App />} /> */}
          <Route path="/" element={<Home />} />
          <Route
            path="/react-info"
            // element={<Markdown>{content}</Markdown>}
            // element={  <MarkdownRenderer  content={content}/>}
            element={<ReactInfo />}
          />
          <Route path="/component-long" element={<ComponentInfo />} />
          <Route path="/component-short" element={<ComponentShort />} />
          <Route path="/jsx" element={<JSX />} />
          <Route path="/props" element={<Props />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/state" element={<State />} />
          <Route path="/hooks-info" element={<Hooks />} />
          <Route path="/reactRoadMap" element={<ReactRoadMap />} />

        </Routes>
      </LayoutComponent>
    </Router>
  );
}

export default App;
