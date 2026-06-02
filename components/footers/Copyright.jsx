import React from "react";

export default function Copyright() {
  return (
    <div id="bottom" className="bottom-style-2">
      <div id="bottom-bar-inner" className="container">
        <div className="bottom-bar-inner-wrap">
          <ul className="bottom-bar-content">
            <li>
              <a href=" ">© AbuSaad {new Date().getFullYear()} </a>|
            </li>
            <li>
              <a href=""> All Rights Reserved</a>
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
