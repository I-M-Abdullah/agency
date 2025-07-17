import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from "@/assets/img/home-03/service/sv-icon-1.png";

const service_data = [
  {
    id: 1,
    title: "App Development",
    desc: "We build scalable and high-performance mobile applications tailored to your business goals, ensuring seamless user experiences across iOS and Android.",
    category: ["iOS", "Android", "Cross-Platform"],
  },
  {
    id: 2,
    title: "Web Development",
    desc: "From responsive websites to custom web applications, we deliver modern, fast, and user-centric web solutions aligned with your brand and business strategy.",
    category: ["React", "Next.js", "WordPress"],
  },
  {
    id: 3,
    title: "Digital Marketing",
    desc: "Maximize your brand's visibility online through targeted digital campaigns, SEO strategies, and conversion-driven techniques that bring measurable results.",
    category: ["SEO", "PPC", "Email Marketing"],
  },
  {
    id: 4,
    title: "UI/UX Designing",
    desc: "Our creative designers craft intuitive, beautiful interfaces and experiences that captivate users and enhance engagement across digital platforms.",
    category: ["Wireframes", "Prototypes", "User Journey"],
  },
  {
    id: 5,
    title: "Branding",
    desc: "We build strong brand identities through strategic storytelling, visual design, and consistency that communicates your value and drives recognition.",
    category: ["Logo", "Visual Identity", "Brand Strategy"],
  },
  {
    id: 6,
    title: "Hosting Solutions",
    desc: "Reliable and secure hosting tailored for performance, with 99.9% uptime, fast loading, and full technical support for your business success.",
    category: ["Shared", "Cloud", "Managed Hosting"],
  },
];

export default function ServiceFour() {
  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              <div className="tp-service-3-icon">
                <Image src={icon} alt="icon" />
              </div>
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  Our Services
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                Empowering Brands <br /> with Digital Excellence
              </h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href="/">{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p>{item.desc}</p>
                  <div className="tp-service-3-category">
                    {item.category.map((c, i) => (
                      <span key={i}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link className="tp-btn-zikzak-sm p-relative" href="/">
                    <span className="zikzak-content">
                      See <br /> Details
                      <RightArrow clr="currentColor" />
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
