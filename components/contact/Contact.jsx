"use client";
import React from "react";
import { useLanguage } from "../common/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={120}
        data-mobile={60}
        data-smobile={60}
      />
      <div className="write-a-message">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="themesflat-headings contact style-2 wow fadeInUp clearfix">
                <a className="get-in-touch" href="#">
                  {t("contactDesc")}
                </a>
                <h1 className="heading">{t("writeUsAMessage") || "WRITE US A MESSAGE"}</h1>
                <p className="sub-heading">{t("contactDesc")}</p>
              </div>
              <ul className="socical-icon">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://g.page/r/almadinatabreed" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-google" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <div className="form-submit">
                <div className="infor wow fadeInUp">
                  <input type="text" placeholder={t("fullName")} />
                  <input type="text" placeholder={t("phoneNumber")} />
                </div>
                <div className="infor wow fadeInUp">
                  <input type="text" placeholder={t("emailAddress")} />
                  <input type="text" placeholder={t("subject") || "Subject"} />
                </div>
                <div className="message wow fadeInUp">
                  <input type="text" placeholder={t("yourMessage") || "Your Massege"} />
                </div>
                <div className="send">
                  <button className="message-submit" type="submit">
                    {t("sendMessage") || "Send Message"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={220}
        data-mobile={60}
        data-smobile={60}
      />
    </>
  );
}
