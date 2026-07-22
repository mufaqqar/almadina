"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../common/LanguageContext";
export default function Experience2() {
  const { t } = useLanguage();
  return (
    <div className="row-request style-2">
      <div className="col-xl-6 col-lg-12">
        <Image
          className="img-left style-2"
          alt="Image"
          width={910}
          height={730}
          src="/assets/img/shortcode/experience/experience-left.jpg"
        />
      </div>
      <div className="col-md-6">
        <Image
          className="img-right"
          alt="Image"
          width={967}
          height={534}
          src="/assets/img/shortcode/request/request-right.png"
        />
      </div>
      <div>
        <div className="row-request-inner">
          <div
            className="row-request-right wow fadeInUp animated"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <div
              className="themesflat-headings style-1 clearfix wow fadeInUp animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <h1 className="heading padding-bottom-10">{t("experiencedTechs")}</h1>
              <p className="sub-heading padding-bottom-40">{t("experienceDesc")}</p>
            </div>
            <div
              className="service-inner-text style-3 wow fadeInUp animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="icon zingbox-icon-Solar-power-light" />
              <div className="text-wrap">
                <h3 className="heading">
                  <Link href={`/service-detail`}>{t("acTitle")}</Link>
                </h3>
                <p className="sub-heading">{t("acDesc")}</p>
              </div>
            </div>
            <div
              className="service-inner-text style-3 wow fadeInUp animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="icon zingbox-icon-Solar-power-light" />
              <div className="text-wrap">
                <h3 className="heading">
                  <Link href={`/service-detail`}>{t("fridgeTitle")}</Link>
                </h3>
                <p className="sub-heading">{t("fridgeDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
