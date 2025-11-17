import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: "📞",
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      action: "tel:+15551234567",
      color: "from-green-50 to-green-100",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: "+1 (555) 123-4567",
      description: "24/7 quick responses",
      action: "https://wa.me/15551234567",
      color: "from-green-50 to-emerald-100",
    },
    {
      icon: "📧",
      title: "Email Us",
      details: "hello@mushroomfarm.com",
      description: "We'll reply within 24 hours",
      action: "mailto:hello@mushroomfarm.com",
      color: "from-blue-50 to-blue-100",
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "123 Forest Lane, Green Valley",
      description: "Open for farm tours by appointment",
      action: "#map",
      color: "from-amber-50 to-amber-100",
    },
  ];

  const farmDetails = [
    {
      label: "Farm Address",
      value: "123 Organic Farm Road, Green Valley, CA 94201",
    },
    { label: "Business Hours", value: "Monday - Friday: 8:00 AM - 6:00 PM" },
    { label: "Weekend Hours", value: "Saturday: 9:00 AM - 4:00 PM" },
    { label: "Farm Tours", value: "Available by appointment only" },
    { label: "Wholesale Inquiries", value: "Call or email for bulk pricing" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container mx-auto max-w-6xl">
        <Navbar />
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--color-heading)" }}
          >
            Get In Touch
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-8 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          ></div>
          <p
            className="text-xl max-w-3xl mx-auto"
            style={{ color: "var(--color-text)" }}
          >
            Have questions about our mushrooms, farm tours, or wholesale orders?
            We'd love to hear from you. Reach out through any channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h3
              className="text-3xl font-bold mb-8"
              style={{ color: "var(--color-primary)" }}
            >
              Contact Information
            </h3>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="group block rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid rgba(47, 79, 79, 0.1)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: "rgba(184, 134, 11, 0.1)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {method.icon}
                    </div>
                    <div>
                      <h4
                        className="font-bold text-lg mb-1"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {method.title}
                      </h4>
                      <p
                        className="font-semibold mb-1"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {method.details}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {method.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Farm Details */}
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "rgba(47, 79, 79, 0.05)",
                border: "1px solid rgba(47, 79, 79, 0.1)",
              }}
            >
              <h4
                className="text-xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Farm Details
              </h4>
              <div className="space-y-3">
                {farmDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span
                      className="font-semibold text-sm flex-1"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {detail.label}:
                    </span>
                    <span
                      className="text-sm text-right flex-1"
                      style={{ color: "var(--color-text)" }}
                    >
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3
              className="text-3xl font-bold mb-8"
              style={{ color: "var(--color-primary)" }}
            >
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
                    style={{
                      backgroundColor: "white",
                      borderColor: "rgba(47, 79, 79, 0.2)",
                      color: "var(--color-text)",
                    }}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
                    style={{
                      backgroundColor: "white",
                      borderColor: "rgba(47, 79, 79, 0.2)",
                      color: "var(--color-text)",
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
                    style={{
                      backgroundColor: "white",
                      borderColor: "rgba(47, 79, 79, 0.2)",
                      color: "var(--color-text)",
                    }}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
                    style={{
                      backgroundColor: "white",
                      borderColor: "rgba(47, 79, 79, 0.2)",
                      color: "var(--color-text)",
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="wholesale">Wholesale Order</option>
                    <option value="farm-tour">Farm Tour Booking</option>
                    <option value="growing-advice">Growing Advice</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 resize-vertical"
                  style={{
                    backgroundColor: "white",
                    borderColor: "rgba(47, 79, 79, 0.2)",
                    color: "var(--color-text)",
                  }}
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-3 group"
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
                Send Message
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h3
            className="text-3xl font-bold text-center mb-8"
            style={{ color: "var(--color-primary)" }}
          >
            Visit Our Farm
          </h3>

          <div
            className="rounded-2xl overflow-hidden shadow-2xl relative"
            style={{
              border: "2px solid rgba(47, 79, 79, 0.1)",
            }}
          >
            {/* Google Maps Embed Placeholder */}
            <div
              id="map"
              className="w-full h-96 flex items-center justify-center relative"
              style={{ backgroundColor: "rgba(85, 107, 47, 0.1)" }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h4
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  Google Maps Embed
                </h4>
                <p style={{ color: "var(--color-text)" }}>
                  123 Organic Farm Road, Green Valley
                </p>
                <button
                  className="mt-4 px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "white",
                  }}
                >
                  Get Directions
                </button>
              </div>

              {/* Map Overlay Info */}
              <div
                className="absolute top-4 left-4 bg-white rounded-lg p-4 shadow-lg max-w-xs"
                style={{
                  border: "1px solid rgba(47, 79, 79, 0.1)",
                }}
              >
                <h5
                  className="font-bold mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  Mushroom Farm
                </h5>
                <p
                  className="text-sm mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  123 Organic Farm Road
                  <br />
                  Green Valley, CA 94201
                </p>
                <div
                  className="flex items-center gap-1 text-xs"
                  style={{ color: "var(--color-accent)" }}
                >
                  <span>⭐</span>
                  <span>4.9 (128 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <div
            className="rounded-3xl p-8 text-center max-w-4xl mx-auto"
            style={{
              backgroundColor: "rgba(47, 79, 79, 0.05)",
              border: "2px solid rgba(47, 79, 79, 0.1)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Quick Actions
            </h3>
            <p className="mb-6" style={{ color: "var(--color-text)" }}>
              Need immediate assistance? Here are some quick options:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-2"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/15551234567"
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-2 border-2"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}
              >
                💬 WhatsApp
              </a>
              <a
                href="mailto:hello@mushroomfarm.com"
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-2 border-2"
                style={{
                  borderColor: "var(--color-accent)",
                  color: "var(--color-accent)",
                }}
              >
                📧 Quick Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
