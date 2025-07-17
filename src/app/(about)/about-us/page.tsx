import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/pages/about/about-us";

export const metadata: Metadata = {
  title: "Codebrit | Creative Agency In UK - About us page",
};

const AboutUsPage = () => {
  return <AboutUsMain />;
};

export default AboutUsPage;
