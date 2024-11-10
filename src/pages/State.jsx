import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const State = () => {
  return (
    <div className="blog">
      <h1 className="headline">রিয়েক্ট জে.এস এ (State) স্টেট কি, কেনো?</h1>
      <hr className="hrline" />
      <div className="blogTopImage">
        <img src="/assets/images/state-main.webp" alt="props" />
      </div>
      <div className="blogContent">
        <p>
          <b>ReactJS</b> এর সব থেকে গুরুত্বপূর্ণ এবং অদ্ভুত বিষয় হচ্ছে{" "}
          <b>State</b>, দেখতে ক্লাস প্রোপার্টি এর মত। সাধারণ একটা
          জাভাস্ক্রিপ্টের অবজেক্ট। কিন্তু এর ভিতরে কিছু ম্যাজিক্যাল পাওয়ার
          রয়েছে।
        </p>
        <p>
          আমরা জানি ReactJS এ সব কিছু করতে হয় ডাটা এর ওপরে ভিত্তি করে। ডাটা থেকে
          ভিউ জেনেরেট করতে হয়, কোন ভাবে যদি ডাটাটা পরিবর্তন করা যায় তাহলে ভিউটা
          নিজে থেকেই আপডেট হয়ে যায়। কিন্তু সাধারণ ভাবে আমরা যদি কোন ভ্যারিয়েবল
          এর ভিতরে ডাটাটা রাখি তাহলে ডাটা পরিবর্তিত হলেও ভিউ পরিবর্তন হবে না।
          একটা special ভ্যারিয়েবলের ভিতরেই ডাটাটা রাখতে হবে। আর সেই special
          ভ্যারিয়েবল বা ক্লাস প্রোপার্টি হচ্ছে <b>State</b>.
        </p>
        <p>
          React এর <b>State</b> কিভাবে কাজ করে? 
        </p>
        <p>
          React এ <b>State</b> একটা immutable object, একটা নির্দিষ্ট ফাংশন কল
          করার মাধ্যমেই আমরা <b>State</b> কে পরিবর্তন করতে পারি। সেই ফাংশনটার
          নাম হচ্ছে set<b>State</b>। এই ফাংশন কল করার মাধ্যমে আমরা যখন কোন{" "}
          <b>State</b> পরিবর্তন করি তখন React আবার render মেথডকে কল করে এবং কল
          করার সময় <b>State</b> এর নতুন ডাটাটা পাঠিয়ে দেই। render মেথড কল হওয়ার
          ফলে JSX গুলো আবার রেন্ডার হয় ব্রাউজারে। এভাবেই মূলত <b>State</b>{" "}
          পরিবর্তনের কারণে আমরা নতুন ভিউ দেখতে পাই। কিন্তু অন্য কোন ভ্যারিয়েবল
          বা ক্লাস প্রোপার্টি পরিবর্তন হলে React render মেথড কে রিকল করে না। তাই
          ভ্যারিয়েবলের ভ্যালূ পরিবর্তিত হলেও ভিউ আগেরটাই থেকে যায়।
        </p>
        <p>
          <b>State</b> কিভাবে ডিফাইন করতে হয়?
        </p>
        <p>
          <b>State</b> আর দশটা ক্লাস প্রোপার্টির মতই একটা প্রোপার্টি যা আগে
          থেকেই ডিফাইন করা আছে Component ক্লাসের ভিতরে। তাই <b>State</b> ডিফাইন
          করার জন্য special কোন মেথড বা সিনট্যাক্স এর দরকার নেই। একটা সাধারণ
          প্রোপার্টি যে ভাবে ডিফাইন করতে হয়, ঠিক একই ভাবে আমরা <b>State</b> ও
          ডিফাইন করতে পারি। React এর পুরাতন ভার্সন গুলোতে <b>State</b> ডিফাইন
          করতে হত কন্সট্রাক্টরের ভিতরে। নতুন ভার্সনে আমরা ক্লাসের যে কোন জায়গায়
          ভ্যারিয়েবল ডিফাইন করার মত করে
          <b>State</b> ডিফাইন করতে পারি।
        </p>
        <p>
          <b>State</b> কিভাবে আপডেট করতে হয়?
        </p>
        <p>
          <b>State</b> আপডেট করতে হয় Immutable ভাবে, যদিও <b>State </b> দেখতে
          জাভাস্ক্রিপ্টের সাধারণ অবজেক্টের মত, তারপরেও আমরা সাধারণ অবজেক্টের মত
          করে <b>State </b>
          পরিবর্তন করতে পারব না। যদি আমরা সেটা করি তাহলে আমাদের কম্পাইলার কোন
          ইরর থ্রো করবে না। তবে তখন <b>State </b> সাধারণ অবজেক্ট এর মত ব্যবহার
          করবে। অর্থাৎ ভ্যালু পরিবর্তন হলেও ভিউ পরিবর্তিত হবে না।
        </p>

        <SyntaxHighlighter language="javascript" style={darcula}>
          {`import React, { useState } from 'react';

            const MyComponent = () => {
            const [count, setCount] = useState(0);

            const increment = () => {
                setCount(count + 1);
            };

            return (
                <div>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
                </div>
            );
            };

            export default MyComponent;
`}
        </SyntaxHighlighter> 

        <p>
          <b>State </b> পরিবর্তন করার জন্য React আমাদেরকে{" "}
          <b>
            <b> setState</b>
          </b>{" "}
          ফাংশন দিয়েছে। এই
          <b> setState </b> ফাংশনটা একটা Asynchronous ফাংশন। এই ফাংশন এ আমরা
          দুইটা আর্গুমেন্ট পাস করতে পারি।
        </p>
        <p>
          প্রথম আর্গুমেন্ট হিসেবে আমরা একটা অবজেক্ট পাস করতে পারি, যেই অবজেক্টটা
          তে স্টেটের আপডেটেড ভ্যালু থাকবে। অথবা আমরা একটা Annonymous ফাংশন পাস
          করতে পারি, যেই ফাংশন আপডেটেড অবজেক্টটা রিটার্ন করবে। দুই ক্ষেত্রেই
          আমরা অবজেক্ট এর ভিতরে শুধু সেই প্রোপার্টি গুলোকেই রাখব যেগুলো আপডেট
          করতে চাচ্ছি। <b> State </b> এ যদি আরও বেশি প্রোপার্টি থাকে তাহলেও
          আমাদের এক্সট্রা প্রোপার্টি পাস করতে হবে না। React আমাদের জন্য অন্য
          প্রোপার্টি গুলোর ভ্যালু অপরিবর্তিত রাখবে।
        </p>
        <p>
          দ্বিতীয় আর্গুমেন্ট আকারে আমরা একটা অপশনাল ফাংশন পাস করতে পারি। যেহেতু
          <b> setState</b> মেথডটা Asynchronous তাই অনেক সময় আমরা আমাদের কাংখিত
          রেসাল্ট দেখতে পাব না। অনেক সময় আমরা Previous <b>State </b> টাই
          রেসাল্টে পাব। যদি এমন কোন কিছু দরকার হয় যে, <b>State </b> আপডেট হওয়ার
          পরেই কোন একটা কাজ করতে হবে সেই কাজটা করার জন্য বেস্ট জায়গা হচ্ছে এই
          ফাংশনটা।
        </p>
        
        <SyntaxHighlighter language="javascript" style={darcula}>
          {`
          import React, { Component, useState } from 'react';

            // Class Component
            class CounterClass extends Component {
            constructor(props) {
                super(props);
                this.state = {
                count: 0,
                };
            }

            increment = () => {
                this.setState({ count: this.state.count + 1 });
            };

            render() {
                return (
                <div>
                    <p>Count: {this.state.count}</p>
                    <button onClick={this.increment}>Increment</button>
                </div>
                );
            }
            }

            // Functional Component with Hook
            const CounterFunction = () => {
            const [count, setCount] = useState(0);

            const increment = () => {
                setCount(count + 1);
            };

            return (
                <div>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
                </div>
            );
            };
`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default State;
