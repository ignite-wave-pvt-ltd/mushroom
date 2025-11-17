import React from "react";
import MushroomHero from "../../components/HomePage/Hero";
import Navbar from "../../components/Navbar/Navbar";
import AboutSection from "../../components/HomePage/About";
import MushroomVarieties from "../../components/HomePage/Varieties";
import ProductsPreview from "../../components/HomePage/ProductsPreview";
import CultivationLearning from "../../components/HomePage/Learning";
import GallerySection from "../../components/HomePage/Gallery";

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <MushroomHero />
      <AboutSection />
      <MushroomVarieties />
      {/* <ProductsPreview /> */}
      <CultivationLearning />
      <GallerySection />
    </div>
  );
};

export default HomePage;
