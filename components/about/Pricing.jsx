"use client";
import { pricingPackages } from "@/data/pricing";
import React from "react";
import { useLanguage } from "../common/LanguageContext";

const pkgNameMap = {
  "AC REPAIR": "acRepairPkg",
  "REFRIGERATOR REPAIR": "refrigeratorRepairPkg",
  "WASHING MACHINE REPAIR": "washingMachineRepairPkg",
};

const featureMap = {
  "Diagnosis & inspection": "diagnosisInspection",
  "Filter cleaning": "filterCleaning",
  "Gas refill": "gasRefill",
  "Compressor repair": "compressorRepair",
  "Full system overhaul": "fullOverhaul",
  "Warranty included": "warrantyIncluded",
  "Thermostat check": "thermostatCheck",
  "Compressor replacement": "compressorReplacement",
  "Door seal repair": "doorSealRepair",
  "Drain pump check": "drainPumpCheck",
  "Motor repair": "motorRepair",
  "Control board fix": "controlBoardFix",
  "Belt replacement": "beltReplacement",
};

export default function Pricing() {
  const { t } = useLanguage();
  return (
    <div className="row-pricing">
      <div className="container">
        <div className="col-md-12">
          <div className="themesflat-headings style-2 text-center margin-bottom-25px clearfix">
            <h1 className="heading">{t("pricingTitle").toUpperCase()}</h1>
            <p className="sub-heading margin-top-17">{t("pricingSub")}</p>
          </div>
        </div>
        <div className="row">
          {pricingPackages.map((pkg) => (
            <div className="col-md-4" key={pkg.id}>
              <div
                className={`box-pricing ${pkg.active ? "active" : ""} wow ${
                  pkg.animation
                }`}
              >
                <div className="title">
                  <span className="title-shadown-text style-2">
                    {pkg.title}
                  </span>
                  <h1 className="price">{pkg.price}</h1>
                  <h6 className="package">{t(pkgNameMap[pkg.packageName] || pkg.packageName)}</h6>
                </div>
                <ul className="list-table">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>
                      <i className={feature.icon} />
                      {t(featureMap[feature.text] || feature.text)}
                    </li>
                  ))}
                </ul>
                <div className="choose-a-plan">
                  <a href="#" className="choose-a-plan-icon">
                    {t("chooseService")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={138}
          data-mobile={60}
          data-smobile={60}
        />
      </div>
    </div>
  );
}
