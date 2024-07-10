import React, { useEffect, useState } from 'react'
import LayoutComponent from './components/LayoutComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Activity from './pages/Activity';
// import Markdown from 'markdown-to-jsx';
import Markdown from 'react-markdown';
import MarkdownRenderer from "./components/MarkdownRenderer";

function App() {
  
  const fileName = 'what_is_react.md';
  const [post, setPost] = useState('');

  useEffect(() => {
    fetch(fileName)
    .then(res => res.text())
    .then(res => setPost(res))
    .catch(err => console.error(err));
  },[]);

  return (
   <Router>
     <LayoutComponent >
      <Routes>
        {/* <Route path='/' element={<App />} /> */}
        <Route path='/home' element={<Home content={post}/>} />
        <Route path='/activity' element={<Activity />} />
        <Route
            path='/react-info'
            // element={<Markdown>{post}</Markdown>}
            element={  <MarkdownRenderer  content={post}/>}
          />
      </Routes>
    
    </LayoutComponent >
   </Router>

  );
}

export default App;
