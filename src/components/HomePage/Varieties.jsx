import React from "react";

const MushroomVarieties = () => {
  const varieties = [
    {
      name: "Milky Mushroom",
      description:
        "Creamy white mushrooms with a mild, pleasant flavor and firm texture. Excellent for curries, stir-fries, and traditional Indian dishes. Known for their high nutritional value.",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763382942/Gemini_Generated_Image_sveagsveagsveags_1_fzsmkk.png",
      color: "from-white to-gray-50",
      features: ["Mild Flavor", "High Nutrition", "Firm Texture"],
    },
    {
      name: "Oyster Mushroom",
      description:
        "Delicate flavor with a velvety texture. Perfect for stir-fries, soups, and vegan dishes. Fast-growing and highly versatile with multiple color varieties.",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384084/Gemini_Generated_Image_9f6job9f6job9f6j_ftentn.png",
      color: "from-purple-50 to-purple-100",
      features: ["Mild Flavor", "Fast Growing", "High Yield"],
    },
    {
      name: "Button Mushroom",
      description:
        "Classic white mushrooms with a firm texture and mild taste. Ideal for everyday cooking, salads, and beginner growers. The most commonly cultivated mushroom worldwide.",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384164/button_bpxw3t.png",
      color: "from-white to-gray-50",
      features: ["Mild Taste", "Beginner Friendly", "Versatile"],
    },
    {
      name: "Shiitake Mushroom",
      description:
        "Rich, savory flavor with meaty texture. Known for immune-boosting properties and umami taste in Asian cuisine. Popular in both fresh and dried forms.",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384261/shiitake_nwoorw.png",
      color: "from-amber-50 to-amber-100",
      features: ["Umami Flavor", "Medicinal", "Meaty Texture"],
    },
    {
      name: "Paddy Straw Mushroom",
      description:
        "Tender mushrooms with a delicate flavor, traditionally grown on rice straw. Perfect for Asian stir-fries, soups, and tropical cuisine. Fast-growing in warm conditions.",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384337/paddy_straw_ikqq6j.png",
      color: "from-green-50 to-green-100",
      features: ["Delicate Flavor", "Fast Growing", "Tropical"],
    },
    {
      name: "King Oyster Mushroom",
      description:
        "Large, meaty mushrooms with thick stems and mild flavor. Excellent for grilling, roasting, and as vegan scallop alternatives. Known for their firm texture.",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384409/King%20Oyster%20Mushroom.png",
      color: "from-blue-50 to-blue-100",
      features: ["Meaty Texture", "Grill Friendly", "Large Size"],
    },
    {
      name: "Enoki Mushroom",
      description:
        "Long, thin mushrooms with tiny caps and crisp texture. Mild flavor perfect for soups, hot pots, and salads. Adds beautiful visual appeal to dishes.",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384502/Enoki_Mushroom_xupdh8.png",
      color: "from-yellow-50 to-yellow-100",
      features: ["Crisp Texture", "Soup Friendly", "Visual Appeal"],
    },
    {
      name: "Wood Ear Mushroom",
      description:
        "Crunchy, gelatinous texture with mild flavor. Essential in Asian cuisine for soups and stir-fries. Known for blood circulation benefits and unique texture.",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384978/Wood%20Ear%20Mushroom.png",
      color: "from-gray-100 to-gray-200",
      features: ["Crunchy Texture", "Blood Health", "Asian Cuisine"],
    },
    {
      name: "Lion's Mane Mushroom",
      description:
        "Unique brain-shaped mushroom with seafood-like flavor. Celebrated for cognitive benefits and nerve regeneration. Excellent for brain health and mental clarity.",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763385059/Lion_s_Mane_Mushroom_lrugtx.png",
      color: "from-indigo-50 to-indigo-100",
      features: ["Brain Health", "Seafood Flavor", "Neuroprotective"],
    },
  ];

  return (
    <section
      id="varieties"
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
            Our Mushroom Varieties
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "var(--color-text)" }}
          >
            Discover our diverse collection of organic mushrooms, each with
            unique flavors, textures, and health benefits.
          </p>
        </div>

        {/* Varieties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {varieties.map((variety, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundColor: "white",
                border: "1px solid rgba(47, 79, 79, 0.1)",
              }}
            >
              {/* Image Section */}
              <div
                className={`h-58 bg-gradient-to-br ${variety.color} relative overflow-hidden flex items-center justify-center`}
              >
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                  <img src={variety.image} alt="" />
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(184, 134, 11, 0.1)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-300"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    👁️
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-3 group-hover:transform group-hover:translate-x-2 transition-transform duration-300"
                  style={{ color: "var(--color-primary)" }}
                >
                  {variety.name}
                </h3>

                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: "var(--color-text)" }}
                >
                  {variety.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {variety.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "rgba(85, 107, 47, 0.1)",
                        color: "var(--color-secondary)",
                        border: "1px solid rgba(85, 107, 47, 0.2)",
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* View More Button */}
                <button
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-300 group-hover:transform group-hover:scale-105 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: "rgba(184, 134, 11, 0.1)",
                    color: "var(--color-accent)",
                    border: "2px solid transparent",
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
                  View More
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-pointer"
            style={{
              backgroundColor: "rgba(47, 79, 79, 0.05)",
              border: "2px dashed rgba(47, 79, 79, 0.2)",
            }}
          >
            <span
              className="text-lg font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              Looking for something specific?
            </span>
            <button
              className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "white",
              }}
              onClick={() => { window.location.href = "/contact-us"; }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .group:hover {
          transform: translateY(-8px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default MushroomVarieties;
