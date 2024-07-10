import {useEffect, useState} from 'react'
// import Markdown from 'markdown-to-jsx';
import MarkdownRenderer from "../components/MarkdownRenderer";
// import MDXRenderer from "../components/MDXRenderer"
import Markdown from 'react-markdown';

const Home = ({content}) => {

  return (
    <div> 
     <MarkdownRenderer  content={content}/>

     {/* if write html style markdown then use this */}
     {/* <Markdown>{content}</Markdown>   */}
    </div>
  )
}

export default Home
