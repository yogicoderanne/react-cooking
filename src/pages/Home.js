import React from "react";
import HeaderNav from "../components/HeaderNav";
import SectionMeals from "../components/SectionMeals";
import FeaturesSection from "../components/FeaturesSections";

export default function Home() {
  return (
    <>
      <HeaderNav />
      <FeaturesSection />
      <SectionMeals />
    </>)
}