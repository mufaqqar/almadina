"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../common/LanguageContext";
const items = ["Vision", "Mission", "Strategy"];
export default function Experience() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="row-experiences-2">
      <div className="row">
        <div className="col-xl-6 col-lg-12">
          <div className="experience-left flat-tab">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={143}
              data-mobile={60}
              data-smobile={60}
            />
            <div className="themesflat-headings style-2 wow fadeInUp clearfix relative">
              <span className="heading-shadown-text">{t("workers") || "WORKERS"}</span>
              <h1 className="heading">{t("experiencedTechs")}</h1>
              <p className="sub-heading">{t("experienceDesc")}</p>
            </div>
            <ul className="tab-title title wow fadeInUp">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`item-title ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="tab-content-wrap clearfix">
              {activeIndex == 0 && (
                <div className="tab-content">
                  <div className="item-content">
                    <div className="infor">
                      <span>{t("aboutText1")}</span>
                    </div>
                    <div className="link">
                      <ul className="first">
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>{t("skilledStaff")}</Link>
                        </li>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>{t("reliableDedicated")}</Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>{t("trainedModern")}</Link>
                        </li>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>{t("focusedQuality")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {activeIndex == 1 && (
                <div className="tab-content">
                  <div className="item-content">
                    <div className="infor">
                      <span>{t("aboutText2")}</span>
                    </div>
                    <div className="link">
                      <ul className="first">
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>{t("reliableDedicated")}</Link>
                        </li>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>{t("trainedModern")}</Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>{t("skilledStaff")}</Link>
                        </li>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>{t("focusedQuality")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {activeIndex == 2 && (
                <div className="tab-content">
                  <div className="item-content">
                    <div className="infor">
                      <span>{t("aboutText3")}</span>
                    </div>
                    <div className="link">
                      <ul className="first">
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>{t("skilledStaff")}</Link>
                        </li>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>{t("reliableDedicated")}</Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>{t("trainedModern")}</Link>
                        </li>
                        <li>
                          <i className="zingbox-icon-check" />
                          <Link href={`/service-detail`}>{t("focusedQuality")}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12">
          <Image
            alt="Image"
            src="/assets/img/shortcode/experience/experience-right.jpg"
            width={945}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}
