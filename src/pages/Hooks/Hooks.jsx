import React from "react";
import "../../styles/Style.css";
import { Link } from "react-router-dom";

const Hooks = () => {
  return (
    <div className="blog">
      <h1 className="headline">Hooks এর সাথে পরিচিতি</h1>
      <hr className="hrline" />
      <div className="blogTopImage">
        <img src="/assets/images/hooks.png" alt="hooks" style={{height:'40vh'}} />
      </div>
      <div className="blogContent">
        <p>React এর ডকুমেন্টেশন থেকে আমরা জানতে পারি hooks হচ্ছে react এর নতুন এডিশন যেটার মাধ্যমে আমরা React এর স্টেট এবং অন্যান্য ফিচার ব্যাবহার করতে পারব class component না লিখেই, অর্থাৎ ফাংশনাল কম্পোনেন্টের মাধ্যমেই।</p>
        <p>যেকোনো ইন্টারেক্টিভ অ্যাপ্লিকেশনে আমাদের অ্যাপের স্টেট ধরে রাখা লাগে (store) কোথাও না কোথাও এবং এই স্টেট এর ডিপেন্ড করেই কিন্তু আমরা আমাদের আপ্লিকেশনকে ইন্টারেক্টিভ করে থাকি।</p>
        <p>এখন আসা যাক তাহলে React এ। আমরা React এ কিছু স্পেশাল ফাংশন ব্যাবহার করে থাকি আমাদের অ্যাপকে ইন্টারেক্টিভ করার জন্যে। এই ফাংশন গুলোকেই আমরা “Hooks” বলি। React আমাদের এরকম কিছু কমন বিল্ট-ইন hooks দিয়ে দিয়েছে।</p>
        <ul className="hooksList">
            <li>React.useState</li>
            <li>React.useEffect</li>
            <li>React.useContext</li>
            <li>React.useRef</li>
            <li>React.useReducer</li>
        </ul>
        <p>এখানে প্রত্যেকটি একটি স্পেশাল ফাংশন যেটার কথা আমরা একটু আগেই জেনে এসেছি। আমরা এই ফাংশনগুলোর মাধ্যমে আমাদের React কম্পোনেন্টে ডাটা স্টোর করতে পারি (যেমন স্টেট) অথবা আমরা বিভিন্ন অ্যাকশান পারফর্ম করতে পারি (সাইড ইফেক্ট)। উপড়ের hooks গুলো ছাড়াও আরও কিছু বিল্ট-ইন hooks আছে যেগুলো আমাদের ক্ষেত্রবিশেষে ব্যাবহার করা লাগে।</p>
        <p>এখানে ইম্পরট্যান্ট ব্যাপার হচ্ছে যে প্রত্যেকটি hooks এরই কিন্তু নিজস্ব Unique API রয়েছে। কিছু hooks শুধুমাত্র একটি value রিটার্ন করে (যেমন React.useRef এবং React.useContext), আবার কিছু আছে যারা একটি pair of values রিটার্ন করে থাকে। (যেমন React.useState and React.useReducer) এবং বাকিরা কিছুই রিটার্ন করে না (যেমন React.useEffect)।</p>
        <p>আশা করি আমরা hooks এর একটি বেকগ্রাউন্ড পেয়েছি উপড়ের আলোচনায়। এখন আমরা আলোচনা করবো আমাদের প্রথম হুক useState নিয়ে।</p>
      </div>
    </div>
  );
};

export default Hooks;
