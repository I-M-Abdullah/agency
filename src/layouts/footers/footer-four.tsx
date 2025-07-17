import React from "react";
import Image from "next/image";
import logo from "@/assets/img/logo/logo-white.png";
import { RightArrow, SvgBgSm } from "@/components/svg";
import Link from "next/link";

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Quick Links</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link href="/service">Services</Link>
                      </li>
                      <li>
                        <Link href="/">Blog</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Newsletter</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center">
                    <input type="text" placeholder="Your email address" />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr="#19191A" />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Logo and About */}
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-100">
                    We help businesses grow by delivering innovative digital
                    solutions tailored to your brand and audience.
                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/">
                    <Image src={logo} alt="Digital Agency Logo" />
                  </Link>
                  <p className="tp-footer-3-copyright">
                    © {new Date().getFullYear()} Codebrit Digital. <br /> All
                    rights reserved.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Contact + Social */}
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <a
                        href="https://maps.app.goo.gl/uKRDSZKtvac7opYX8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Unit 3A, Suite 5254 Hatton Garden, London EC1N 8DX,
                        United Kingdom
                      </a>
                    </span>
                  </div>
                  {/* <div className="tp-footer-2-contact-item">
                    <span>
                      P: <a href="tel:+447441916648">+44 7441 916648</a>
                    </span>
                    <span>
                      E:{" "}
                      <a href="mailto:hello@codebrit.co.uk">
                        hello@codebrit.co.uk
                      </a>
                    </span>
                    <span>
                      <i className="fa-regular fa-clock"></i> 9:00 AM – 5:30 PM
                    </span>
                    <br />
                  </div> */}
                  {/* <div className="tp-footer-2-contact-item">
                    <span>
                      <i className="fa-solid fa-phone"></i>{" "}
                      <a href="tel:+447441916648">+44 7441 916648</a>
                    </span>
                    <br />
                    <span>
                      <i className="fa-regular fa-envelope"></i>{" "}
                      <a href="mailto:hello@codebrit.co.uk">
                        hello@codebrit.co.uk
                      </a>
                    </span>
                    <br />
                    <span>
                      <i className="fa-regular fa-clock"></i> 9:00 AM – 5:30 PM
                    </span>
                    <br />
                    <span style={{ marginLeft: "1.25rem" }}>
                      <small>Monday – Friday (Closed on weekends)</small>
                    </span>
                  </div> */}
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <i className="fa-solid fa-phone me-2"></i>
                      <a href="tel:+447441916648">+44 7441 916648</a>
                    </span>
                    <br />
                    <span>
                      <i className="fa-regular fa-envelope me-2"></i>
                      <a href="mailto:hello@codebrit.co.uk">
                        hello@codebrit.co.uk
                      </a>
                    </span>
                    <br />
                    <span>
                      <i className="fa-regular fa-clock me-2"></i>
                      9:00 AM – 5:30 PM
                    </span>
                    <br />
                    <span style={{ marginLeft: "1.75rem" }}>
                      <small>Monday – Friday (Closed on weekends)</small>
                    </span>
                  </div>
                </div>

                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow Us</h4>
                  <div className="tp-footer-3-social">
                    <a
                      href="https://x.com/CodebritD37757"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                        X
                      </span>
                    </a>

                    <a
                      href="https://www.facebook.com/profile.php?id=61566170519036"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/codebritdigital/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
