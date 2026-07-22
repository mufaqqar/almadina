"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useLanguage } from "@/components/common/LanguageContext";
export default function Footer2() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const { t } = useLanguage();

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };
  return (
    <footer id="footer" className="style-1 clearfix">
      <Image
        className="bg-right"
        alt="Image"
        src="/assets/img/bg-footer-2.png"
        width={783}
        height={432}
      />
      <div id="footer-widgets" className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="widget widget_text">
              <div className="textwidget">
                <Image
                  alt="Image"
                  src="/assets/logo.png"
                  width={180}
                  height={51}
                />
                <p className="margin-bottom-15">
                    {t("footerDesc")}
                </p>
                <div className="footer-socials">
                  <div className="inner">
                    <span className="icons">
                      <a className="active" href="#">
                        <i className="fa fa-facebook-square" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-google" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest-p" />
                      </a>
                    </span>
                  </div>
                </div>
                {/* /.footer-socials */}
              </div>
            </div>
            {/* /.widget_text */}
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={0}
              data-smobile={0}
            />
          </div>
          {/* /.col */}
          <div className="col-lg-2 col-md-6">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={10}
              data-mobile={0}
              data-smobile={50}
            />
            <div className="widget widget_services">
              <h3 className="widget-title margin-bottom-30">{t("servicesFooter")}</h3>
              <ul className="service-list">
                <li>
                  <Link href={`/service-detail`}>Conditions</Link>
                </li>
                <li>
                  <Link href={`/service-detail`}>Terms of Use</Link>
                </li>
                <li>
                  <Link href={`/service`}>Our Services</Link>
                </li>
                <li>
                  <Link href={`/blog`}>New Guests List</Link>
                </li>
                <li>
                  <Link href={`/team`}>The Team List</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* /.col */}
          <div className="col-lg-4 col-md-6">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={10}
              data-mobile={50}
              data-smobile={50}
            />
            <div className="widget widget_Latest-post">
              <h3 className="widget-title">{t("recentPosts")}</h3>
              <ul className="lastest-posts data-effect clearfix">
                <li className="clearfix">
                  <div className="thumb">
                    <Image
                      alt="Image"
                      src="/assets/img/post/recent-new-4.jpg"
                      width={85}
                      height={75}
                    />
                  </div>
                  <div className="text">
                    <span className="post-date">December 7, 2021</span>
                    <h4>
                      <Link href={`/blog-detail`}>
                        Bigg Ideas Of Business branding Info.
                      </Link>
                    </h4>
                  </div>
                </li>
                <li className="clearfix">
                  <div className="thumb">
                    <Image
                      alt="Image"
                      src="/assets/img/post/recent-new-5.jpg"
                      width={85}
                      height={75}
                    />
                  </div>
                  <div className="text">
                    <span className="post-date">December 7, 2021</span>
                    <h4>
                      <Link href={`/blog-detail`}>
                        Bigg Ideas Of Business branding Info.
                      </Link>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
            {/* /.widget_lastest */}
          </div>
          {/* /.col */}
          <div className="col-lg-3 col-md-6">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={5}
              data-mobile={50}
              data-smobile={50}
            />
            <div className="widget widget_email">
              <h3 className="widget-title margin-bottom-30">{t("subscribe")}</h3>
              <div
                className={`tfSubscribeMsg  footer-sub-element ${
                  showMessage ? "active" : ""
                }`}
              >
                {success ? (
                  <p style={{ color: "rgb(52, 168, 83)" }}>
                    {t("subscribeSuccess")}
                  </p>
                ) : (
                  <p style={{ color: "red" }}>{t("subscribeError")}</p>
                )}
              </div>
              <form onSubmit={sendEmail} className="email-form">
                <div className="Email">
                  <input
                    required
                    name="email"
                    type="text"
                    placeholder={t("emailPlaceholder")}
                  />
                </div>
                <div>
                  <button type="submit" className="btn-subcriber">
                    {t("subscribeBtn")}
                  </button>
                </div>
                <span className="tittle-email">
                  {t("subscribeNote")}
                </span>
              </form>
            </div>
            {/* /.widget_instagram */}
          </div>
          {/* /.col */}
        </div>
        {/* /.themesflat-row */}
      </div>
      {/* /#footer-widgets */}
    </footer>
  );
}
