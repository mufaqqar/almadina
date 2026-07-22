"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../common/LanguageContext";
export default function About() {
  const { t } = useLanguage();
  return (
    <div className="row-about-us style-2  margin-top">
      <Image
        className="bg-about-us"
        alt="Image"
        width={1920}
        height={730}
        src="/assets/img/shortcode/about-us/bg-about-us.jpg"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-5" />
          <div className="col-lg-7 col-md-12">
            <div className="about-us service-about relative">
              <div className="themesflat-headings about-us style-1 clearfix">
                <span className="heading-shadown-text">{t("aboutTitle").toUpperCase()}</span>
                <h1 className="heading">{t("aboutHeading")}</h1>
                <p className="sub-heading margin-top-6">{t("aboutText1")}</p>
              </div>
              <div className="about-us-content">
                <div className="about-us-content-left">
                  <ul>
                    <li>
                      <Link href={`/service-detail`}>{t("skilledStaff")}</Link>
                    </li>
                    <li>
                      <Link href={`/service-detail`}>{t("reliableDedicated")}</Link>
                    </li>
                  </ul>
                </div>
                <div className="about-us-content-right">
                  <ul>
                    <li>
                      <Link href={`/service-detail`}>{t("trainedModern")}</Link>
                    </li>
                    <li>
                      <Link href={`/service-detail`}>{t("focusedQuality")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
