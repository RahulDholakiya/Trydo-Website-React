import React from "react";

const HomeService = () => {
  return (
    <div>
      <div className="main-service">
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
        <div className="business-website-box">
          <div className="business-stratagy-box">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon"
            >
              <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
              <line x1="2" y1="20" x2="2" y2="20" />
            </svg>
            <h2>Business Stratagy</h2>
            <p className="box-paragraph">
              I throw myself down among the tall
              <br /> grass by the stream as I lie close to
              <br /> the earth.
            </p>
          </div>
          <div className="website-development-box">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-icon"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <h2>Website Development</h2>
            <p className="box-paragraph">
              I throw myself down among the tall
              <br /> grass by the stream as I lie close to
              <br /> the earth.
            </p>
          </div>
        </div>
      </div>
      <div className="marketing-mobile-box">
      <div className="marketing-reporting-box">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        <h2>Marketing & Reporting</h2>
        <p className="box-paragraph">
          I throw myself down among the tall
          <br /> grass by the stream as I lie close to
          <br /> the earth.
        </p>
      </div>
      <div className="mobile-app-development-box">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
        <h2>Mobile App Development</h2>
        <p className="box-paragraph">
          I throw myself down among the tall
          <br /> grass by the stream as I lie close to
          <br /> the earth.
        </p>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
