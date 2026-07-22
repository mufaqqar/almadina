"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { useLanguage } from "../common/LanguageContext";

const serviceTitleMap = {
  "ac-repair": "acTitle",
  "refrigerator-repair": "fridgeTitle",
  "washing-machine-repair": "washerTitle",
};

const serviceDescMap = {
  "ac-repair": "acDesc",
  "refrigerator-repair": "fridgeDesc",
  "washing-machine-repair": "washerDesc",
};

export default function Services() {
  const { t } = useLanguage();
  return (
    <div className="row-service">
      <div className="service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={114}
                data-mobile={60}
                data-smobile={60}
              />
              <div className="themesflat-headings style-1 text-center wow fadeInUp clearfix relative">
                <h1 className="heading">{t("servicesForYou")}</h1>
                <p className="sub-heading">{t("servicesSubheading")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="service-inner" className="container">
        <div className="row">
          {services.map((service) => (
            <div className="col-md-4" key={service.id}>
              <div
                className={`box-service ${service.active ? "active" : ""} wow ${
                  service.animation
                }`}
              >
                <div className="service-inner-img">
                  <div className="img-overlay" />
                  <Image
                    alt="Image"
                    width={370}
                    height={240}
                    src={service.imageSrc}
                  />
                </div>
                <div className="service-inner-text">
                  <div className={`icon ${service.iconClass}`} />
                  <div className="text-wrap">
                    <h3 className="heading">
                      <Link href={`/service/${service.slug}`}>{t(serviceTitleMap[service.slug] || service.title)}</Link>
                    </h3>
                    <div className="sep clearfix" />
                    <p className="sub-heading">{t(serviceDescMap[service.slug] || service.description)}</p>
                  </div>
                  <Link href={`/service/${service.slug}`} className="service-read-more">
                    {t("readMore")} <i className="fa fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
