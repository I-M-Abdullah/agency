import React from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/inner-service/hero/hero-1.jpg";

export default function ServiceHero() {
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation">
                Experience Next-Level <br />
                Services
              </h4>
              <p className="tp_fade_bottom">
                Delivering innovative digital solutions with precision and
                consistency, empowering your business to thrive in a connected
                world.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box">
                <Image
                  data-speed=".7"
                  src={ser_hero}
                  alt="ser_hero-img"
                  style={{ width: "1200px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
