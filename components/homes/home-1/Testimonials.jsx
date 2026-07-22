"use client";

import { testimonials } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useLanguage } from "@/components/common/LanguageContext";
import Image from "next/image";
const roleKeyMap = {
  "Satisfied Customer": "happyCustomers",
  "Happy Client": "happyCustomers",
  "Regular Customer": "happyCustomers",
  "Loyal Customer": "happyCustomers",
};
export default function Testimonials() {
  const { t } = useLanguage();
  return (
    <div className="row-question">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={122}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="themesflat-headings style-2 question wow fadeInUp clearfix">
              <h1 className="heading">{t("testimonialsTitle")}</h1>
              <p className="sub-heading">
                {t("testimonialsSub")}
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="image-switch">
              <Image
                className="image"
                alt="Image"
                width={570}
                height={615}
                src="/assets/img/9629w_GrandLeaves_Roomshot_1.webp"
              />
            </div>
          </div>
        </div>
        <div className="row-question-slider  testimonials-1">
          <div className="col-md-8">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                767: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1199: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              loop
              initialSlide={3}
              onSwiper={(swiper) => swiper.slideNext()}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd1",
              }}
              className="swiper-container mySwiper overflow-visible"
            >
              {testimonials.map((testimonial, i) => (
                <SwiperSlide
                  key={i}
                  className={`swiper-slide ${testimonial.className}`}
                >
                  <div className="box-question">
                    <span className="fa fa-quote-left" />
                    <p>{testimonial.quote}</p>
                    <div className="author">
                      <Image
                        alt="Image"
                        width={80}
                        height={80}
                        src={testimonial.authorImage}
                      />
                      <div className="author-content">
                        <div>
                          <a className="name-author" href="#">
                            {testimonial.authorName}
                          </a>
                        </div>
                        <div>
                          <span>{t(roleKeyMap[testimonial.authorRole] || "happyCustomers")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination spd1" />
          </div>
        </div>
      </div>
    </div>
  );
}
