"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./header-menus";

import logo_1 from "@/assets/img/logo/logo.png";
import logo_2 from "@/assets/img/logo/logo-white.png";
import useSticky from "@/hooks/use-sticky";
import MobileOffcanvasTwo from "@/components/offcanvas/mobile-offcanvas-2";

export default function HeaderFour() {
  const { sticky, headerRef, headerFullWidth, adjustMenuBackground } =
    useSticky();
  const [openCartMini, setOpenCartMini] = React.useState(false);
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);
  useEffect(() => {
    headerFullWidth();
    adjustMenuBackground();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`tp-header-3-area mt-35 z-index-5 ${
            sticky ? "header-sticky" : ""
          } mobile-header-spacing`}
        >
          <span className="menu-bg"></span>
          <div className="container container-1740">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo tp-header-3-logo">
                  <Link className="logo-1" href="/">
                    <Image src={logo_1} alt="logo" />
                  </Link>
                  <Link className="logo-2" href="/">
                    <Image src={logo_2} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-xl-block">
                <div className="tp-header-3-menu-wrap text-center">
                  <div className="tp-header-3-menu-box d-inline-flex align-items-center justify-content-between">
                    <div className="tp-header-3-menu header-main-menu">
                      <nav className="tp-main-menu-content">
                        {/* header menus */}
                        <HeaderMenus />
                        {/* header menus */}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-3-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-3-social d-none d-sm-block">
                    <a
                      href="https://x.com/CodebritD37757"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                        X
                      </span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61566170519036">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/codebritdigital/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/codebrit-digital/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                  <button
                    onClick={() => setOpenOffCanvas(true)}
                    className="tp-header-3-bar tp-offcanvas-open-btn d-xl-none"
                  >
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileOffcanvasTwo
        openOffcanvas={openOffCanvas}
        setOpenOffcanvas={setOpenOffCanvas}
      />
    </>
  );
}
