import PageTitle from "@/components/common/PageTitle";
import ServiceSingle from "@/components/service/ServiceSingle";
import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.title} - Al Madina Tabreed`,
    description: service.description,
  };
}

export default async function page({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <>
      <div className="sidebar-right header-style-2 topbar-style-1 menu-has-search header-fixed">
        <div id="wrapper" className="animsition" style={{ opacity: 1 }}>
          <div id="page" className="">
            <Header1 />
            <div id="main-content-home" className="site-main clearfix">
              <PageTitle pageName={service.title} />
              <ServiceSingle service={service} />
            </div>
            <Footer1 />
            <Copyright />
          </div>
        </div>
      </div>
    </>
  );
}
