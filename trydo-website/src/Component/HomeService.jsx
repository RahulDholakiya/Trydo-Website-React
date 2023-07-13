import React from "react";

const HomeService = () => {
  return (
    <div>
      <div className="service-box">
        <p className="service-heading">Services</p>
        <p className="service-paragraph">
          There are many variations of passages of
          <br /> Lorem Ipsum available, but the majority
          <br /> have suffered alteration.
        </p>
        <p className="request-custom-service">
          <span className="requ">Requ</span>est Custom Service
        </p>
      </div>
      <div>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="4em"
          width="4em"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon"
        >
          <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
          <line x1="2" y1="20" x2="2" y2="20" />
        </svg>
        <p className="business-stratagy-again">Business Stratagy</p>
        <p>
          I throw myself down among the tall
          <br /> grass by the stream as I lie close to
          <br /> the earth.
        </p>
      </div>
    </div>
  );
};

export default HomeService;
