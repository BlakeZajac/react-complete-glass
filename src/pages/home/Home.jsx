import React from "react";
import videoThumbnail from "../../assets/components/video/Complete-Glass-Company-Profile-1920x1080-1.jpg";
import HomeHeroImg from "../../assets/pages/home/complete-glass-home-hero-1920x800-1.jpg";
import { AccordionGroup } from "../../components/accordion-group/AccordionGroup";
import { Content, Hero, Video } from "../../components/index";

const Home = () => {
  const serviceAccordionItems = [
    {
      icon: "",
      title: "Emergency Repairs",
      content:
        "You can count on Complete Glass when an emergency strikes for glass repairs and replacement.",
      expanded: false,
    },
    {
      icon: "",
      title: "Strata Glass Install",
      content:
        "Our experience with strata work means we are able to work on multi-story buildings, scaffolds, and stage lifts.",
      expanded: false,
    },
    {
      icon: "",
      title: "Shopfront Glass",
      content:
        "Catch people's eyes and make your business stand out with our custom shopfront glass installation service.",
      expanded: false,
    },
    {
      icon: "",
      title: "Architectural Glass",
      content:
        "Lower energy cost and reduce noise pollution with our high-performance architectural glass.",
      expanded: false,
    },
    {
      icon: "",
      title: "Project Management",
      content:
        "Complete Glass manages glass work for residential, commercial, strata, shopfront and office buildings.",
      expanded: false,
    },
    {
      icon: "",
      title: "Energy Efficiency",
      content:
        "Improve your comfort and your power bill. Protect yourself all year round from outside conditions while reducing your power bills.",
      expanded: false,
    },
  ];

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
        bodyText1="We partner with commercial entities across Sydney to service any & all their glass and aluminium needs - 24/7 hours a day, 365 days a year."
        bodyText2="Be it shopfronts, safety & security glass, commercial closures, project management or compliance audits - Complete Glass has the solution for your business."
      />

      <Video videoThumbnail={videoThumbnail} videoID="Oxl8MOGgwv0" />

      <AccordionGroup items={serviceAccordionItems} />
    </main>
  );
};

export default Home;
