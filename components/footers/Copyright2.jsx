import React from "react";

export default function Copyright2() {
  return (
    <div id="bottom" className="clearfix has-spacer">
      <div id="bottom-bar-inner" className="container">
        <div className="bottom-bar-inner-wrap">
          <div className="bottom-bar-content">
            <div id="copyright">
              <a className="margin-right-3" href="#">
                © Al Madina Tabreed
              </a>
              <span className="text">
                {new Date().getFullYear()} | All Rights Reserved{" "}
              </span>
            </div>
          </div>
          {/* /.bottom-bar-content */}
          <div className="bottom-bar-menu">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
            <a className="padding-right-0" href="#">
              Help
            </a>
          </div>
          {/* /.bottom-bar-menu */}
        </div>
        {/* /.bottom-bar-inner-wrap */}
      </div>
      {/* /#bottom-bar-inner */}
    </div>
  );
}
