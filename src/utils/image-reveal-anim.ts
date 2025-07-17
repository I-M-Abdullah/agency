import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function imageRevealAnimation() {
  const targets = document.querySelectorAll<HTMLElement>(".tp_img_reveal img");

  // Set initial transform scale
  gsap.set(targets, {
    scaleX: 0,
    transformOrigin: "left center",
    display: "block",
  });

  targets.forEach((img) => {
    gsap.to(img, {
      scaleX: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
}

export { imageRevealAnimation };
