"use client";
import React from "react";
import { useLanguage } from "../common/LanguageContext";

export default function Offices() {
  const { t } = useLanguage();
  return (
    <div className="w-full h-[900px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps?q=Prince+Majed+Bin+Abdulaziz+Rd+Ar+Rayyan+Riyadh+14214+Saudi+Arabia&output=embed"
        width="100%"
        height="600"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
        title={t("office1Title")}
      ></iframe>
    </div>
  );
}





