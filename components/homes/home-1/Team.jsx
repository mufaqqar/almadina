"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import { useLanguage } from "@/components/common/LanguageContext";

export default function Team() {
  const { t } = useLanguage();
  return (
    <div className="row-our-team">
      <div className="container">
        <div className="row row-our-team-inner">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={321}
              data-mobile={200}
              data-smobile={321}
            />
            <div className="themesflat-headings our-team text-center wow fadeInUp clearfix">
              <h1 className="heading">{t("ourCreativeTeam")}</h1>
              <p className="sub-heading">
                {t("teamSubheading")}
              </p>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={40}
              data-mobile={35}
              data-smobile={35}
            />
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member) => (
            <div className="col-lg-3 col-md-6" key={member.id}>
              <div
                className={`box-team ${member.active ? "active" : ""} wow ${
                  member.animation
                }`}
              >
                <div className="img-overlay" />
                <Image
                  alt="Image"
                  width={270}
                  height={300}
                  src={member.imageSrc}
                />
                <div className={`box ${member.boxClass}`}>
                  <h3 className="team-tittle">
                    <Link href={`/team`}>{member.name}</Link>
                  </h3>
                  <span>{member.role}</span>
                  <div className="icon-social-team">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="https://g.page/r/almadinatabreed" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-google" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
