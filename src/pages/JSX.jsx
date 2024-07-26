import React from "react";
import "../styles/Style.css";

const JSX = () => {
  return (
    <div className="blog">
      <h1 className="headline">রিঅ্যাক্ট ব্যাসিকসঃ জেএসএক্স (JSX)</h1>
      <hr className="hrline" />
      <div className="blogTopImage">
        <img src="/assets/images/jsx-main.png" alt="component" style={{height:"auto"}} />
      </div>
      <div className="blogContent">
        <p>
          <b>JSX - </b> JavaScript XML.
        </p>
        <p>রিঅ্যাক্ট এর প্রোজেক্ট এ আপনি এই টাইপ এর কোড অহরহ দেখবেনঃ</p>
        <pre className="codeBlock">
          <code>
            {`
          <h1>Hello World!</h1>
            `}
          </code>
        </pre>
        <p>
          এটাকেই আসলে জেএসএক্স বলে। জেএসএক্স সিনট্যাক্স দেখতে অনেকটা এইচটিএমএল (
          HTML) এর মতো। কিন্তু এটা এইচটিএমএলও না আবার জাভস্ক্রিপ্ট এর স্ট্রিংও
          না। বরং এটা জাভাস্ক্রিপ্ট এরই সিনট্যাক্স এক্সটেনশন। JSX আমাদের
          JavaScript এর ভিতর HTML লেখার সুযোগ করে দেয় । রিয়্যাক্ট-এ একটি ফাইলে
          (Component) আমারা মার্কাপ ও লজিক খুব সুন্দরভাবে লিখতে পারি JSX বদৌলতে
          । তাহলে JSX আমাদের createElement() অথবা appendChild() এই মেথডগুলা
          ছাড়াই DOM-এ HTML elements প্লেস করতে দিচ্ছে । JSX এইচটিএমএল ট্যাগকে
          react elements কনর্ভাট করে ।
        </p>

        <p>
          আমরা ব্যাবেল এর অনলাইন কম্পাইলার ইউজ করে জেএসএক্স কে ভিতর থেকে দেখবো।
        </p>
        <div className="blogImage">
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*x0lidwGjpBjwsWV5zOgq-A.png"
            alt="jsx"
          />
        </div>
        <p>
          দেখুন একটা নরমাল এইচটিএমএল কোড এর মতো দেখতে কোড কতো কমপ্লেক্স দেখা
          যাচ্ছে। আপনি এই কমপ্লেক্স ভার্শনও ইউজ করতে পারবেন আপনার রিঅ্যাক্ট
          অ্যাপ এ। কিন্তু এতো সাজানো গোছানো সিনট্যাক্স থাকতে এতো কমপ্লেক্স
          সিনট্যাক্স কে ইউজ করবে বলেন? আর তাই জেএসএক্স ইউজ করাটাই বুদ্ধিমানের
          কাজ। এখন জেএসএক্স এর মেইন কাজ হচ্ছে রিঅ্যাক্ট এর ইলিমেন্ট তৈরি করা।
        </p>
        <p>
          জেএসএক্স এইচটিএমএলের মতো হলেও এটার বেশ ভলো কিছু ফাংশানালিটি আছে। যেমন
          আমরা চাইলে জেএসএক্স এর ভিতরে জাভাস্ক্রিপ্ট এর ভ্যারিয়েবলও ইন্সার্ট
          করতে পারিঃ
        </p>
        <pre className="codeBlock">
          <code>
            {`
            import React from "react";
            import ReactDOM from "react-dom";
            const variable = "Zonayed Ahmed";
            ReactDOM.render(<h1>My Name is {variable}</h1>,document.getElementById("root"));
            `}
          </code>
        </pre>
        <p>
          এখনি আপনাকে জানতে হবে না এই কোড কিভাবে কাজ করছে, শুধু এটুকু জানুন
          এভাবে জেএসএক্স এ ভ্যারিয়েবল নিয়েও কাজ করা যায়। একইরকম ভাবে ফাংশনও কল
          করতে পারবেনঃ
        </p>

        <pre className="codeBlock">
          <code>
            {`
           import React from "react";
                import ReactDOM from "react-dom";
                const aFunc = () => {
                return "Zonayed Ahmed";
                };
                ReactDOM.render(<h1>My Name is {aFunc()}</h1>, document.getElementById("root"));
            `}
          </code>
        </pre>
        <p>
          আসলে এভাবে যেকোনো জাভাস্ক্রিপ্ট এক্সপ্রেশনকে লিখতে পারবেন জেএসএক্স এর
          ভিতরেঃ
        </p>
        <pre className="codeBlock">
          <code>
            {`
          import React from "react";
        import ReactDOM from "react-dom";
        ReactDOM.render(<h1>My Name is {true ? 'Zonayed Ahmed' : 'Ahmed Zonayed'}</h1>, document.getElementById("root"));
                    `}
          </code>
        </pre>
        <p>
          জেএসএক্স এ আপনি এইচটিএমএলের মতো করে এভাবে অ্যাট্রিবিউটও নিতে পারবেন।
          অ্যাট্রিবিউটের মতো দেখতে হলেও এটাকে মূলত প্রপস বলা হয়।প্রপস দিয়ে
          রিঅ্যাক্ট এ অন্যরকমের কাজ করা হয় যেগুলো আমরা আস্তে আস্তে দেখবো। তবে
          এপনি এভাবে অ্যাট্রিবিউট(এর মতো জিনিস)ও নিতে পারবেনঃ
        </p>
        <pre className="codeBlock">
          <code>
            {`
         <h1 anyName="anyvalue">Hello World!</h1>
                    `}
          </code>
        </pre>
        <p>
          এখন জেএসএক্স কে একটা ভ্যারিয়েবলের ভিতরেও ঢুকিয়ে রাখতে পারবেন এবং
          পরবর্তিতে আপনি যেখানে ইচ্ছা এই ভ্যারিয়েবলকে কল করে জেএসএক্সটাকে কাজে
          লাগাতে পারবেনঃ
        </p>
        <pre className="codeBlock">
          <code>
            {`
        const jsxVar = <h1>Hello World!</h1>;
                    `}
          </code>
        </pre>
        <p>
          একটা জেএসএক্স ভিতরে আরো অনেকগুলো জেএসএক্স চাইল্ড ইলিমেন্টও থাকতে
          পারবেঃ
        </p>
        <pre className="codeBlock">
          <code>
            {`
                <h1>
            Hello World! How are <span>you?</span>
            <span>My age is 21 years old!</span>
            </h1>
                    `}
          </code>
        </pre>
        <p>
          এটা ঠিক এইচটিএমএল এর মতোই। শেষের ট্যাগ এ আপনার ক্লোজিং ব্র‍্যাকেট দিতে
          হবে। সেইমভাবে আপনি মাত্র একটা জেএসএক্স ইলিমেন্টকেই ভ্যারিয়েবল এ স্টোর
          করতে পারবেন। এখন সেই ইলিমেন্ট এর ভিতরে যত ইচ্ছা চাইল্ড থাকতে পারবে।
          কিন্তু পুরোটা একটা ইলিমেন্টই হবেঃ
        </p>

        <p>সঠিকঃ</p>
        <pre className="codeBlock">
          <code>
            {`
               <div>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            </div>
                    `}
          </code>
        </pre>
        <p>ভুলঃ</p>
        <pre className="codeBlock">
          <code>
            {`
               <h1>Hello CodeSandbox</h1>
                <div>
                <h2>Start editing to see some magic happen!</h2>
                </div>
                    `}
          </code>
        </pre>
        <p>
          সেইমভাবে কোনো জেএসএক্স ইলিমেন্ট রিটার্ণ করতে চাইলে মাত্র একটা
          প্যারেন্ট ইলিমেন্টই রিটার্ণ করতে পারবেন। চাইল্ড যতোই থাকুক সমস্যা নাইঃ
        </p>
        <pre className="codeBlock">
          <code>
            {`
          return (<div>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            </div>);
                    `}
          </code>
        </pre>
        <p>
          জেএসএক্স এইচটিএমএল এর মতো দেখা গেলেও এখানে আরো কিছু ট্রিক্স আছে। যদি
          আপনার জেএসএক্স এর কোনো চাইল্ড ইলিমেন্ট বা ভিতরে কিছু না থাকে তাহলে
          সেল্ফ ক্লোজিং ট্যাগ ইউজ করতে হবেঃ
        </p>
        <pre className="codeBlock">
          <code>
            {`
    <img src="..." />
    <input ... />
                    `}
          </code>
        </pre>
        <p>আমরা ব্যাবেলে জেএসএক্স দেখার পর এমনকিছু দেখেছিলামঃ</p>
        <pre className="codeBlock">
          <code>
            {`
            React.createElement(
            "h1",
            null,
            "Hello World!"  
                );
                    `}
          </code>
        </pre>
        <p>এখানে React.createElement পিছনে একটা অবজেক্ট তৈরি করে ঠিক এভাবেঃ</p>
        <pre className="codeBlock">
          <code>
            {`
            const element = {
            type: 'h1',
            props: {
                className: null,
                children: 'Hello, world!'
            }
            };
                    
                    `}
          </code>
        </pre>
        <p>এখান থেকেই পরিষ্কারভাবে দেখা যাচ্ছে এটাও একটা অব্জেক্ট।</p>
        <p>
          আশা করি জেএসএক্স নিয়ে কাজ করার জন্যে এখন আপনি প্রস্তুত। এখানে কিছু না
          বুঝলেও পরে আবার রিভিও করবেন এখানে এসে তাহলে ধরতে পারবেন কোনটা কি আর
          কেনোই বা এমনভাবে ইউজ করা হয়েছে।
        </p>
      </div>
    </div>
  );
};

export default JSX;
