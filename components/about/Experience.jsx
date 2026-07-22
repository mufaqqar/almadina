"use client";
import Link from "next/link";
import { useLanguage } from "../common/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  return (
    <div className="row-experiences padding-bottom-682">
      <div className="container">
        <div className="row-experiences-content wow zoomInDown">
          <div className="row">
            <h1 className="heading-experiences">{t("experiencedTechs")}</h1>
          </div>
          <div className="row">
            <p className="content">{t("experienceDesc")}</p>
          </div>
          <div className="row">
            <div className="link wow fadeInRight">
              <div className="link-1">
                <ul>
                  <li className="left">
                    <Link href={`/service-detail`}>
                      <i className="zingbox-icon-check" />
                      {t("skilledStaff")}
                    </Link>
                  </li>
                  <li className="left">
                    <Link href={`/service-detail`}>
                      <i className="zingbox-icon-check" />
                      {t("reliableDedicated")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="link-2">
                <ul>
                  <li className="right">
                    <Link href={`/service-detail`}>
                      <i className="zingbox-icon-check" />
                      {t("trainedModern")}
                    </Link>
                  </li>
                  <li className="right">
                    <Link href={`/service-detail`}>
                      <i className="zingbox-icon-check" />
                      {t("focusedQuality")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
