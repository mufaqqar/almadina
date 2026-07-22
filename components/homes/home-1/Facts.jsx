"use client";
import React from "react";
import { counterData } from "@/data/facts";
import Counter from "@/components/common/Counter";
import { useLanguage } from "@/components/common/LanguageContext";
const factKeyMap = ["happyCustomers", "projectDone", "awardsWin", "clientWorks"];
export default function Facts() {
  const { t } = useLanguage();
  return (
    <div className="row-counter">
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={120}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
        <div className="row">
          {counterData.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className={`box-counter wow ${item.wowClass}`}>
                <div className="themesflat-counter style-1 align-center clearfix">
                  <div className="counter-item">
                    <div className="inner">
                      <div className="text-wrap">
                        <span className={`icon ${item.icon}`} />
                        <div className="number-wrap">
                          <span className="number">
                            <Counter max={item.number} />
                          </span>
                          <span className="suffix">{item.suffix}</span>
                        </div>
                        <h3 className={`heading ${item.marginClass}`}>
                          {t(factKeyMap[index])}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row clearfix">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={115}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
