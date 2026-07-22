"use client";
import React from "react";
import { useLanguage } from "@/components/common/LanguageContext";

export default function Copyright2() {
  const { t } = useLanguage();
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
                {new Date().getFullYear()} | {t("allRights")} {" "}
              </span>
            </div>
          </div>
          {/* /.bottom-bar-content */}
          <div className="bottom-bar-menu">
            <a href="#">{t("privacy")}</a>
            <a href="#">{t("terms")}</a>
            <a href="#">{t("sitemap")}</a>
            <a className="padding-right-0" href="#">
              {t("help")}
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
