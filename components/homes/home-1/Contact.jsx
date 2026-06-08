import React from "react";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="row-request ">
    <div className="col-md-6">
      <div className="w-full h-[900px]  rounded-lg overflow-hidden shadow-lg ">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.292149081696!2d46.737622!3d24.674577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0385c1e8b9e7%3A0x9e5b5e5b5e5b5e5b!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1"
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
