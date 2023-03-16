import React from "react";
import videoThumbnail from "../../assets/components/video/Complete-Glass-Company-Profile-1920x1080-1.jpg";
import {
  IconArchitecturalGlass,
  IconEmergencyRepairs,
  IconEnergyEfficiency,
  IconProjectManagement,
  IconShopfrontGlass,
  IconStrataGlass,
} from "../../assets/icons/icons.js";
import CommercialGlazierImg from "../../assets/pages/home/complete-glass-home-commercial-glazing-980x900-1.jpg";
import EmergencyRepairsImg from "../../assets/pages/home/complete-glass-home-emergency-repairs-980x900-1.jpg";
import GlassRepairImg from "../../assets/pages/home/complete-glass-home-glass-repair-980x900-1.jpg";
import HeroImg from "../../assets/pages/home/complete-glass-home-hero-1920x800-1.jpg";

import {
  AccordionGroup,
  Content,
  HeadingBlock,
  Hero,
  MediaWithText,
  Video,
} from "../../components/index";

import News from "../../containers/news/News";

import "./home.scss";

const Home = () => {
  const serviceAccordionItems = [
    {
      icon: IconEmergencyRepairs,
      title: "Emergency Repairs",
      content:
        "You can count on Complete Glass when an emergency strikes for glass repairs and replacement.",
      expanded: false,
    },
    {
      icon: IconStrataGlass,
      title: "Strata Glass Install",
      content:
        "Our experience with strata work means we are able to work on multi-story buildings, scaffolds, and stage lifts.",
      expanded: false,
    },
    {
      icon: IconShopfrontGlass,
      title: "Shopfront Glass",
      content:
        "Catch people's eyes and make your business stand out with our custom shopfront glass installation service.",
      expanded: false,
    },
    {
      icon: IconArchitecturalGlass,
      title: "Architectural Glass",
      content:
        "Lower energy cost and reduce noise pollution with our high-performance architectural glass.",
      expanded: false,
    },
    {
      icon: IconProjectManagement,
      title: "Project Management",
      content:
        "Complete Glass manages glass work for residential, commercial, strata, shopfront and office buildings.",
      expanded: false,
    },
    {
      icon: IconEnergyEfficiency,
      title: "Energy Efficiency",
      content:
        "Improve your comfort and your power bill. Protect yourself all year round from outside conditions while reducing your power bills.",
      expanded: false,
    },
  ];

  const faqAccordionItems = [
    {
      title: "Are your windows environmentally friendly?",
      content:
        "Yes, our windows won't have an impact on the environment once fitted. They are also 100% recyclable.",
      expanded: false,
    },
    {
      title: "I've just broken a window, what should I do?",
      content:
        "Don't panic, keep everyone away from the window and areas where the glass may have fallen. We're available 24/7 if this occurs. Reach out to one of our team members at 1300 147 247",
      expanded: false,
    },
    {
      title: "How much will it cost?",
      content:
        "Always one of the first questions we get asked. Depending on your request the pricing structure will change. We offer fast quotes and if you wish, you can request a quote through our contact page.",
    },
    {
      title: "What areas do you service?",
      content:
        "We offer our services throughout Sydney, whether it be in the city or a smaller quiet suburb.",
    },
    {
      title: "Can glass scratches be removed?",
      content:
        "It is possible, however we offer very competitive pricing and it may be cheaper to replace it entirely.",
    },
    {
      title: "Are your glazing contractors qualified?",
      content:
        "Yes. Our team are qualified and licensed. To request information on the registered names, please contact us.",
    },
  ];

  return (
    <main className="main-content">
      <Hero
        backgroundImage={HeroImg}
        titleText="Glazing perfected"
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

      <div className="services section">
        <div className="services__row row">
          <HeadingBlock
            multiHeadingOneText="Professional service"
            multiHeadingTwoText="Glazing services"
            headingText="Experience a professional and responsive glass service with us. Specialising in residential, commercial, industrial, and retail glass solutions and emergency replacements. Discover how we can elevate your space."
          />

          <AccordionGroup items={serviceAccordionItems} />
        </div>
      </div>

      <MediaWithText
        imagePosition="left"
        imageUrl={EmergencyRepairsImg}
        multiHeadingOneText="Emergencies"
        multiHeadingTwoText="Within the hour"
        headingText="24/7 emergency glass repairs"
        bodyText1="Glass emergencies can happen at any time, day or night, and when they do, you need a reliable solution fast. That's where we come in. Our 24/7 emergency glass repair service is designed to provide quick and efficient solutions to keep your property secure."
        bodyText2="Our highly trained and experienced technicians are on standby to respond to your call and provide you with the best possible solution. Trust us to be there for you, whenever and wherever you need us."
        btnLink1="tel:1300147247"
        btnText1="1300 147 247"
        className1="btn--red"
        btnLink2="/emergency-repairs/"
        btnText2="Learn more"
        className2="btn--white"
      />

      <MediaWithText
        imagePosition="right"
        imageUrl={CommercialGlazierImg}
        headingText="Commercial glazing"
        bodyText1="Upgrade your commercial space with our expert commercial glazing services. We understand that the appearance and functionality of your business are crucial, which is why we offer a wide range of solutions to meet your specific needs."
        bodyText2="From shopfronts and safety glass to commercial closures and project management, our team of experienced glaziers  will work closely with you to deliver high-quality, cost-effective, and efficient results. Let us enhance your business with our innovative and reliable commercial glazing solutions."
        btnLink1="/contact/"
        btnText1="Request a quote"
        className1="btn--blue"
        btnLink2="/commercial-glazier/"
        btnText2="Learn more"
        className2="btn--white"
      />

      <MediaWithText
        imagePosition="left"
        imageUrl={GlassRepairImg}
        headingText="Sydney glass repair"
        bodyText1="In Sydney, glass repair shouldn't have to be a headache. That's why we offer fast and reliable glass repair solutions for your residential, commercial, industrial, and retail properties. Our team of experienced glaziers are equipped with the latest tools and technology to provide top-notch repairs for any type of glass, including emergency replacements."
        bodyText2="Whether you need to fix a broken window, install new glass, or carry out a compliance audit, we've got you covered. Contact us today for a stress-free glass repair experience."
        btnLink1="/contact/"
        btnText1="Request a quote"
        className1="btn--blue"
        btnLink2="/glass-repair"
        btnText2="Learn more"
        className2="btn--white"
      />

      {/* <TestimonialSlider /> */}

      <div className="faq section">
        <div className="faq__row row">
          <HeadingBlock headingText="Discover the solutions you're looking for with our insightful FAQs. Find answers to all your questions about our services." />

          <AccordionGroup items={faqAccordionItems} />
        </div>
      </div>

      <div className="news section">
        <div className="news__row row">
          <HeadingBlock
            multiHeadingOneText="From the blog"
            multiHeadingTwoText="By Complete Glass"
            headingText="Stay ahead of the game with our latest news and updates. Learn about our exciting projects, industry insights, and company developments."
          />
          <News postsPerPage={3} />
        </div>
      </div>
    </main>
  );
};

export default Home;
