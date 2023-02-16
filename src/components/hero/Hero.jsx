import React from "react";
import Button from "../button/Button";
import "./hero.scss";

const Hero = ({
  backgroundImage,
  titleText,
  bodyText,
  btnLink1,
  btnText1,
  btnClass1,
  btnLink2,
  btnText2,
  btnClass2,
}) => {
  return (
    <div
      className="hero section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero__row row">
        <div className="hero__content">
          <h1>{titleText}</h1>
          <p>{bodyText}</p>

          <div className="hero__button-wrapper">
            <Button
              btnLink={btnLink1}
              btnText={btnText1}
              className={btnClass1}
            />
            <Button
              btnLink={btnLink2}
              btnText={btnText2}
              className={btnClass2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
