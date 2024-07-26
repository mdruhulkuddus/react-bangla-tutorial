import React from "react";
import "../styles/Style.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Props = () => {
  const codeString = `
                function App(props) {
                  console.log(props);
                  return (
                      <div>
                          <ul>
                              <li>
                              <input type="checkbox" />
                              <span>Checkbox 1</span>
                              </li>
                          </ul>
                      </div>
                  );
                }

                export default App;
`;

  return (
    <div className="blog">
      <h1 className="headline">রিঅ্যাক্ট ব্যাসিকসঃ প্রপ্স (Props)</h1>
      <hr className="hrline" />
      <div className="blogTopImage">
        <img src="/assets/images/props-main.png" alt="props" />
      </div>
      <div className="blogContent">
        <p>
          <b>Props - </b> stands for properties.
        </p>
        <p>
          <b>প্রপ্স</b> হলো আরগুমেন্টস যা HTML attributes এর মাধ্যমে রিয়্যাক্ট
          কম্পোনেন্টের মধ্যে পাঠানো হয়। রিয়েক্ট কম্পোনেন্টগুলো Props ব্যবহার করে
          একে অপরের সাথে কমুনিকেট করে। React এ props এর মাধ্যমে যেকোনো ধরনের
          জাভাস্ক্রিপ্ট ভ্যালু, যেমন- অ্যারে, অবজেক্ট, ফাংশন ইত্যাদি পাস করতে
          পারি।
        </p>
        <p>
          এভাবেও বলা যায়। প্রপ্স হচ্ছে একটা খালি অবজেক্ট। যদি প্রপ্স আকারে কিছু
          না থাকে তাহলে সে একটা খালি অবজেক্ট রিটার্ন করবে। আর প্রপ্স পাওয়া যাবে
          আমরা কম্পোনেন্ট যেখানে ব্যবহার করবো সেখান থেকে। সোজা কথায়, সেখানে
          attributes আকারে যা যা লিখবো সেগুলো প্রপ্স।{" "}
        </p>
        <p>
          উদাহরণ হিসেবে, নিচে একটি কম্পোনেন্টে বিভিন্ন ধরনের ডেটা props হিসেবে
          পাস করার উদাহরণ দেয়া হলো:{" "}
        </p>

        <SyntaxHighlighter language="javascript" style={darcula}>
          {`
         import React from 'react';

// Child Component
const ChildComponent = ({ arrayProp, objectProp, functionProp }) => {
  return (
    <div>
      <h2>Array Prop: {arrayProp.join(', ')}</h2>
      <h2>Object Prop: {objectProp.name}</h2>
      <button onClick={functionProp}>Click Me</button>
    </div>
  );
};

// Parent Component
const ParentComponent = () => {
  const myArray = [1, 2, 3];
  const myObject = { name: 'React' };
  const myFunction = () => {
    alert('Button Clicked!');
  };

  return (
    <ChildComponent 
      arrayProp={myArray} 
      objectProp={myObject} 
      functionProp={myFunction} 
    />
  );
};

export default ParentComponent;

            `}
        </SyntaxHighlighter>
        <p>
          এই উদাহরণে, ParentComponent থেকে ChildComponent এ একটি অ্যারে
          (myArray), একটি অবজেক্ট (myObject), এবং একটি ফাংশন (myFunction) props
          হিসেবে পাস করা হয়েছে।
        </p>
        <br />
        <h2>Working with Components and Props</h2>
        <hr className="hrline" />
        <p>
          এবার আমরা কিছু একটা বানানর চেষ্টা করি। ধরি আমরা একটা লিস্ট বানাবো। যার
          প্রথমে থাকবে একটা চেকবক্স, এরপর একটা টেক্সট। তাহলে আমরা সেটাকে বানাতে
          পারি নিচের মতো কোড লিখে।
        </p>
        <SyntaxHighlighter language="javascript" style={darcula}>
          {codeString}
        </SyntaxHighlighter>
        <p>এবার যদি ব্রাউজারে আমরা আউটপুট দেখি নিচের মতো আউটপুট পাবো।</p>
        <div className="blogSmallImage">
          <img src="/assets/images/props-img-1.png" alt="props img" />
        </div>
        <p>
          কিন্তু আমরা একটা চেকবক্স চাই না। আমরা চাই ছয়টা। তাহলে আমরা li ট্যাগকে
          ছয়বার কপি করে পেস্ট করে দিলেই হয়ে গেলো।
        </p>
        <SyntaxHighlighter language="javascript" style={darcula}>
          {`
          function App(props) {
    console.log(props);
    return (
        <div>
            <ul>
                <li>
                    <input type="checkbox" />
                    <span>Checkbox 1</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>Checkbox 1</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>Checkbox 1</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>Checkbox 1</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>Checkbox 1</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span>Checkbox 1</span>
                </li>
            </ul>
        </div>
    );
}

export default App;

          `}
        </SyntaxHighlighter>
        <p>ব্রাউজারে গেলে দেখতে পাবো আমরা ছয়টা চেকবক্স পেয়ে গেছি।</p>
        <div className="blogSmallImage">
          <img src="/assets/images/props-img-2.png" alt="props img" />
        </div>
        <p>
          কিন্তু এভাবে কপি করেই যদি আমরা করি তাহলে তো আমরা এইচটিএমএল দিয়েই করতে
          পারতাম। কেন আমাদের রিয়্যাক্টে আসতে হলো? রিয়্যাক্ট ডেভেলপার হিসেবে
          আমাদের কাজ হলো যে জায়গায় কোড ডুপ্লিকেট হচ্ছে সেখানেই একটা কম্পোনেন্ট
          বানিয়ে ফেলা। এখানে আমরা দেখছি li ট্যাগ বারবার ডুপ্লিকেট হচ্ছে। সুতরাং
          আমরা এটার জন্য একটা কম্পোনেন্ট বানিয়ে ফেলি। আপনারা জানেন সাধারণত
          কম্পোনেন্ট আলাদা ফাইলে বানানো হয়। আমরা এখানে এক ফাইলেই বুঝার
          সুবিধার্থে বানিয়ে ফেলি।
        </p>
        <SyntaxHighlighter language="javascript" style={darcula}>
          {`
const ListItem = () => (
    <li>
        <input type="checkbox" />
        <span>Checkbox 1</span>
    </li>
);

           `}
        </SyntaxHighlighter>
        <p>
          এবার আমরা এই কম্পোনেন্টকে আমাদের অ্যাপ ফাংশনে ছয়বার ট্যাগ আকারে লিখে
          ফেলি।
        </p>
        <SyntaxHighlighter language="javascript" style={darcula}>
          {`
function App() {
    return (
        <div>
            <ul>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </ul>
        </div>
    );
}


           `}
        </SyntaxHighlighter>
        <p>
          ব্রাউজারে গেলে আমরা ঠিক আগের আউটপুটই দেখবো। এখন প্রশ্ন আসতে পারে যে কি
          এমন সুবিধা আমরা পেতে পারি কম্পোনেন্ট বানিয়ে? ধরেন আমরা একটা ডিলিট বাটন
          যুক্ত করতে চাইছি। আমাদেরকে সেটা ছয়বার আলাদা আলাদাভাবে যুক্ত করতে হবে
          না। আমরা শুধু আমাদের কম্পোনেন্টে যুক্ত করবো সেটা সবগুলোর সাথে যুক্ত
          হয়ে যাবে। যেমন -
        </p>
        <SyntaxHighlighter language="javascript" style={darcula}>
          {`
const ListItem = () => (
    <li>
        <input type="checkbox" />
        <span>Checkbox 1</span>
        <button>Delete</button>
    </li>
);

           `}
        </SyntaxHighlighter>
        <p>দেখুন সবগুলোর সাথে একটা করে ডিলিট বাটন যুক্ত হয়ে গেছে।</p>
        <div className="blogSmallImage">
          <img src="/assets/images/props-img-3.png" alt="props img" />
        </div>
        <p>
          আমরা চাইলে স্টাইলও করতে পারি। সেক্ষেত্রে শুধু আমরা আমাদের কম্পোনেন্ট
          ফাংশনে স্টাইল যুক্ত করবো তা সবগুলোতে পেয়ে যাবে।
        </p>
        <SyntaxHighlighter language="javascript" style={darcula}>
          {`
const ListItem = () => (
    <li
        style={{
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <input type="checkbox" />
        <p>Checkbox 1</p>
        <button style={{ 'margin-left': 'auto' }}>Delete</button>
    </li>
);


           `}
        </SyntaxHighlighter>
        <div className="blogSmallImage">
          <img src="/assets/images/props-img-4.png" alt="props img" />
        </div>
        <p>এই গেলো আমাদের কম্পোনেন্ট তৈরি করার মূল উদ্দেশ্য।</p>
        <p>
          কিন্তু এখানে একটা সমস্যা আছে। সমস্যাটা হলো এখানে সব টেক্সট একইরকম।
          কিন্তু আমাদের তো ভিন্ন ভিন্ন টেক্সটও থাকতে পারে। সেক্ষেত্রে সল্যুশন
          হলো প্রপ্স ব্যবহার করা।
        </p>
        <br />
        <h2>Solving with Props</h2>
        <hr className="hrline" />
        <p>
          আমরা p ট্যাগের ভিতরে যে টেক্সটটা লিখেছিলাম সেটা আর এখন লিখবো। তার
          জায়গায় আমরা প্রপ্স পাস করে দিবো। চলুন সেটা কিভাবে লিখতে পারি দেখি -
        </p>
        <SyntaxHighlighter language="javascript" style={darcula}>
          {`
const ListItem = (props) => (
    <li
        style={{
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
        }}
    >
        <input type="checkbox" />
        <p>{props.title}</p>
        <button style={{ 'margin-left': 'auto' }}>Delete</button>
    </li>
);
           `}
        </SyntaxHighlighter>
        <p>
          আমরা ফাংশনের আর্গুমেন্ট আকারে দিয়েছি props এবং p ট্যাগের ভিতরে {} দিয়ে
          এর ভিতর লিখেছি props.title। এবার আমরা যদি আমাদের ব্রাউজারে যায় সেখানে
          কিছুই দেখতে পাবো না টেক্সটের জায়গায়।
        </p>
        <div className="blogSmallImage">
          <img src="/assets/images/props-img-5.png" alt="props img" />
        </div>
        <p>
          কারণ আমরা যেখানে এই কম্পোনেন্ট ফাংশন কল করেছি সেখানে অ্যাট্রিবিউট
          আকারে title দিয়ে দিইনি।
        </p>
        <p>
          {" "}
          এবার যদি আমদের অ্যাপ ফাংশনের প্রথম লিস্ট আইটেম ট্যাগের ভিতর
          অ্যাট্রিবিউট দিই{" "}
          <code className="inlineCode">
            &lt;ListItem title="Checkbox 1" /&gt;
          </code>{" "}
          এভাবে দেখবো আমাদের প্রথমটাতে লেখা শো করছে, কিন্তু বাকিগুলোতে করছে না।
          এবার একে একে বাকি সবগুলোতে যদি আমরা title দিয়ে দিই তাহলে আমরা দেখবো
          সবগুলোতে টেক্সট অ্যাড হয়ে গেছে।
        </p>
        <SyntaxHighlighter language="javascript" style={darcula}>
          {`
function App() {
    return (
        <div>
            <ul>
                <ListItem title="Checkbox 1" />
                <ListItem title="Checkbox 2" />
                <ListItem title="Checkbox 3" />
                <ListItem title="Checkbox 4" />
                <ListItem title="Checkbox 5" />
                <ListItem title="Checkbox 6" />
            </ul>
        </div>
    );
}

           `}
        </SyntaxHighlighter>
        <div className="blogSmallImage">
          <img src="/assets/images/props-img-6.png" alt="props img" />
        </div>
      </div>
    </div>
  );
};

export default Props;
