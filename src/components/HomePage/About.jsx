import React from "react";

const AboutSection = () => {
  const features = [
    {
      icon: "🌱",
      title: "100% Organic",
      description: "No pesticides, no chemicals, just pure natural growth",
    },
    {
      icon: "🏆",
      title: "Gourmet Quality",
      description: "Premium varieties selected for flavor and nutrition",
    },
    {
      icon: "💚",
      title: "Medicinal Properties",
      description: "Harnessing the healing power of functional mushrooms",
    },
    {
      icon: "🌍",
      title: "Sustainable Farming",
      description: "Eco-friendly practices that respect our planet",
    },
  ];

  const stats = [
    { number: "50+", label: "Mushroom Varieties" },
    { number: "15", label: "Years of Experience" },
    { number: "10K+", label: "Happy Customers" },
    { number: "100%", label: "Organic Certified" },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--color-heading)" }}
          >
            Our Mushroom Story
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Right Image */}
          <div className="relative">
            <div
              className="w-full h-80 lg:h-96 rounded-2xl shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: "var(--color-secondary)" }}
            >
              <img
                src="https://res.cloudinary.com/dzrc9ejln/image/upload/v1763382308/Gemini_Generated_Image_j6d7f3j6d7f3j6d7_qt3qyu.png"
                alt=""
              />
            </div>

            {/* Floating elements */}
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-20 animate-float"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-30 animate-float-delayed"
              style={{ backgroundColor: "var(--color-primary)" }}
            ></div>
          </div>
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Who We Are
              </h3>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "var(--color-text)" }}
              >
                We are a family-owned mushroom farm nestled in the heart of the
                forest, dedicated to cultivating the finest organic mushrooms.
                With generations of farming heritage, we combine traditional
                wisdom with modern sustainable practices.
              </p>
            </div>

            <div>
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Our Mission
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text)" }}
              >
                To bring the incredible benefits of mushrooms to every household
                while preserving our natural ecosystems. We believe in growing
                food that nourishes both people and the planet.
              </p>
            </div>
          </div>
        </div>

        {/* Why We're Special */}
        <div className="mb-20">
          <h3
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ color: "var(--color-heading)" }}
          >
            Why Our Mushrooms Are Special
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: "rgba(47, 79, 79, 0.05)",
                  border: "1px solid rgba(47, 79, 79, 0.1)",
                }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--color-primary)" }}
                >
                  {feature.title}
                </h4>
                <p style={{ color: "var(--color-text)" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="rounded-3xl p-12 text-center mb-16"
          style={{
            backgroundColor: "var(--color-primary)",
            background:
              "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainable Practices */}
        <div className="text-center max-w-3xl mx-auto">
          <h3
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "var(--color-heading)" }}
          >
            Sustainable Excellence
          </h3>
          <p
            className="text-xl leading-relaxed mb-8"
            style={{ color: "var(--color-text)" }}
          >
            We practice zero-waste farming, using spent mushroom substrate to
            enrich our gardens and partnering with local communities. Our
            packaging is 100% compostable, and we're committed to carbon-neutral
            operations.
          </p>
          <button
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "white",
            }}
          >
            Visit Our Farm
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
