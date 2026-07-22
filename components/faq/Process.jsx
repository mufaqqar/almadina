"use client";
import React from "react";
import Image from "next/image";
import { workItems } from "@/data/process";
import { useLanguage } from "../common/LanguageContext";
export default function Process() {
  const { t } = useLanguage();
  return (
    <div className="row-work">
      <Image
        className="bg-img style-2"
        alt="Image"
        src="/assets/img/shortcode/work/bg-work.png"
        width={815}
        height={678}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={146}
              data-mobile={60}
              data-smobile={60}
            />
            <div className="themesflat-headings style-2 text-center clearfix">
              <h1 className="heading">{t("ourWorkProcess") || "OUR WORK PROCESS"}</h1>
              <p className="sub-heading">{t("aboutText1")}</p>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={55}
              data-mobile={35}
              data-smobile={35}
            />
            <div className="row">
              {workItems.map((item) => (
                <div className="col-md-4" key={item.id}>
                  <div className="box-work wow fadeInUp">
                    <Image
                      alt="Image"
                      src={item.imageSrc}
                      width={320}
                      height={320}
                    />
                    <div className="text-wrap">
                      <h6 className="heading">{item.heading}</h6>
                      <p className="sub-heading">{item.subHeading}</p>
                      <a href="#" className="btn-read-more">
                        {t("readMore")} <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-12">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={122}
                data-mobile={60}
                data-smobile={60}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
