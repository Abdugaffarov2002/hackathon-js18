import React from "react";
import Hero from "./hero/Hero";
import ProductSlider from "./productSlider/ProductSlider";
import { Description } from "@mui/icons-material";
import DescriptionPage from "./Description/DescriptionPage";
import Footer from "./Footer/Footer";

const HomePage = () => {
  const photos = [
    "https://img.asmedia.epimg.net/resizer/MOvu3mDujleJzEvsmNxU0BFILsE=/1200x1200/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/5IUGGQKUQJJNLGW5G2NAF2KLA4.jpg",
    "https://s2.glbimg.com/rhYL6AFpegx0v5VNhq5d4P6Y2qk=/171x0:471x281/300x281/s.glbimg.com/es/ge/f/original/2015/08/30/kev_shirt_holding_shot_backdrop.jpg",
    "https://vid.alarabiya.net/images/2023/06/07/b6be6e9f-cd69-4724-812d-bb1bf0f6723f/b6be6e9f-cd69-4724-812d-bb1bf0f6723f.jpg?crop=1:1&width=1000",
  ];
  return (
    <div>
      <Hero />

      <ProductSlider photos={photos} />
      <DescriptionPage />
      <Footer />
    </div>
  );
};

export default HomePage;
