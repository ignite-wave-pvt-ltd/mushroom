import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ContactSection from "../pages/ContactUs/Contact";
import ProductsPage from "../pages/ShopNow/ShopNow";
import GallerySection from "../components/HomePage/Gallery";
import AboutSection from "../components/HomePage/About";
import Navbar from "../components/Navbar/Navbar";
import MushroomVarieties from "../components/HomePage/Varieties";
import CultivationLearning from "../components/HomePage/Learning";
import Footer from "../components/Footer/Footer";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactSection />} />
        <Route path="/t" element={<ProductsPage />} />
        <Route path="/contact-us2" element={<ProductsPage />} />
        <Route path="/shop-now" element={<ProductsPage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/varieties" element={<MushroomVarieties />} />
        <Route path="/learn" element={<CultivationLearning />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
