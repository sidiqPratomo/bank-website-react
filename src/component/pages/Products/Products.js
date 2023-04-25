import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjTwo } from "./Data";
import Pricing from "../../Pricing";

function Products() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;
