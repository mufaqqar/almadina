import React from "react";

export default function Copyright() {
  return (
    <div id="bottom" className="bottom-style-2">
      <div id="bottom-bar-inner" className="container">
        <div className="bottom-bar-inner-wrap">
          <ul className="bottom-bar-content">
            <li>
              © Al Madina Tabreed {new Date().getFullYear()} |
            </li>
            <li>
              All Rights Reserved |
            </li>
            <li>
              Design by <a href="https://mufaqar.com" target="_blank" rel="noopener noreferrer">Mufaqar</a>
            </li>
          </ul>
          {/* /.bottom-bar-content */}
        </div>
        {/* /.bottom-bar-inner-wrap */}
      </div>
      {/* /#bottom-bar-inner */}
    </div>
  );
}
