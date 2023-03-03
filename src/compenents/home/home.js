import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div id="home" className="sect">
      <div className="container">
        <div className="wrapper home_wrapper">
          <div className="home_item_txt visible">
            <h3>hey! i am</h3>
            <h2 className="home_author">Ronaldo Fredrickson</h2>
            <h2>"I'am a"</h2>
            <span>Web design</span>
            <span className="typed-cursor" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
