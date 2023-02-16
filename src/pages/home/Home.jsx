import React from "react";
import HomeHeroImg from "../../assets/pages/home/complete-glass-home-hero-1920x800-1.jpg";
import { Content, Hero } from "../../components/index";

const Home = () => {
  return (
    <main className="main-content">
      <Hero
        backgroundImage={HomeHeroImg}
        titleText="Expert glazing solutions"
        bodyText="Complete Glass are an expert Sydney-wide glazing company. We pride ourselves on our responsive and professional service - from emergency repairs to large scale commercial projects."
        btnLink1="/contact/"
        btnText1="Request a quote"
        btnClass1="btn--blue"
        btnLink2="/emergency-repairs/"
        btnText2="24/7 emergency repairs"
        btnClass2="btn--red"
      />

      <Content
        multiHeadingOneText="Quality glass"
        multiHeadingTwoText="Great design"
        headingText="Partner with Complete Glass for all your glass and aluminum needs. Our 24/7, 365-day service covers shopfronts, safety glass, closures, project management, and compliance audits. Elevate your business with our innovative solutions."
        bodyText="We partner with commercial entities across Sydney to service any & all their glass and aluminium needs - 24/7 hours a day, 365 days a year.
        Be it shopfronts, safety & security glass, commercial closures, project management or compliance audits - Complete Glass has the solution for your business."
      />
    </main>
  );
};

export default Home;
