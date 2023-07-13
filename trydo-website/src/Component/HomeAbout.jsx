import React from "react";
import asset4 from "../Images/asset 4.jpeg";

const HomeAbout = () => {
  return (
    <div>
      <div className="mountain-img-main">
        <div>
          <img src={asset4} alt="mountain" className="mountain-img" />
        </div>
        <div className="about-paragraph">
          <p className="about-heading">About</p>
          <p className="about-text">
            There are many variations of passages of Lorem Ipsum available, but
            the
            <br /> majority have suffered alteration in some form, by injected
            humour, or
            <br /> randomised words which dont look even slightly believable. If
            you are going to
            <br /> use a passage of Lorem Ipsum,
          </p>
          <div className="who-we-are">
            <div>
              <p className="who">Who we are</p>
              <p className="who-paragraph">
                There are many vtions of passages <br />
                of Lorem Ipsum available, but the <br />
                majority have suffered.
              </p>
            </div>
            <div className="second-who-paragraph">
              <p className="who">Who we are</p>
              <p className="who-paragraph">
                There are many vtions of passages <br />
                of Lorem Ipsum available, but the <br />
                majority have suffered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
