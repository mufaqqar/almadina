"use client";
import { faqs } from "@/data/faqs";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../common/LanguageContext";

const faqQuestionMap = {
  1: "faqQ1",
  2: "faqQ2",
  3: "faqQ3",
  4: "faqQ4",
  5: "faqQ5",
};

const faqAnswerMap = {
  1: "faqA1",
  2: "faqA2",
  3: "faqA3",
  4: "faqA4",
  5: "faqA5",
};

export default function Faq() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(4);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={140}
        data-mobile={60}
        data-smobile={60}
      />
      <div className="ask-question">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-question">
                <Image
                  alt="Image"
                  src="/assets/img/shortcode/question/ask-question.png"
                  width={84}
                  height={84}
                />
                <div className="themesflat-headings style-2 wow fadeInUp clearfix">
                  <h1 className="heading">{t("askQuestion") || "ASK QUESTION"}</h1>
                  <p className="sub-heading">{t("contactDesc")}</p>
                </div>
                <div className="search wow fadeInUp">
                  <input type="text" placeholder={t("searchKeywords") || "Search keywords"} />
                  <a href="" />
                </div>
                <div className="infor wow fadeInUp">
                  <input
                    className="first"
                    type="text"
                    placeholder={t("yourEmail")}
                  />
                  <input type="text" placeholder={t("subject") || "Subject"} />
                </div>
                <div className="message wow fadeInUp">
                  <input type="text" placeholder={t("yourMessage") || "Write Massege"} />
                  <button className="message-submit" type="submit">
                    {t("sendMessage") || "SEND MESSAGE"}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="question-faq">
                {faqs.map(({ id }) => (
                  <div
                    key={id}
                    className={`accordion-item ${
                      activeId === id ? "active" : ""
                    }`}
                  >
                    <div
                      className="question"
                      onClick={() => toggleAccordion(id)}
                    >
                      {t(faqQuestionMap[id] || `faqQ${id}`)}
                    </div>
                    {activeId === id && (
                      <div
                        className="infor-question"
                        style={{ display: "block" }}
                      >
                        <span>{t(faqAnswerMap[id] || `faqA${id}`)}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={0}
        data-mobile={60}
        data-smobile={60}
      />
    </>
  );
}
