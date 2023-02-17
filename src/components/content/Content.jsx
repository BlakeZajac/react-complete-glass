import React from "react";
import { HeadingBlock } from "../index";
import "./content.scss";

const Content = ({
  multiHeadingOneText,
  multiHeadingTwoText,
  headingText,
  bodyText1,
  bodyText2,
  bodyText3,
  bodyText4,
}) => {
  return (
    <div className="content section">
      <div className="content__row row">
        <HeadingBlock
          multiHeadingOneText={multiHeadingOneText}
          multiHeadingTwoText={multiHeadingTwoText}
          headingText={headingText}
          bodyText1={bodyText1}
          bodyText2={bodyText2}
          bodyText3={bodyText3}
          bodyText4={bodyText4}
        />
      </div>
    </div>
  );
};

export default Content;
