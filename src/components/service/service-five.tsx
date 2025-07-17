import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";

const service_data = [
  {
    id: 1,
    title: "App Development",
    desc: "We build scalable and high-performance mobile applications tailored to your business goals, ensuring seamless user experiences across iOS and Android.",
    icon: s_2,
  },
  {
    id: 2,
    title: "Web Development",
    desc: "From responsive websites to custom web applications, we deliver modern, fast, and user-centric web solutions aligned with your brand and business strategy.",
    icon: s_1,
  },
  {
    id: 3,
    title: "Digital Marketing",
    desc: "Maximize your brand's visibility online through targeted digital campaigns, SEO strategies, and conversion-driven techniques that bring measurable results.",
    icon: s_3,
  },
  {
    id: 4,
    title: "UI/UX Designing",
    desc: "Our creative designers craft intuitive, beautiful interfaces and experiences that captivate users and enhance engagement across digital platforms.",
    icon: s_2,
  },
  {
    id: 5,
    title: "Branding",
    desc: "We build strong brand identities through strategic storytelling, visual design, and consistency that communicates your value and drives recognition.",
    icon: s_3,
  },
  {
    id: 6,
    title: "Hosting Solutions",
    desc: "Reliable and secure hosting tailored for performance, with 99.9% uptime, fast loading, and full technical support for your business success.",
    icon: s_1,
  },
];

// service items
export function ServiceItems() {
  return (
    <div className="row">
      <div className="col-xxl-3"></div>
      {service_data.map((item) => (
        <div key={item.id} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
          <div className="tp-service-5-item tp_fade_bottom space-1">
            <div className="tp-service-4-icon">
              <Image src={item.icon} alt="icon" />
            </div>
            <div className="tp-service-4-content">
              <h4 className="tp-service-4-title-sm tp-text-black">
                <Link href="/service">{item.title}</Link>
              </h4>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// service five area
export default function ServiceFive() {
  return (
    <div className="tp-service-5-area pt-120 pb-70">
      <div className="container container-1775">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service-5-title-box mb-90">
              <h4 className="tp-service-5-title p-relative tp_fade_right">
                <span className="tp-service-5-subtitle tp_fade_left">
                  SERVICES
                </span>
                <span className="text-space"></span>
                Nullam posuere rhoncus elementum. Nullam lacinia <br />
                urna blandit iaculis sagittis
              </h4>
            </div>
          </div>
        </div>
        <div className="tp-service-5-wrap">
          <ServiceItems />
        </div>
      </div>
    </div>
  );
}
