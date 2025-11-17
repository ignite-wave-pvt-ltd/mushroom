import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ProductsPreview = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const varieties = [
    {
      id: 1,
      name: "Milky Mushroom",
      description:
        "Creamy white mushrooms with a mild, pleasant flavor and firm texture. Excellent for curries, stir-fries, and traditional Indian dishes. Known for their high nutritional value.",
      price: 299,
      unit: "per 500g",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763382942/Gemini_Generated_Image_sveagsveagsveags_1_fzsmkk.png",
      features: ["Mild Flavor", "High Nutrition", "Firm Texture"],
      category: "Fresh Mushrooms",
    },
    {
      id: 2,
      name: "Oyster Mushroom",
      description:
        "Delicate flavor with a velvety texture. Perfect for stir-fries, soups, and vegan dishes. Fast-growing and highly versatile with multiple color varieties.",
      price: 249,
      unit: "per 500g",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384084/Gemini_Generated_Image_9f6job9f6job9f6j_ftentn.png",
      features: ["Mild Flavor", "Fast Growing", "High Yield"],
      category: "Fresh Mushrooms",
    },
    {
      id: 3,
      name: "Button Mushroom",
      description:
        "Classic white mushrooms with a firm texture and mild taste. Ideal for everyday cooking, salads, and beginner growers. The most commonly cultivated mushroom worldwide.",
      price: 199,
      unit: "per 500g",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384164/button_bpxw3t.png",
      features: ["Mild Taste", "Beginner Friendly", "Versatile"],
      category: "Fresh Mushrooms",
    },
    {
      id: 4,
      name: "Shiitake Mushroom",
      description:
        "Rich, savory flavor with meaty texture. Known for immune-boosting properties and umami taste in Asian cuisine. Popular in both fresh and dried forms.",
      price: 349,
      unit: "per 500g",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384261/shiitake_nwoorw.png",
      features: ["Umami Flavor", "Medicinal", "Meaty Texture"],
      category: "Fresh Mushrooms",
    },
    {
      id: 5,
      name: "Paddy Straw Mushroom",
      description:
        "Tender mushrooms with a delicate flavor, traditionally grown on rice straw. Perfect for Asian stir-fries, soups, and tropical cuisine. Fast-growing in warm conditions.",
      price: 279,
      unit: "per 500g",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384337/paddy_straw_ikqq6j.png",
      features: ["Delicate Flavor", "Fast Growing", "Tropical"],
      category: "Fresh Mushrooms",
    },
    {
      id: 6,
      name: "King Oyster Mushroom",
      description:
        "Large, meaty mushrooms with thick stems and mild flavor. Excellent for grilling, roasting, and as vegan scallop alternatives. Known for their firm texture.",
      price: 329,
      unit: "per 500g",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384409/King%20Oyster%20Mushroom.png",
      features: ["Meaty Texture", "Grill Friendly", "Large Size"],
      category: "Fresh Mushrooms",
    },
    {
      id: 7,
      name: "Enoki Mushroom",
      description:
        "Long, thin mushrooms with tiny caps and crisp texture. Mild flavor perfect for soups, hot pots, and salads. Adds beautiful visual appeal to dishes.",
      price: 179,
      unit: "per 200g pack",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384502/Enoki_Mushroom_xupdh8.png",
      features: ["Crisp Texture", "Soup Friendly", "Visual Appeal"],
      category: "Fresh Mushrooms",
    },
    {
      id: 8,
      name: "Wood Ear Mushroom",
      description:
        "Crunchy, gelatinous texture with mild flavor. Essential in Asian cuisine for soups and stir-fries. Known for blood circulation benefits and unique texture.",
      price: 219,
      unit: "per 500g",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763384978/Wood%20Ear%20Mushroom.png",
      features: ["Crunchy Texture", "Blood Health", "Asian Cuisine"],
      category: "Fresh Mushrooms",
    },
    {
      id: 9,
      name: "Lion's Mane Mushroom",
      description:
        "Unique brain-shaped mushroom with seafood-like flavor. Celebrated for cognitive benefits and nerve regeneration. Excellent for brain health and mental clarity.",
      price: 399,
      unit: "per 500g",
      image:
        "https://res.cloudinary.com/dzrc9ejln/image/upload/v1763385059/Lion_s_Mane_Mushroom_lrugtx.png",
      features: ["Brain Health", "Seafood Flavor", "Neuroprotective"],
      category: "Fresh Mushrooms",
    },
  ];

  const categories = [
    "All Products",
    "Fresh Mushrooms",
    "Grow Kits",
    "Supplements",
  ];

  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts =
    activeCategory === "All Products"
      ? varieties
      : varieties.filter((product) => product.category === activeCategory);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    toast.success(`${product.name} added to cart!`);
  };

  const updateQuantity = (productId, change) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = item.quantity + change;
            if (newQuantity <= 0) {
              return null;
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    toast.success("Item removed from cart");
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) return;

    const phoneNumber = "9505970300";
    let message = "Hello! I would like to order:\n\n";

    cart.forEach((item) => {
      message += `• ${item.name} - ${item.quantity} x ₹${item.price} = ₹${
        item.price * item.quantity
      }\n`;
    });

    message += `\nTotal: ₹${getTotalPrice()}\n\nPlease confirm my order.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/+91${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="shop" className="py-16 px-6 bg-white">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#10B981",
            color: "#fff",
          },
        }}
      />

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Mushroom Varieties
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
        </div>

        {/* Cart Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setShowCart(true)}
            className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium shadow-md"
          >
            <span>🛒</span>
            <span>
              Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
            </span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                activeCategory === category
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Product Image */}
              <div className="h-48 bg-gray-50 rounded-t-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <button
                    onClick={() => openModal(product)}
                    className="text-gray-400 hover:text-amber-600 transition-colors"
                    title="View Details"
                  >
                    👁️
                  </button>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-gray-900">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      / {product.unit}
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium shadow-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Need Custom Orders?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us for bulk orders, wholesale pricing, and custom mushroom
              blends.
            </p>
            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedProduct.name}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="h-64 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-gray-700 mb-4">
                {selectedProduct.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProduct.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-full border border-amber-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{selectedProduct.price}
                  </span>
                  <span className="text-gray-500 ml-1">
                    / {selectedProduct.unit}
                  </span>
                </div>
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    closeModal();
                  }}
                  className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium shadow-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-md shadow-2xl border border-gray-200">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Your Cart</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors text-xl"
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4 text-gray-300">🛒</div>
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Add some delicious mushrooms!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Cart Items - Fixed height with single scroll */}
                  <div className="max-h-80 overflow-y-auto space-y-3">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-gray-600">
                            ₹{item.price} / {item.unit}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-300">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded-l-lg transition-colors"
                              >
                                -
                              </button>
                              <span className="font-medium w-8 text-center text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded-r-lg transition-colors"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 transition-colors p-1"
                              title="Remove item"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total and Checkout */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-gray-900">
                        Total:
                      </span>
                      <span className="text-2xl font-bold text-amber-600">
                        ₹{getTotalPrice()}
                      </span>
                    </div>
                    <button
                      onClick={sendWhatsAppOrder}
                      className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>📱</span>
                      <span>Order via WhatsApp</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsPreview;
