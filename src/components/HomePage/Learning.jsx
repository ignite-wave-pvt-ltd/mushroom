import React from "react";

const CultivationLearning = () => {
  const learningPaths = [
    {
      title: "Beginner's Guide",
      description:
        "Start your mushroom growing journey with our comprehensive beginner course",
      icon: "🎯",
      level: "Beginner",
      duration: "2 weeks",
      lessons: 8,
      features: ["Basic Setup", "Choosing Varieties", "Common Mistakes"],
    },
    {
      title: "Indoor Farming",
      description:
        "Learn how to grow mushrooms indoors with limited space and equipment",
      icon: "🏠",
      level: "Intermediate",
      duration: "3 weeks",
      lessons: 12,
      features: [
        "Space Optimization",
        "Climate Control",
        "Harvesting Techniques",
      ],
    },
    {
      title: "Commercial Growing",
      description:
        "Scale your operation and learn commercial mushroom farming techniques",
      icon: "📈",
      level: "Advanced",
      duration: "4 weeks",
      lessons: 15,
      features: ["Business Planning", "Scale Up", "Market Strategies"],
    },
  ];

  const tutorials = [
    {
      title: "Setting Up Your Grow Room",
      image: "🔧",
      readTime: "15 min",
      category: "Equipment",
      popular: true,
    },
    {
      title: "Substrate Preparation Guide",
      image: "🌾",
      readTime: "20 min",
      category: "Techniques",
      popular: true,
    },
    {
      title: "Pest & Contamination Control",
      image: "🐛",
      readTime: "12 min",
      category: "Troubleshooting",
      popular: false,
    },
    {
      title: "Harvesting & Storage Methods",
      image: "⏰",
      readTime: "10 min",
      category: "Best Practices",
      popular: true,
    },
  ];

  const equipment = [
    { name: "Grow Tents", icon: "🎪", essential: true },
    { name: "Humidity Controllers", icon: "💧", essential: true },
    { name: "Sterilization Equipment", icon: "🔥", essential: true },
    { name: "Spawn Bags", icon: "🛍️", essential: false },
    { name: "Misting Systems", icon: "🌫️", essential: false },
    { name: "Temperature Monitors", icon: "🌡️", essential: true },
  ];

  return (
    <section
      id="learn"
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
            Learn Mushroom Cultivation
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--color-text)" }}
          >
            Master the art of mushroom growing with our comprehensive guides,
            tutorials, and step-by-step courses. From hobbyist to commercial
            grower, we've got you covered.
          </p>
        </div>

        {/* Learning Paths */}
        <div className="mb-20">
          <h3
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--color-primary)" }}
          >
            Choose Your Learning Path
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="group rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
                style={{
                  backgroundColor: "white",
                  border: "2px solid rgba(47, 79, 79, 0.1)",
                }}
              >
                {/* Level Badge */}
                <div
                  className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor:
                      path.level === "Beginner"
                        ? "rgba(85, 107, 47, 0.1)"
                        : path.level === "Intermediate"
                        ? "rgba(184, 134, 11, 0.1)"
                        : "rgba(47, 79, 79, 0.1)",
                    color:
                      path.level === "Beginner"
                        ? "var(--color-secondary)"
                        : path.level === "Intermediate"
                        ? "var(--color-accent)"
                        : "var(--color-primary)",
                  }}
                >
                  {path.level}
                </div>

                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {path.icon}
                </div>

                <h4
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--color-primary)" }}
                >
                  {path.title}
                </h4>

                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "var(--color-text)" }}
                >
                  {path.description}
                </p>

                {/* Course Info */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-sm">
                    <span
                      className="font-semibold"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {path.duration}
                    </span>
                    <span style={{ color: "var(--color-muted)" }}> • </span>
                    <span style={{ color: "var(--color-muted)" }}>
                      {path.lessons} lessons
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {path.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      ></div>
                      <span style={{ color: "var(--color-text)" }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-300 group-hover:transform group-hover:scale-105 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: "rgba(184, 134, 11, 0.1)",
                    color: "var(--color-accent)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "var(--color-accent)";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "rgba(184, 134, 11, 0.1)";
                    e.target.style.color = "var(--color-accent)";
                  }}
                >
                  Start This Path
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Tutorials Section */}
          <div>
            <h3
              className="text-3xl font-bold mb-8"
              style={{ color: "var(--color-primary)" }}
            >
              Latest Tutorials & Guides
            </h3>

            <div className="space-y-6">
              {tutorials.map((tutorial, index) => (
                <div
                  key={index}
                  className="group rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-102 hover:shadow-lg cursor-pointer flex items-start gap-4"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid rgba(47, 79, 79, 0.1)",
                  }}
                >
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {tutorial.image}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4
                        className="text-lg font-semibold group-hover:transform group-hover:translate-x-1 transition-transform duration-300"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {tutorial.title}
                      </h4>
                      {tutorial.popular && (
                        <span
                          className="px-2 py-1 rounded text-xs font-bold text-white"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        >
                          HOT
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <span
                        className="px-2 py-1 rounded"
                        style={{
                          backgroundColor: "rgba(85, 107, 47, 0.1)",
                          color: "var(--color-secondary)",
                        }}
                      >
                        {tutorial.category}
                      </span>
                      <span style={{ color: "var(--color-muted)" }}>
                        {tutorial.readTime} read
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Section */}
          <div>
            <h3
              className="text-3xl font-bold mb-8"
              style={{ color: "var(--color-primary)" }}
            >
              Essential Equipment
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {equipment.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl p-4 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg text-center group"
                  style={{
                    backgroundColor: "white",
                    border: `2px solid ${
                      item.essential
                        ? "var(--color-accent)"
                        : "rgba(47, 79, 79, 0.1)"
                    }`,
                  }}
                >
                  <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4
                    className="font-semibold text-sm mb-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {item.name}
                  </h4>
                  {item.essential && (
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(184, 134, 11, 0.1)",
                        color: "var(--color-accent)",
                      }}
                    >
                      Essential
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Start CTA */}
            <div
              className="mt-8 rounded-2xl p-6 text-center"
              style={{
                backgroundColor: "rgba(47, 79, 79, 0.05)",
                border: "2px dashed rgba(47, 79, 79, 0.2)",
              }}
            >
              <h4
                className="text-xl font-bold mb-2"
                style={{ color: "var(--color-primary)" }}
              >
                Ready to Start?
              </h4>
              <p
                className="mb-4 text-sm"
                style={{ color: "var(--color-text)" }}
              >
                Get our complete starter kit with all essential equipment
              </p>
              <button
                className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "white",
                }}
                onClick={() => { window.location.href = "/contact-us"; }}
              >
                Get Starter Kit
              </button>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div
            className="rounded-3xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
            style={{
              backgroundColor: "var(--color-primary)",
              background:
                "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
            }}
          >
            {/* Floating elements */}
            <div
              className="absolute top-4 left-4 w-16 h-16 rounded-full opacity-20 animate-float"
              style={{ backgroundColor: "var(--color-accent)" }}
            ></div>
            <div
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full opacity-30 animate-float-delayed"
              style={{ backgroundColor: "white" }}
            ></div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Start Your Mushroom Farming Journey Today
            </h3>
            <p className="text-xl mb-8 text-white opacity-90 max-w-2xl mx-auto">
              Join thousands of successful growers who started with our
              comprehensive learning platform
            </p>
            <button
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-3 mx-auto group"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "white",
                boxShadow: "0 8px 25px rgba(184, 134, 11, 0.4)",
              }}
              onClick={() => { window.location.href = "/learn"; } }
            >
              Start Learning Mushroom Farming
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
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

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default CultivationLearning;
