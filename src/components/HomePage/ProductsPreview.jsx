import React, { useState } from "react";

const ProductsPreview = () => {
  const [cart, setCart] = useState({});
  const [quantities, setQuantities] = useState({});

  const products = [
    {
      id: 1,
      name: "Fresh Oyster Mushrooms",
      category: "Fresh Mushrooms",
      price: 12.99,
      image: "🦪",
      unit: "per lb",
      description:
        "Freshly harvested, organic oyster mushrooms with delicate flavor",
      features: ["Organic", "Same Day Harvest", "Vacuum Packed"],
      popular: true,
    },
    {
      id: 2,
      name: "Mushroom Grow Kit",
      category: "Grow Kits",
      price: 29.99,
      image: "📦",
      unit: "kit",
      description:
        "Everything you need to grow mushrooms at home. Just add water!",
      features: ["Beginner Friendly", "All Inclusive", "Guaranteed Growth"],
      popular: true,
    },
    {
      id: 3,
      name: "Shiitake Spawn",
      category: "Spawn",
      price: 18.5,
      image: "🌱",
      unit: "per bag",
      description:
        "High-quality shiitake mushroom spawn for commercial or home growing",
      features: ["High Yield", "Fast Colonization", "Premium Strain"],
      popular: false,
    },
    {
      id: 4,
      name: "Lion's Mane Powder",
      category: "Mushroom Powder",
      price: 24.99,
      image: "🦁",
      unit: "120g jar",
      description:
        "100% pure Lion's Mane mushroom powder for cognitive support",
      features: ["Brain Health", "100% Pure", "Easy to Use"],
      popular: true,
    },
    {
      id: 5,
      name: "Medicinal Mushroom Blend",
      category: "Supplements",
      price: 34.99,
      image: "💊",
      unit: "60 capsules",
      description:
        "Powerful blend of Reishi, Cordyceps, and Turkey Tail extracts",
      features: ["Immune Support", "Energy Boost", "Lab Tested"],
      popular: false,
    },
    {
      id: 6,
      name: "Mixed Mushroom Box",
      category: "Fresh Mushrooms",
      price: 22.99,
      image: "🎁",
      unit: "weekly box",
      description: "Curated selection of 3-4 seasonal mushroom varieties",
      features: ["Seasonal Selection", "Recipe Included", "Weekly Delivery"],
      popular: true,
    },
  ];

  const categories = [
    "All Products",
    "Fresh Mushrooms",
    "Grow Kits",
    "Spawn",
    "Mushroom Powder",
    "Supplements",
  ];

  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const addToCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + (quantities[productId] || 1),
    }));

    // Show feedback
    const button = document.getElementById(`add-to-cart-${productId}`);
    if (button) {
      button.textContent = "Added!";
      setTimeout(() => {
        button.textContent = "Add to Cart";
      }, 2000);
    }
  };

  const updateQuantity = (productId, change) => {
    setQuantities((prev) => {
      const current = prev[productId] || 1;
      const newQuantity = Math.max(1, current + change);
      return { ...prev, [productId]: newQuantity };
    });
  };

  return (
    <section
      id="shop"
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
            Shop Mushroom Products
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
          <p
            className="text-xl max-w-2xl mx-auto mb-12"
            style={{ color: "var(--color-text)" }}
          >
            Discover our premium selection of fresh mushrooms, grow kits, and
            wellness products. All grown with care and delivered fresh.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "text-white transform scale-105 shadow-lg"
                  : "hover:transform hover:scale-105"
              }`}
              style={{
                backgroundColor:
                  activeCategory === category
                    ? "var(--color-primary)"
                    : "rgba(47, 79, 79, 0.1)",
                color:
                  activeCategory === category
                    ? "white"
                    : "var(--color-primary)",
                border:
                  activeCategory === category
                    ? "2px solid var(--color-primary)"
                    : "2px solid rgba(47, 79, 79, 0.2)",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl relative"
              style={{
                backgroundColor: "white",
                border: "1px solid rgba(47, 79, 79, 0.1)",
              }}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div
                  className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  POPULAR
                </div>
              )}

              {/* Product Image */}
              <div
                className="h-48 relative overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: "rgba(85, 107, 47, 0.05)" }}
              >
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                  {product.image}
                </div>

                {/* Category Badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: "rgba(184, 134, 11, 0.1)",
                    color: "var(--color-accent)",
                  }}
                >
                  {product.category}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  {product.name}
                </h3>

                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: "var(--color-text)" }}
                >
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{
                        backgroundColor: "rgba(85, 107, 47, 0.1)",
                        color: "var(--color-secondary)",
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Quantity */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "var(--color-accent)" }}
                    >
                      ${product.price}
                    </span>
                    <span
                      className="text-sm ml-1"
                      style={{ color: "var(--color-muted)" }}
                    >
                      / {product.unit}
                    </span>
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(product.id, -1)}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:shadow"
                      style={{
                        backgroundColor: "rgba(47, 79, 79, 0.1)",
                        color: "var(--color-primary)",
                      }}
                    >
                      -
                    </button>
                    <span
                      className="w-8 text-center font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {quantities[product.id] || 1}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, 1)}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:shadow"
                      style={{
                        backgroundColor: "rgba(47, 79, 79, 0.1)",
                        color: "var(--color-primary)",
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  id={`add-to-cart-${product.id}`}
                  onClick={() => addToCart(product.id)}
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-2 group"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "white",
                    boxShadow: "0 4px 14px 0 rgba(184, 134, 11, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "var(--color-accent)";
                  }}
                >
                  <span>Add to Cart</span>
                  <span className="transform group-hover:scale-110 transition-transform duration-300">
                    🛒
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div
            className="inline-block p-8 rounded-3xl text-center max-w-2xl mx-auto"
            style={{
              backgroundColor: "rgba(47, 79, 79, 0.05)",
              border: "2px solid rgba(47, 79, 79, 0.1)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Can't Find What You're Looking For?
            </h3>
            <p className="mb-6" style={{ color: "var(--color-text)" }}>
              We offer custom mushroom blends, bulk orders, and wholesale
              pricing. Contact us for special requests!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                View All Products
              </button>
              <button
                className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 border-2"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}
              >
                Contact for Bulk Orders
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
