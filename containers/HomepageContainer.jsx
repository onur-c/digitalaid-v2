import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ReferSection from "./ReferSection/ReferSection";
import AboutSection from "./AboutSection/AboutSection";
import CommentSection from "./CommentSection/CommentSection";

const HomepageContainer = () => {
  return (
    <>
      <HeroSection />
      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start">
        <ReferSection />
        <AboutSection />
      </div>
      <CommentSection />
    </>
  );
};

export default HomepageContainer;
