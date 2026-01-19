import React from "react";
import Hero from "../components/common/Hero";
import Categories from "../components/common/Categories";
import OfferCarousel from "../components/other/OfferCarousel";

const Home = () => {
  return (
    <>
  <Hero />
  <OfferCarousel />
  <Categories />
    </>
  );
};

export default Home;
