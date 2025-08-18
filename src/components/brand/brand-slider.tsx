"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-01/brand/1.png";
import b_2 from "@/assets/img/home-01/brand/2.png";
import b_3 from "@/assets/img/home-01/brand/3.png";
import b_4 from "@/assets/img/home-01/brand/4.png";
import b_5 from "@/assets/img/home-01/brand/5.png";
import b_6 from "@/assets/img/home-01/brand/6.png";

const brand_images = [
  b_1,
  b_2,
  b_3,
  b_4,
  b_5,
  b_6,
  b_1,
  b_2,
  b_3,
  b_4,
  b_5,
  b_6,
  b_1,
  b_2,
  b_3,
  b_4,
  b_5,
  b_6,
];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix w-[400px] mx-auto">
      <Marquee speed={100} loop={0} className="brand-wrapper">
        {brand_images.map((b, i) => (
          <div
            key={i}
            className="tp-brand-item w-[100px] h-[80px] flex items-center justify-center dark:border-gray-600 mx-2 grayscale hover:grayscale-0 transition duration-300 rounded-md"
          >
            <Image
              src={b}
              alt={`Brand ${(i % 6) + 1}`}
              className="object-contain"
              width={120}
              height={120}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
