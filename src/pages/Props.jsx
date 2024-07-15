import React from "react";
import "../styles/Style.css";

const Props = () => {
  return (
    <div className="blog">
      <h1 className="headline">রিঅ্যাক্ট ব্যাসিকসঃ প্রপ্স (Props)</h1>
      <hr className="hrline" />
      <div className="blogTopImage">
        <img src="/assets/images/props-main.png" alt="component" />
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
        <p>উদাহরণ হিসেবে, নিচে একটি কম্পোনেন্টে বিভিন্ন ধরনের ডেটা props হিসেবে পাস করার উদাহরণ দেয়া হলো: </p>
      </div>
    </div>
  );
};

export default Props;
