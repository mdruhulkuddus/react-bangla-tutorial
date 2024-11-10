import React from "react";
import "../styles/Style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="blog">
      <h1 className="headline">রিঅ্যাক্ট বাংলা টিউটোরিয়াল</h1>
      <hr className="hrline" />
      <div className="blogTopImage">
        <img
          src="/assets/images/homepage.png"
          alt="props"
          style={{ border: "1px solid #cccc", height: "auto" }}
        />
      </div>
      <div className="blogContent">
        <p className="homePageSubHeadline">
          <b>ReactJS</b> সম্পর্কিত বাংলা ডুকুমেন্টেশন। এই <b>Blog</b> সাইটে আমরা{" "}
          <b> ReactJs</b> সম্পর্কিত ব্যাসিক বিষয়গুলো বিস্তারিত আলোচনা করবো। এই সিরিজে নিচের এই টপিকগুলো কভার করা হয়েছে বা হবেঃ-
        </p>
        <ul className="homepageTopicList">
        <li>
          <Link to="/react-info">১। রিঅ্যাক্টঃ কি, কেন এবং কিভাবে?</Link>
        </li>
        <li>
          <Link to="/installation">২। রিঅ্যাক্ট ব্যাসিকসঃ প্রোজেক্ট শুরু করা (Installation) </Link>
        </li>
        <li>
          <Link to="/jsx">৩। রিঅ্যাক্ট ব্যাসিকসঃ জেএসএক্স(JSX) পরিচিতি</Link>
        </li>
        <li>
          <Link to="/component-short">৫। রিঅ্যাক্ট ব্যাসিকসঃ কম্পোনেন্ট (Component)</Link>
        </li>
        <li>
          <Link to="/props">৭। রিঅ্যাক্ট ব্যাসিকসঃ প্রপস (Props)</Link>
        </li>
        <li>
          <Link to="/jsx">৪। রিঅ্যাক্ট ব্যাসিকসঃ ইলিমেন্ট রেন্ডার</Link>
        </li>
        
        <li>
          <Link to="/state">৬। রিঅ্যাক্ট ব্যাসিকসঃ স্ট্যাট (State)</Link>
        </li>
   
        <li>
          <Link to="/react-basics-lifecycle">৮। রিঅ্যাক্ট ব্যাসিকসঃ লাইফসাইকেল (Lifecycle)</Link>
        </li>
        <li>
          <Link to="/react-basics-events">৯। রিঅ্যাক্ট ব্যাসিকসঃ ইভেন্ট</Link>
        </li>
        <li>
          <Link to="/react-basics-conditional-rendering">১০। রিঅ্যাক্ট ব্যাসিকসঃ কন্ডিশনাল রেন্ডারিং</Link>
        </li>
        <li>
          <Link to="/react-basics-list-items">১১। রিঅ্যাক্ট ব্যাসিকসঃ লিস্ট আইটেম</Link>
        </li>
        <li>
          <Link to="/react-basics-form-handling">১২। রিঅ্যাক্ট ব্যাসিকসঃ ফর্ম/ইনপুট হ্যান্ডেল</Link>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
