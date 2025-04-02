import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import CategoryShowcase from "./CategoryShowcase";
import Register from "./Register";
import LocationSpread from "./LocationSpread";
import AboutUs from "./AboutUs";
import PromoteApp from "./PromoteApp";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowcase />
      <Register />
      <LocationSpread />
      <AboutUs />
      <PromoteApp />
    </div>
  );
};

export default Home;
