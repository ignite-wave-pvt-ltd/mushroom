import React, { useEffect, useRef } from "react";

const MushroomHero = () => {
  const heroRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Simple fade-in animation on mount
    const elements = [heroRef.current, taglineRef.current, ctaRef.current];
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.remove("opacity-0");
          el.classList.add("opacity-100");
        }, index * 200);
      }
    });
  }, []);

  return (
    <section
      className="min-h-screen bg-[#f5f7f3] relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating mushroom shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-[#a5b48c] rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-[#c28f5b] rounded-full opacity-25 animate-float-medium"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-[#5a6b3b] rounded-full opacity-15 animate-float-fast"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern"></div>
      </div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-8">
            <div
              ref={taglineRef}
              className="opacity-0 transition-opacity duration-1000 ease-out"
            >
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span
                  className="text-[#2a3a1f] block mb-4"
                  style={{ color: "var(--color-heading)" }}
                >
                  Fresh Organic
                </span>
                <span
                  className="text-[#5a6b3b]"
                  style={{ color: "var(--color-primary)" }}
                >
                  Mushrooms
                </span>
                <span className="block text-[#333333] mt-2 text-3xl lg:text-4xl font-light">
                  Grown Sustainably
                </span>
              </h1>

              <p
                className="text-xl text-[#7a7a7a] mt-6 leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                Discover the finest selection of organic mushrooms, cultivated
                with care and respect for nature. From farm to table, experience
                the pure taste of sustainable farming.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 opacity-0 transition-opacity duration-1000 ease-out delay-300"
            >
              <button
                className="px-8 py-4 bg-[#5a6b3b] text-white rounded-lg font-semibold text-lg hover:bg-[#4a5a2f] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: "var(--color-primary)",
                  boxShadow: "0 4px 14px 0 rgba(90, 107, 59, 0.2)",
                }}
                onClick={() => { window.location.href = "/shop-now"; }
                }
              >
                Shop Now
              </button>
              <button
                className="px-8 py-4 border-2 border-[#5a6b3b] text-[#5a6b3b] rounded-lg font-semibold text-lg hover:bg-[#5a6b3b] hover:text-white transition-all duration-300"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}
                onClick={() => { window.location.href = "/learn"; }
                }
              >
                Learn Cultivation
              </button>
              {/* <button
                className="px-8 py-4 text-[#5a6b3b] rounded-lg font-semibold text-lg hover:bg-[#f0f2ec] transition-all duration-300"
                style={{ color: "var(--color-primary)" }}
              >
                Explore Varieties →
              </button> */}
            </div>
          </div>

          {/* Image Section */}
          <div
            ref={heroRef}
            className="opacity-0 transition-opacity duration-1000 ease-out delay-100 relative"
          >
            <div className="relative">
              {/* Main mushroom image container */}
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#a5b48c] to-[#5a6b3b] flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-secondary), var(--color-primary))",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dzrc9ejln/image/upload/v1763381805/Gemini_Generated_Image_sieuz2sieuz2sieu_be9cxg.png"
                    alt=""
                  />
                  {/* Mushroom illustration placeholder */}
                  {/* <div className="text-white text-center">
                    <div className="w-32 h-40 bg-white/20 rounded-full mx-auto mb-4 relative">
                      <div className="w-48 h-20 bg-white/30 rounded-full absolute -top-10 -left-8"></div>
                    </div>
                    <p className="text-lg font-semibold">Mushroom Farm Image</p>
                  </div> */}
                </div>
              </div>

              {/* Floating elements around the image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#c28f5b] rounded-full opacity-80 animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#a5b48c] rounded-full opacity-60 animate-bounce-slow"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className="w-6 h-10 border-2 border-[#5a6b3b] rounded-full flex justify-center"
          style={{ borderColor: "var(--color-primary)" }}
        >
          <div
            className="w-1 h-3 bg-[#5a6b3b] rounded-full mt-2"
            style={{ backgroundColor: "var(--color-primary)" }}
          ></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.1);
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(90deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(90, 107, 59, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(90, 107, 59, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default MushroomHero;
