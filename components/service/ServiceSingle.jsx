"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/common/LanguageContext";

const slugTitleMap = {
  "ac-repair": "acTitle",
  "refrigerator-repair": "fridgeTitle",
  "washing-machine-repair": "washerTitle",
};

const slugDescMap = {
  "ac-repair": "acDesc",
  "refrigerator-repair": "fridgeDesc",
  "washing-machine-repair": "washerDesc",
};

const slugLongMap = {
  "ac-repair": "acLong",
  "refrigerator-repair": "fridgeLong",
  "washing-machine-repair": "washerLong",
};

const slugFeatMap = {
  "ac-repair": ["acFeat1", "acFeat2", "acFeat3", "acFeat4", "acFeat5", "acFeat6", "acFeat7"],
  "refrigerator-repair": ["fridgeFeat1", "fridgeFeat2", "fridgeFeat3", "fridgeFeat4", "fridgeFeat5", "fridgeFeat6", "fridgeFeat7"],
  "washing-machine-repair": ["washerFeat1", "washerFeat2", "washerFeat3", "washerFeat4", "washerFeat5", "washerFeat6", "washerFeat7"],
};

export default function ServiceSingle({ service }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = formData.phone.replace(/\s/g, "");
    const text = encodeURIComponent(`Hello Al Madina Tabreed, I need ${service.title} service. My name is ${formData.name}. ${formData.message}`);
    window.open(`https://wa.me/966583086233?text=${text}`, "_blank");
    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
  };

  const slug = service.slug;
  const featKeys = slugFeatMap[slug] || [];
  const features = featKeys.length ? featKeys.map((k) => t(k)) : service.features;

  return (
    <div id="content-wrap" className="container">
      <div id="sidebar">
        <div id="inner-sidebar" className="inner-content-wrap">
          <div className="widget widget_category style-2 widget no-sep">
            <h3 className="widget-title">
              <span>{t("ourServices")}</span>
            </h3>
            <ul className="list-category">
              <li>
                <Link href={`/service/ac-repair`}>{t("acTitle")}</Link>
              </li>
              <li>
                <Link href={`/service/refrigerator-repair`}>{t("fridgeTitle")}</Link>
              </li>
              <li>
                <Link href={`/service/washing-machine-repair`}>{t("washerTitle")}</Link>
              </li>
            </ul>
          </div>
          <div className="widget widget_get-a-quote">
            <h3 className="widget-title">
              <span>{t("requestAQuote")}</span>
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="name">
                <input
                  name="name"
                  type="text"
                  placeholder={t("yourName")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="email">
                <input
                  name="phone"
                  type="tel"
                  placeholder={t("phoneNumber")}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="message">
                <textarea
                  name="message"
                  placeholder={t("yourComment")}
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  required
                />
              </div>
              <button type="submit" className="btn-send">
                {t("submitRequest")}
              </button>
              {submitted && (
                <p style={{ color: "rgb(52, 168, 83)", marginTop: 10, fontSize: 13 }}>
                  {t("subscribeSuccess")}
                </p>
              )}
            </form>
          </div>
          <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={60} data-smobile={60} />
          <div className="widget">
            <h3 className="widget-title">
              <span>{t("contact")}</span>
            </h3>
            <div className="textwidget">
              <p><strong>{t("callUs")}:</strong><br /><a href="tel:+966583086233">+966 58 308 6233</a></p>
              <p><strong>{t("ourAddress")}:</strong><br />{t("address")}</p>
            </div>
          </div>
        </div>
      </div>

      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          <article className="hentry data-effect">
            <div className="post-media clerafix">
              <Image
                alt={service.title}
                width={770}
                height={500}
                src={service.imageSrc}
              />
            </div>
            <div className="post-content-wrap clearfix">
              <h1 className="post-title-detail style-2">
                <span className="post-title-inner">
                  <span>{t(slugTitleMap[slug] || service.title)}</span>
                </span>
              </h1>
              <div className="post-content margin-bottom-51">
                <p>{t(slugLongMap[slug] || service.longDescription)}</p>
              </div>

              <h3 className="post-title-service-detail">
                <span className="post-title-inner">
                  {t("features")}
                </span>
              </h3>
              <div className="post-content margin-bottom-32">
                <ul>
                  {features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
                      <span>
                        <i className="fa fa-check" style={{ color: "#28a745", marginRight: 8 }} />
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="post-title-service-detail">
                <span className="post-title-inner">
                  {t("whyChooseUs") || "Why Choose Al Madina Tabreed?"}
                </span>
              </h3>
              <div className="post-content margin-bottom-40">
                <p>{t("aboutText2")}</p>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={30}
                    data-mobile={30}
                    data-smobile={30}
                  />
                  <div className="text-center">
                    <a href="https://wa.me/966535251023" target="_blank" rel="noopener noreferrer" className="btn get-a-quote">
                      {t("getAQuote")}
                    </a>
                  </div>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={60}
                    data-mobile={60}
                    data-smobile={60}
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
