import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import "../styles/Style.css";

const ComponentShort = () => {
  return (
    <div className="blog">
      <h1 className="headline">রিঅ্যাক্ট ব্যাসিকসঃ কম্পোনেন্ট (সংক্ষেপ)</h1>
      <hr className="hrline" />
      <div className="blogTopImage">
        <img
          src="/assets/images/ReactJS-Component-State-new16.jpg"
          alt="component"
        />
      </div>
      <div className="blogContent">
        <h3 className="subHeadline">React Components</h3>
        <hr className="hrline" />
        <p>
          রিয়্যাক্টের দুই ধরণের কম্পোনেন্ট আছে। ক্লাস বেইজড কম্পোনেন্ট এবং
          ফাংশনাল কম্পোনেন্ট। ক্লাস বেইজড কম্পোনেন্ট ওল্ড। ফাংশনাল কম্পোনেন্টই
          এখন ব্যবহার করা হয়। কিন্তু ভবিষ্যতে আমাদের ক্লাস বেইজড কম্পোনেন্টও
          শিখতে হবে যখন পুরোনো অ্যাপ্লিকেশন নিয়ে কাজ করবো, এছাড়াও রিয়্যাক্টের
          কিছু কিছু কাজ আছে যার জন্য আমাদের ক্লাস বেইজড কম্পোনেন্ট লাগবে। সেটা
          আমরা তখন দেখবো। আপাতত আমাদের ফোকাস থাকবে ফাংশনাল কম্পোনেন্টের উপর।
        </p>
        <h3 className="subHeadline">Functional Component</h3>
        <hr className="hrline" />
        <p>
          এখন ফাংশনাল কম্পোনেন্ট কি জিনিস?{" "}
          <code className="inlineCode">
            A function that return a JSX, is a functional component in react
          </code>{" "}
          অর্থাৎ রিয়্যাক্টে যে ফাংশন একটা JSX রিটার্ন করে তাকে বলে ফাংশনাল
          কম্পোনেন্ট। যেমন -
        </p>
        <br />
        <SyntaxHighlighter language="javascript">
          {`
                function App() {
                return
                }`}
        </SyntaxHighlighter>

        <p>
          অর্থাৎ যতক্ষণ সে JSX রিটার্ন করছে না ততক্ষণ সে নরমাল একটা ফাংশন। যে
          মুহূর্তেই সে JSX রিটার্ন করলো সে তখন ফাংশনাল কম্পোনেন্ট।
        </p>
        <h3 className="subHeadline">
          Conditions to become a functional component
        </h3>
        <hr className="hrline" />
        <p>
          ফাংশনাল কম্পোনেন্ট বানাতে গেলে আমাদের কিছু জিনিস মাথায় রাখতে হবে।
          সেগুলো হলো -
        </p>
        <ol className="ordreList">
          <li>Name must be capital</li>
          <li>Must return a piece of HTML (JSX)</li>
          <li>
            It always accepts an Object as an argument - একটা ফাংশনাল
            কম্পোনেন্টের একটাই আর্গুমেন্ট থাকতে পারবে। একাধিক আর্গুমেন্ট ব্যবহার
            করা যাবে না। এবং সেই আর্গুমেন্ট অবশ্যই অবশ্যই একটা অবজেক্ট হতে হবে।
          </li>
          <li>
            We can’t call or invoke this function - আমরা কখনও App() লিখে এভাবে
            এই ফাংশনকে কল করতে পারবো না। এই ফাংশন কল করার দায়িত্ব আমাদের না। এর
            দায়িত্ব রিয়্যাক্টের। আমরা শুধুমাত্র একে এইচটিএমএল ট্যাগ হিসেবে
            ব্যবহার করবো।
          </li>
          <li>We have to use the function as an html tag</li>
        </ol>
        <h3 className="subHeadline">Export the App function</h3>
        <hr className="hrline" />
        <p>
          আমরা এবার আমাদের App ফাংশনকে এক্সপোর্ট করবো। কারণ এক্সপোর্ট না করলে
          মেইন ফাইল এই ফাইলকে পাবে না।
        </p>
        <br />
        <SyntaxHighlighter language="javascript">
          {`
          function App() {
                return <h1>Hello World</h1>;
            }

            export default App;
            `}
        </SyntaxHighlighter>
        <p>
          এবার যদি আমাদের ব্রাউজারে গিয়ে দেখি দেখবো সেই বিশাল এরর আর নেই এখনা
          আমরা অ্যাপ ফাইলে যা লিখেছি সেই <b>Hello World</b> শো করছে।
        </p>
        <div className="blogImage">
          <img
            src="/assets/images/component-helloWorld.avif"
            alt="component hello world"
          />
        </div>
        <h3 className="subHeadline">Working with main.jsx</h3>
        <hr className="hrline" />
        <p>আমরা যদি আমাদের মেইন ফাইলের কোডগুলো দেখি দেখবো সেখানে আছে এরকম -</p>
        <br />
        <SyntaxHighlighter language="javascript">
          {`
          import React from 'react';
            import ReactDOM from 'react-dom/client';
            import App from './App';

            ReactDOM.createRoot(document.getElementById('root')).render(
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            );
            `}
        </SyntaxHighlighter>
        <p>
          দেখুন এখানে App একটা সেলফ ক্লোজিং ট্যাগ হিসেবে লেখা হয়েছে। কল করা
          হয়নি। এখানে <code className="inlineCode">React.StrictMode</code> আমরা
          যখন ডেভেলপমেন্ট অবস্থায় থাকবো আমাদেরকে বিভিন্ন সমস্যা করবে। যেমন আমরা
          যদি App ফাইলে গিয়ে ফাংশনের ভিতর{" "}
          <code className="inlineCode"> console.log(‘Hello’) </code> লিখি দেখবো
          ব্রাউজারের কনসোলে দুইবার রান হচ্ছে। একবার ডেভ টুল থেকে পাচ্ছে, আরেকবার
          অ্যাপ্লিকেশন থেকে। আমরা নিচের ইমেজটা খেয়াল করলে বুঝতে পারবো।
        </p>
        <div className="blogImage">
          <img
            src="/assets/images/component-console-error.avif"
            alt="component hello world"
          />
        </div>
        <p>
          এই অযাচিত সমস্যা থেকে মুক্তি পাওয়ার জন্য আমরা নিচের মতো করে মেইন
          ফাইলকে রিফ্র্যাক্টর করবো। আমরা React.StrictMode রাখবো কারণ প্রোডাকশনে
          আমাদের এটা দরকার হবে।
        </p>
        <br />
        <SyntaxHighlighter language="javascript">
          {`
            import React from 'react';
            import ReactDOM from 'react-dom/client';
            import App from './App';

            // ReactDOM.createRoot(document.getElementById('root')).render(
            //     <React.StrictMode>
            //         <App />
            //     </React.StrictMode>
            // );

            ReactDOM.createRoot(document.getElementById('root')).render(<App />);
            `}
        </SyntaxHighlighter>
        <p>এবার যদি ব্রাউজারের কনসোলে যাই দেখবো আমাদের সমস্যাটা আর নেই। অর্থাৎ একবারই প্রিন্ট হচ্ছে।</p>
        <hr className="hrline" />
        <p>
            কম্পোনেন্ট সম্পর্কে আরো বিস্তারিত জানতে <a href="/component-long">এখানে ক্লিক</a> করুন।
        </p>
        <p>
            এছাড়াও <b>প্রপ্স</b> অধ্যায়ে <b><a href="/props">Working with Components and Props</a></b> দেখুন
        </p>
      </div>
    </div>
  );
};

export default ComponentShort;
