import React from "react";
import HeroImg from "../../assets/pages/emergency-repair/complete-glass-emergency-repairs-hero-1920x800-1.jpg";
import { Content, Hero, MediaWithText } from "../../components/index";

const EmergencyRepairs = () => {
  return (
    <main className="main-content">
      <Hero
        backgroundImage={HeroImg}
        titleText="24/7 emergency glass repairs Sydney"
        bodyText="Don't let broken glass disrupt your life. Our 24/7 emergency glass repair service ensures quick and reliable solutions to keep you protected around the clock."
        btnLink1="tel:1300147247"
        btnText1="1300 147 247"
        btnClass1="btn--red"
        btnLink2="/contact/"
        btnText2="Request a quote"
        btnClass2="btn--white"
      />

      <Content
        multiHeadingOneText="Quality glass"
        multiHeadingTwoText="Great design"
        headingText="Complete Glass is there at any time, anywhere in the Sydney metropolitan area within 1 hour.*"
        bodyText1="With decades of experience in providing emergency glass services, don't hesitate to call for prompt, professional and reliable service for replacement glass from breakages or break-ins, and if glass replacement is unable to proceed at that time, make the property safe and secure."
        bodyText2="We arrange direct billing to insurance companies and, when possible, a portion of the excess can be reimbursed. For a personalised, cost-effective, and fully compliant glazing solution, call us on 1300 147 247."
        bodyText3="*Conditions apply. We will endeavour to attend to your job as quickly as possible as we understand the importance and urgency of emergency situations."
      />

      <MediaWithText imagePosition="span" />
    </main>
  );
};

export default EmergencyRepairs;
