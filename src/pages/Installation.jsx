import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../styles/Style.css";

const Installation = () => {
  return (
    <div className="blog">
      <h1 className="headline">Introduction and Installation</h1>
      <hr className="hrline" />
      <div className="blogTopImage">
        <img
          src="/assets/images/installation.png"
          alt="installation"
        />
      </div>
      <div className="blogContent">
        <h3 className="subHeadline">Introduction</h3>
        <hr className="hrline" />
        <p>
          ইতোপূর্বে আমরা রিয়্যাক্টের প্রজেক্ট তৈরি করার জন্য ব্যবহার করে আসছিলাম
          <code className="inlineCode">create-react-app</code>। কিন্তু আমরা আজ
          ব্যবহার করবো একটা নতুন টেকনোলজি <a href="https://vitejs.dev/">Vite</a>{" "}
          । কারণ Vite অনেক ফাস্ট। আমরা এদের ডকুমেন্টেশনে গেলে কিভাবে তা ব্যবহার
          করতে হবে সেই সম্পর্কে জানতে পারবো। পাশাপাশি রিয়াক্ট কে প্রোডাকশনে রান
          করতে প্রয়োজন npm অথবা yarn এবং প্রয়োজন{" "}
          <a href="https://nodejs.org/en">Node.js</a> ইন্সটল করা
        </p>
        <h4 className="blogSubheading">Install React project using Vite</h4>
        <p>
          vite ব্যবহার করে রিয়্যাক্ট অ্যাপ্লিকেশন তৈরি করতে হলে আমাদের
          <code className="inlineCode">npm create vite@latest</code>
          অথবা
          <code className="inlineCode">yarn create vite</code>
          এই কমান্ড ব্যবহার করতে হবে। আমরা <b>npm</b> দিয়ে আমাদের অ্যাপ্লিকেশন
          ইনস্টল করে ফেললাম। রিয়্যাক্ট নিয়ে কাজ করতে গেলে আমাদের সবসময়
          রিয়্যাক্টের অফিসিয়াল <a href="https://reactjs.org/">ওয়েবসাইট</a> খোলা
          রাখতে হবে। কারণ সবকিছু মাথায় রাখার প্রয়োজন নেই আর আমরা মাথায় রাখিও না।
          আমাদের যখন যা দরকার হবে তা ডকুমেন্টেশন দেখে করে নিতে পারবো।
        </p>
        <h4 className="blogSubheading">Project files analysis</h4>
        <p>
          এবার যদি আমাদের প্রজেক্টটাকে আমরা দেখি দেখবো এখানে শুধ্মাত্র একটা html
          ফাইল আছে। এই কারণে একে সিঙ্গেল পেইজ অ্যাপ্লিকেশন বলা হয়। আমরা যখন
          ভ্যানিলা প্রজেক্ট করি তখন এক একটা পেইজের জন্য ভিন্ন ভিন্ন html ফাইল
          বানাতাম। কিন্তু এখানে সবসময় এই একটাই html ফাইল থাকবে। তার মানে কি আমরা
          মাল্টিপল পেইজ বানাবো না? অবশ্যই থাকবে। যত ইচ্ছা আমরা পেইজ বানাতে
          পারবো। কিন্তু এইচটিএমএল ফাইল থাকবে একটাই। আর এই ফাইলের ভিতর শুধুমাত্র
          নিচের কোডটাই থাকবে। আর কিছু থাকবে না। বাকি সব কন্ট্রোল করা হবে
          জাভাস্ক্রিপ্ট দিয়ে।
        </p>{" "}
        <br />
        <SyntaxHighlighter language="javascript" style={twilight}>
          {`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vite + React</title>
          </head>
          <body>
            <div id="root"></div>
            <script type="module" src="/src/main.jsx"></script>
          </body>
        </html>
            `}
        </SyntaxHighlighter>
        <p>
          জাস্ট একটা <b>div</b> থাকবে <b>root</b> আইডি নামে।
        </p>
        <p>
          আমাদের যা কাজ সবই <b>src</b> ফোল্ডারের মধ্যে করবো। আমরা আর প্রজেক্টের
          অন্য কোথাও হাতও দিবো না। যা কিছু করার আমরা এই ফোল্ডারেই করবো। চলুন
          দেখা যাক src ফোল্ডারের মধ্যে কি কি আছে। তার আগে আমরা আমাদের
          অ্যাপ্লিকেশনকে রান করি চলুন। আমরা নিচের কমান্ড লিখে আমাদের
          অ্যাপ্লিকেশন রান করতে পারি।
        </p>{" "}
        <br />
        <SyntaxHighlighter>{`npm run dev`}</SyntaxHighlighter>
        <p>
          রান করার পর দেখবেন একটা লিংক আমাদেরকে ক্রিয়েট করে দিবে। আমরা
          ব্রাউজারের সেই লিংক রান করলে নিচের ছবির মতো উইন্ডো পাবো।
        </p>{" "}
        <br />
        <div className="blogImage">
          <img
            src="/assets/images/installation-first.avif"
            alt="first react window"
          />
        </div>
        <p>
          এবার আমরা আমাদের <b>src</b> ফোল্ডারের মধ্যে থাকা App.jsx এ গিয়ে div এর
          মধ্যে থাকা সকল কোড ডিলিট করে সেখানে নিচের কোডটি লিখবো।
        </p>{" "}
        <br />
        <SyntaxHighlighter language="javascript" style={twilight}>
          {`
            <div className="App">
            <h1>Hello World</h1>
            </div>; 
            `}
        </SyntaxHighlighter>
        <p>সেইভ করলে দেখবো আমাদের নিচের পেইজটি দেখাবে।</p>
        <div className="blogImage">
          <img
            src="/assets/images/installation-second.avif"
            alt="hellow world window"
          />
        </div>
        <p>
          আমরা যখন প্রজেক্ট তৈরি করবো তখন অনেক কিছু থাকবে সেখানে। আমরা src
          ফোল্ডারের মধ্যে শুধু main.jsx এই ফাইলটি রেখে বাকি সব ডিলিট করে দিবো।
          সেগুলো আমাদের দরকার নেই। আমরা আমাদের মতো করে অ্যাপ্লিকেশন তৈরি করবো।
        </p>
        <p>
          আপনারা ব্রাউজারে গেলে নিচের ছবির মতো উইন্ডো দেখতে পাবেন। ভয় পাওয়ার
          কিছু নেই। আমরা ফাইলগুলো ডিলিট করে দেয়ায় এরকম ব্রোকেন দেখাচ্ছে। তা আমরা
          ফিক্স করবো।
        </p>
        <div className="blogImage">
          <img
            src="/assets/images/installation-third.avif"
            alt="error in console"
          />
        </div>
        <p>
          আমরা আমাদের main.jsx ফাইলকে টাচই করবো না। এটা হচ্ছে একটা রিয়্যাক্ট
          অ্যাপ্লিকেশনের জন্য বুট ফাইল। বুট ফাইল মানে হচ্ছে যখন রিয়্যাক্ট
          অ্যাপ্লিকেশন রান শুরু হবে তখন সবার প্রথমে এই ফাইল রান হবে। এটা নাম
          vite এর main.jsx, create-react-app এ index.js। যে নামেই থাকুক মোটকথা
          আমরা এটাতে হাতই লাগাবো না।
        </p>
        <p>
          আমরা করতে পারি আমাদের src ফোল্ডারে গিয়ে App.jsx নামে একটা ফাইল ক্রিয়েট
          করতে পারি। এখন jsx এবং js এক্সটেনশন কখন ব্যবহার করবো? যখন আমাদের কোনো
          ফাইলে রিয়্যাক্টের কোনো কাজ থাকবে না, জাস্ট জাভাস্ক্রিপ্ট কোড লিখবো
          সেক্ষেত্রে js এক্সটেনশন ব্যবহার করবো। আর যখন আমরা কোনো রিয়্যাক্ট
          কম্পোনেন্ট বানাবো তখন আমরা jsx ব্যবহার করবো।
                                       </p>
      </div>
    </div>
  );
};

export default Installation;
