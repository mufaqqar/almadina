"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../common/LanguageContext";
export default function ServiceDetails() {
  const { t } = useLanguage();
  return (
    <div id="content-wrap" className="container">
      <div id="sidebar">
        <div id="inner-sidebar" className="inner-content-wrap">
          <div className="widget widget_category style-2 widget no-sep">
            <h3 className="widget-title">
              <span>{t("popularService") || "Popular Service"}</span>
            </h3>
            <ul className="list-category">
              <li>
                <Link href={`/service`}>{t("acTitle")}</Link>
              </li>
              <li>
                <Link href={`/service`}>{t("fridgeTitle")}</Link>
              </li>
              <li>
                <Link href={`/service`}>{t("washerTitle")}</Link>
              </li>
              <li>
                <Link href={`/service`}>{t("sameDayService") || "Same-Day Service"}</Link>
              </li>
              <li>
                <Link href={`/service`}>{t("freeInspection") || "Free Inspection"}</Link>
              </li>
            </ul>
          </div>
          <div className="widget widget_get-a-quote">
            <h3 className="widget-title">
              <span>{t("getAQuote")}</span>
            </h3>
            <div className="name">
              <input type="text" placeholder={t("yourName")} />
            </div>
            <div className="email">
              <input type="text" placeholder={t("emailAddress")} />
            </div>
            <div className="message">
              <input type="text" placeholder={t("yourComment")} />
            </div>
            <a className="btn-send" href="">
              {t("submitRequest")}
            </a>
          </div>
    
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-mobile={60}
          data-smobile={60}
        />
      </div>

      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          <article className="hentry data-effect">
            <div className="post-media clerafix">
              <Link href={`/service-detail`}>
                <Image
                  alt="Image"
                  width={770}
                  height={500}
                  src="/assets/img/Furniture Repair.jpg"
                />
              </Link>
            </div>
            <div className="post-content-wrap clearfix">
              <h1 className="post-title-detail style-2">
                <span className="post-title-inner">
                  <span>{t("serviceDetail").toUpperCase()}</span>
                </span>
              </h1>
              <div className="post-content margin-bottom-51">
                <p>{t("aboutText2")}</p>
                <p className="margin-top-19">{t("aboutText3")}</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="post-img">
                    <Image
                      alt="Image"
                      width={370}
                      height={270}
                      src="/assets/img/blog-banner.jpg"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h3 className="post-title-service-detail margin-top-4">
                      <span className="post-title-inner">
                        {t("qualityService") || "Quality Service Guarantee"}
                      </span>
                    </h3>
                    <div className="post-content margin-bottom-32">
                      <p>{t("aboutText1")}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="post-title-service-detail">
                      <span className="post-title-inner">
                        {t("professionalStaff") || "Highly Professional Technicians"}
                      </span>
                    </h3>
                    <div className="post-content">
                      <p>{t("experienceDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="post-title-service-detail">
                <span className="post-title-inner">
                 {t("testimonialsTitle")}
                </span>
              </h3>
              <div className="post-content margin-bottom-40">
                <p>{t("aboutText2")}</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="post-img">
                    <Image
                      alt="Image"
                      width={370}
                      height={270}
                      src="/assets/img/blog-banner.jpg"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h3 className="post-title-service-detail margin-top-4">
                      <span className="post-title-inner">
                        {t("qualityControl") || "Quality Control System"}
                      </span>
                    </h3>
                    <div className="post-content margin-bottom-32">
                      <p>{t("aboutText1")}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="post-title-service-detail">
                      <span className="post-title-inner">
                        {t("professionalStaff") || "Highly Professional Staff"}
                      </span>
                    </h3>
                    <div className="post-content">
                      <p>{t("experienceDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="post-title-service-detail">
                <span className="post-title-inner">
                 {t("testimonialsTitle")}
                </span>
              </h3>
              <div className="post-content margin-bottom-40">
                <p>{t("aboutText2")}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
