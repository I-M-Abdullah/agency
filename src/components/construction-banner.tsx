import React from "react";

const ConstructionBanner = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-12 z-50 overflow-hidden"
      style={{ backgroundColor: "#EB3236" }}
    >
      <div className="flex items-center h-full animate-marquee">
        <div className="flex items-center space-x-16 text-white font-medium marquee-content">
          <span>
            🛠️ Under Construction — We are rebranding to serve you better. Enjoy
            our fresh new look as we evolve!
          </span>
          <span>
            We are rebranding to serve you better — enjoy our new look as we
            evolve!
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
          white-space: nowrap;
        }

        .marquee-content {
          white-space: nowrap;
          min-width: 100%;
          font-size: 16px; /* slightly smaller for mobile */
        }

        @media (max-width: 640px) {
          .marquee-content {
            font-size: 14px; /* smaller on small screens */
          }
        }

        body {
          padding-top: 3rem;
        }
      `}</style>
    </div>
  );
};

export default ConstructionBanner;
