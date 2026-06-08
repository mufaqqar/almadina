import { pricingPackages } from "@/data/pricing";
import React from "react";

export default function Pricing() {
  return (
    <div className="row-pricing">
      <div className="container">
        <div className="col-md-12">
          <div className="themesflat-headings style-2 text-center margin-bottom-25px clearfix">
            <h1 className="heading">CHOOSE A PLAN</h1>
            <p className="sub-heading margin-top-17">
              Transparent pricing for all our repair services in Riyadh.
              Quality service at affordable rates, with no hidden fees.
            </p>
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
                  <h6 className="package">{pkg.packageName}</h6>
                </div>
                <ul className="list-table">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>
                      <i className={feature.icon} />
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <div className="choose-a-plan">
                  <a href="#" className="choose-a-plan-icon">
                    Choose a Plan
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
