import React, { useState } from "react";

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Our Mushroom Farm",
      description:
        "Sustainable farming practices in our state-of-the-art facility",
      category: "Farm",
      image: "🏞️",
      featured: true,
    },
    {
      id: 2,
      title: "Harvesting Oyster Mushrooms",
      description: "Gentle hand-harvesting to preserve quality and freshness",
      category: "Harvesting",
      image: "👩‍🌾",
      featured: true,
    },
    {
      id: 3,
      title: "Mushroom Varieties Display",
      description: "Colorful assortment of our organic mushroom varieties",
      category: "Varieties",
      image: "🎨",
      featured: false,
    },
    {
      id: 4,
      title: "Laboratory & Spawn Room",
      description: "Sterile environment for spawn production and research",
      category: "Lab",
      image: "🔬",
      featured: true,
    },
    {
      id: 5,
      title: "Drying Process",
      description: "Low-temperature drying to preserve nutrients and flavor",
      category: "Processing",
      image: "🌡️",
      featured: false,
    },
    {
      id: 6,
      title: "Quality Control",
      description: "Rigorous inspection ensuring only the best reaches you",
      category: "Quality",
      image: "✅",
      featured: false,
    },
    {
      id: 7,
      title: "Packaging Facility",
      description: "Eco-friendly packaging for fresh mushroom delivery",
      category: "Processing",
      image: "📦",
      featured: false,
    },
    {
      id: 8,
      title: "Team at Work",
      description: "Our dedicated team caring for your mushrooms",
      category: "Team",
      image: "👥",
      featured: true,
    },
  ];

  const categories = [
    "All",
    "Farm",
    "Harvesting",
    "Varieties",
    "Lab",
    "Processing",
    "Quality",
    "Team",
  ];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="gallery"
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
            Farm Gallery
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--color-text)" }}
          >
            Take a visual journey through our organic mushroom farm. From
            cultivation to harvest, witness the care and passion that goes into
            every mushroom we grow.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "text-white transform scale-105 shadow-lg"
                  : "hover:transform hover:scale-105"
              }`}
              style={{
                backgroundColor:
                  activeFilter === category
                    ? "var(--color-primary)"
                    : "rgba(47, 79, 79, 0.1)",
                color:
                  activeFilter === category ? "white" : "var(--color-primary)",
                border:
                  activeFilter === category
                    ? "2px solid var(--color-primary)"
                    : "2px solid rgba(47, 79, 79, 0.2)",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
              style={{
                backgroundColor: "white",
                border: "1px solid rgba(47, 79, 79, 0.1)",
                minHeight: "300px",
              }}
              onClick={() => openModal(item)}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div
                  className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  FEATURED
                </div>
              )}

              {/* Category Badge */}
              <div
                className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "var(--color-primary)",
                }}
              >
                {item.category}
              </div>

              {/* Image Container */}
              <div
                className="h-48 relative overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: "rgba(85, 107, 47, 0.05)" }}
              >
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                  {item.image}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    👁️
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2 group-hover:transform group-hover:translate-x-2 transition-transform duration-300"
                  style={{ color: "var(--color-primary)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h3
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--color-primary)" }}
          >
            Our Growing Process Journey
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden lg:block"
              style={{ backgroundColor: "rgba(47, 79, 79, 0.2)" }}
            ></div>

            <div className="space-y-12 lg:space-y-0">
              {[
                {
                  step: 1,
                  title: "Spawn Production",
                  description:
                    "Creating pure mushroom culture in our sterile laboratory environment. We start with high-quality spores and develop them into vigorous spawn.",
                  icon: "🧫",
                  details:
                    "Sterile lab conditions • Quality spore selection • Optimal temperature control",
                },
                {
                  step: 2,
                  title: "Substrate Preparation",
                  description:
                    "Mixing and sterilizing the perfect growing medium using organic materials like straw, sawdust, and nutritional supplements.",
                  icon: "🌾",
                  details:
                    "Organic materials • Precision mixing • Complete sterilization",
                },
                {
                  step: 3,
                  title: "Inoculation",
                  description:
                    "Carefully introducing the mushroom spawn to the prepared substrate under controlled environmental conditions.",
                  icon: "🔬",
                  details:
                    "Controlled environment • Precision inoculation • Quality assurance",
                },
                {
                  step: 4,
                  title: "Incubation",
                  description:
                    "Maintaining optimal temperature and humidity for mycelium growth and colonization throughout the substrate.",
                  icon: "🌡️",
                  details:
                    "Temperature control • Humidity management • Regular monitoring",
                },
                {
                  step: 5,
                  title: "Fruiting",
                  description:
                    "Creating the perfect conditions for mushroom development with controlled light, humidity, and air exchange.",
                  icon: "🍄",
                  details:
                    "Light control • Fresh air exchange • Humidity optimization",
                },
                {
                  step: 6,
                  title: "Harvesting",
                  description:
                    "Hand-picking each mushroom at the perfect stage of maturity to ensure maximum flavor, texture, and nutritional value.",
                  icon: "👩‍🌾",
                  details:
                    "Hand harvesting • Quality selection • Perfect timing",
                },
              ].map((process, index) => (
                <div
                  key={process.step}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                    }`}
                  >
                    <div
                      className="rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group cursor-pointer"
                      style={{
                        backgroundColor: "white",
                        border: "2px solid rgba(47, 79, 79, 0.1)",
                      }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:transform group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        >
                          {process.step}
                        </div>
                        <h4
                          className="text-2xl font-bold group-hover:transform group-hover:translate-x-2 transition-transform duration-300"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {process.title}
                        </h4>
                      </div>
                      <p
                        className="mb-4 leading-relaxed text-lg"
                        style={{ color: "var(--color-text)" }}
                      >
                        {process.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <span
                          className="font-semibold"
                          style={{ color: "var(--color-secondary)" }}
                        >
                          Key Features:
                        </span>
                        <span style={{ color: "var(--color-text)" }}>
                          {process.details}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="lg:w-1/2 flex justify-center">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center text-4xl transition-all duration-300 hover:transform hover:scale-110 hover:shadow-2xl group"
                      style={{
                        backgroundColor: "rgba(184, 134, 11, 0.1)",
                        color: "var(--color-accent)",
                        border: "3px solid rgba(184, 134, 11, 0.2)",
                      }}
                    >
                      <span className="group-hover:transform group-hover:scale-110 transition-transform duration-300">
                        {process.icon}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
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
              Want to See Our Farm in Person?
            </h3>
            <p className="text-xl mb-8 text-white opacity-90 max-w-2xl mx-auto">
              Schedule a farm visit or virtual tour to experience our mushroom
              cultivation process firsthand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-3 group"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "white",
                }}
                onClick={() => {
                  window.location.href = "/contact-us";
                }}
              >
                🎥 Schedule Virtual Tour
              </button>
              <button
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 border-2 border-white text-white hover:bg-white hover:text-gray-800"
                onClick={() => {
                  window.location.href = "/contact-us";
                }}
              >
                📞 Book Farm Visit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  {selectedImage.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  style={{ color: "var(--color-primary)" }}
                >
                  ✕
                </button>
              </div>

              <div
                className="w-full h-64 md:h-96 rounded-xl mb-4 flex items-center justify-center text-8xl"
                style={{ backgroundColor: "rgba(85, 107, 47, 0.05)" }}
              >
                {selectedImage.image}
              </div>

              <p
                className="text-lg mb-4"
                style={{ color: "var(--color-text)" }}
              >
                {selectedImage.description}
              </p>

              <div className="flex justify-between items-center">
                <span
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: "rgba(184, 134, 11, 0.1)",
                    color: "var(--color-accent)",
                  }}
                >
                  {selectedImage.category}
                </span>
                <button
                  className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "white",
                  }}
                >
                  Download Image
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default GallerySection;
