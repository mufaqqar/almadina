"use client";
import React from "react";
import { useLanguage } from "@/components/common/LanguageContext";
export default function Contact() {
  const { t } = useLanguage();
  return (
    <div className="row-request ">
    <div className="col-md-6">
      <div className="w-full h-[900px]  rounded-lg overflow-hidden shadow-lg ">
        <iframe
        src="https://www.google.com/maps?q=Prince+Majed+Bin+Abdulaziz+Rd+Ar+Rayyan+Riyadh+14214+Saudi+Arabia&output=embed"
        width="90%"
        height="660"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 img-left "
      ></iframe>
      </div>
       </div>

      <div className="container-fluid">
        <div className="row-request-inner">
          <div className="container">
            <div className="row-request-right wow fadeInUp">
              <div className="ok">
                <div className="row">
                  <h1 className="heading-request">{t("requestAQuote")}</h1>
                </div>
                <div className="row-request-right-inner">
                  <div className="request-right-inner-left">
                    <div>
                      <input
                        className="text"
                        type="text"
                        placeholder={t("fullName")}
                      />
                    </div>
                    <div>
                      <input
                        className="text"
                        type="text"
                        placeholder={t("emailAddress")}
                      />
                    </div>
                    <div className="tittle-select">
                      <span>{t("serviceType")}</span>
                    </div>
                    <div>
                      <select className="select">
                        <option value={0}>{t("acRepair")}</option>
                        <option value={1}>{t("refrigeratorRepair")}</option>
                        <option value={2}>{t("washingMachineRepair")}</option>
                      </select>
                    </div>
                    <div className="tittle-select">
                      <span>{t("preferredTime")}</span>
                    </div>
                    <div>
                      <select className="select bottom-select">
                        <option value={0}>{t("morning")}</option>
                        <option value={1}>{t("afternoon")}</option>
                        <option value={2}>{t("evening")}</option>
                      </select>
                    </div>
                  </div>
                  <div className="request-right-inner-right">
                    <div>
                      <input
                        className="text"
                        type="text"
                        placeholder={t("phoneNumber")}
                      />
                    </div>
                    <div>
                      <select className="select">
                        <option value={0}>{t("chooseService")}</option>
                        <option value={1}>{t("acRepair")}</option>
                        <option value={2}>{t("refrigeratorRepair")}</option>
                      </select>
                    </div>
                    <div className="tittle-select">
                      <span>{t("urgencyLevel")}</span>
                    </div>
                    <div>
                      <select className="select">
                        <option value={0}>{t("within24h")}</option>
                        <option value={1}>{t("within3d")}</option>
                        <option value={2}>{t("withinWeek")}</option>
                      </select>
                    </div>
                    <div className="tittle-select">
                      <span>{t("applianceBrand")}</span>
                    </div>
                    <div>
                      <select className="select">
                        <option value={0}>{t("samsung")}</option>
                        <option value={1}>{t("lg")}</option>
                        <option value={2}>{t("other")}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="btn-submit">
                    <input
                      className="submit"
                      type="submit"
                      readOnly
                      value={t("submitRequest")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
