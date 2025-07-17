import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/serive-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/serive-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/serive-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/serive-4.jpg";
import ser_img_5 from "@/assets/img/inner-service/service/serive-5.jpg";
import ser_img_6 from "@/assets/img/inner-service/service/serive-6.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "CodeBrit - Digital Solutions",
    title: "App Development",
    text: "We build scalable, high-performance mobile apps for iOS, Android, and cross-platform, ensuring seamless user experiences.",
    lists: ["iOS", "Android", "Cross-Platform"],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "CodeBrit - Digital Solutions",
    title: "Web Development",
    text: "From responsive websites to custom web apps, we deliver fast, modern, and user-focused solutions aligned with your brand.",
    lists: ["React", "Next.js", "WordPress"],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "CodeBrit - Digital Solutions",
    title: "Digital Marketing",
    text: "Boost your brand’s visibility with targeted campaigns, SEO strategies, and conversion-focused techniques that deliver results.",
    lists: ["SEO", "PPC", "Email Marketing"],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "CodeBrit - Digital Solutions",
    title: "UI/UX Designing",
    text: "We design intuitive, visually appealing interfaces that captivate users and enhance engagement across all digital platforms.",
    lists: ["Wireframes", "Prototypes", "User Journey"],
  },
  {
    id: 5,
    img: ser_img_5,
    subtitle: "CodeBrit - Digital Solutions",
    title: "Branding",
    text: "Build a strong brand identity with strategic storytelling, visual design, and consistent messaging that drives recognition.",
    lists: ["Logo", "Visual Identity", "Brand Strategy"],
  },
  {
    id: 6,
    img: ser_img_6,
    subtitle: "CodeBrit - Digital Solutions",
    title: "Hosting Solutions",
    text: "Secure, high-performance hosting with 99.9% uptime, fast speeds, and full technical support for your business success.",
    lists: ["Shared Hosting", "Cloud Hosting", "Managed Hosting"],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/contact"
                        >
                          <span className="zikzak-content">
                            Get In <br /> Touch
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
