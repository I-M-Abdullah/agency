import React, { useEffect } from "react";
import LineTextFour from "../line-text/line-text-4";
// images
import p_img_1 from "@/assets/img/home-05/project/project-4.jpg";
import p_img_2 from "@/assets/img/home-05/project/project-5.jpg";
import p_img_3 from "@/assets/img/home-05/project/project-6.jpg";
import p_img_4 from "@/assets/img/home-05/project/project-7.jpg";
import p_img_5 from "@/assets/img/home-05/project/project-8.jpg";
import p_img_6 from "@/assets/img/home-05/project/project-9.jpg";
import { imageRevealAnimation } from "@/utils/image-reveal-anim";

const project_data = [
  {
    id: 1,
    title: "Art Direction",
    category: "Branding",
    img: p_img_1,
    year: 2024,
  },
  {
    id: 2,
    title: "Petit Navire",
    category: "Branding",
    img: p_img_2,
    year: 2024,
  },
  { id: 3, title: "Big dream", category: "Branding", img: p_img_3, year: 2024 },
  { id: 4, title: "The Stage", category: "Branding", img: p_img_4, year: 2024 },
  { id: 5, title: "Big dream", category: "Branding", img: p_img_5, year: 2024 },
  { id: 6, title: "Sed Lectus", category: "Concept", img: p_img_6, year: 2024 },
];

export default function ProjectFive({ style_2 = true }) {
  useEffect(() => {
    imageRevealAnimation();
  }, []);

  return (
    <div className="tp-project-5-2-area pb-130 tp-project-5-2-pt black-bg">
      <div className="row">
        <div className="col-xl-12">
          <LineTextFour />
        </div>
      </div>

      <div className="container">
        <div className="row gx-140">
          {project_data.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
              <div
                className="tp-project-5-2-thumb fix mb-140 p-relative not-hide-cursor"
                data-cursor="View<br>Demo"
              >
                <div className="tp_img_reveal">
                  <img
                    src={item.img.src}
                    alt={item.title}
                    style={{
                      width: "800px",
                      height: "300px",
                      display: "block",
                      borderRadius: "12px",
                    }}
                  />
                </div>

                <div className="tp-project-5-2-content tp_fade_anim"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
