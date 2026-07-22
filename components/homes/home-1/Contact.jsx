import React from "react";
import Image from "next/image";
export default function Contact() {
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
                  <h1 className="heading-request">REQUEST A QUOTE</h1>
                </div>
                <div className="row-request-right-inner">
                  <div className="request-right-inner-left">
                    <div>
                      <input
                        className="text"
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <input
                        className="text"
                        type="text"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="tittle-select">
                      <span>Service type?</span>
                    </div>
                    <div>
                      <select className="select">
                        <option value={0}>AC Repair</option>
                        <option value={1}>Refrigerator Repair</option>
                        <option value={2}>Washing Machine Repair</option>
                      </select>
                    </div>
                    <div className="tittle-select">
                      <span>Preferred time?</span>
                    </div>
                    <div>
                      <select className="select bottom-select">
                        <option value={0}>Morning (9AM-12PM)</option>
                        <option value={1}>Afternoon (12PM-4PM)</option>
                        <option value={2}>Evening (4PM-8PM)</option>
                      </select>
                    </div>
                  </div>
                  <div className="request-right-inner-right">
                    <div>
                      <input
                        className="text"
                        type="text"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div>
                      <select className="select">
                        <option value={0}>Choose service</option>
                        <option value={1}>AC Repair</option>
                        <option value={2}>Refrigerator Repair</option>
                      </select>
                    </div>
                    <div className="tittle-select">
                      <span>Urgency level?</span>
                    </div>
                    <div>
                      <select className="select">
                        <option value={0}>Within 24 hours</option>
                        <option value={1}>Within 3 days</option>
                        <option value={2}>Within a week</option>
                      </select>
                    </div>
                    <div className="tittle-select">
                      <span>Appliance brand?</span>
                    </div>
                    <div>
                      <select className="select">
                        <option value={0}>Samsung</option>
                        <option value={1}>LG</option>
                        <option value={2}>Other</option>
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
                      value="Submit Request"
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
