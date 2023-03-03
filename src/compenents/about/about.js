import React from "react";
// import clsx from "clsx";
import "./about.scss";
import cx from "classnames";

const About = () => {
  return (
    <div id="about" className={cx("sect")}>
      <div className="container">
        <div className="about_wrapper">
          <div className="about_item_image">
            <span
              className=" lazy-load-image-background blur lazy-load-image-loaded"
              style={{ display: "inline-block", color: "transparent" }}
            >
              <img src="" alt="" />
            </span>
          </div>
          <div className="about_item_text text-right">
            <h2>About Me</h2>
            <h3 className="about_goals">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </h3>
            <ul className="about_info">
              <li>
                <span>Name:</span>
                <span>Ronaldo Fredrickson</span>
              </li>
              <li>
                <span>Date of birth:</span>
                <span>November 28, 1989</span>
              </li>
              <li>
                <span>Address:</span>
                <span>San Francisco CA 97987 USA</span>
              </li>
              <li>
                <span>Zip code:</span>
                <span>1000</span>
              </li>
              <li>
                <span>Email:</span>
                <span>ronaldo@gmail.com</span>
              </li>
              <li>
                <span>Phone:</span>
                <span>+1-2234-5678-9-0</span>
              </li>
            </ul>
            <div className="about_projects_count">
              <span>120</span>" Project complete"
            </div>
            <div className="btn btn-primary">download cv</div>
          </div>
        </div>
        <div className="partner">
          <div>
            <a href="#">
              <img
                src="/static/media/partner-1.png.d7fbe65d404e683b8206.webp"
                alt="partner-logo"
              ></img>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                src="/static/media/partner-2.png.a6a690fbcf78a410f7d6.webp"
                alt="partner-logo"
              ></img>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                src="/static/media/partner-3.png.4a4e43a91003af7c19c0.webp"
                alt="partner-logo"
              ></img>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                src="/static/media/partner-4.png.f251741dd69d9d976356.webp"
                alt="partner-logo"
              ></img>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                src="/static/media/partner-5.png.5492078ae0154b9ec486.webp"
                alt="partner-logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
