import React, { useRef, useState } from "react";
import HeatherImg from "../../assets/components/testimonials/complete-glass-testimonials-600x700-1.jpg";
import DanImg from "../../assets/components/testimonials/complete-glass-testimonials-600x700-2.jpg";
import SeanImg from "../../assets/components/testimonials/complete-glass-testimonials-600x700-3.jpg";
import KatrinaImg from "../../assets/components/testimonials/complete-glass-testimonials-600x700-4.jpg";
import "./testimonial-slider.scss";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const sliderItems = [
    {
      image: HeatherImg,
      name: "Heather Rollo",
      review: `“We used Campbell and his company Complete Glass to replace all our windows in our apartment in Wollstonecraft. His professional service is first class. He recommended the right product of glass which has proved to be brilliant for our apartment. Complete Glass are competitive in their pricing and reliable in their service. 5 stars for Complete Glass.”`,
    },
    {
      image: DanImg,
      name: "Dan Dixon",
      review: `“The boys always knock out quality work. Cheers Campbell.”`,
    },
    {
      image: SeanImg,
      name: "Sean Johnston",
      review: `"Complete Glass exceeded our expectations with their timely and expert glass installations. Highly recommend!`,
    },
    {
      image: KatrinaImg,
      name: "Katrina Long",
      review: `"Our business wouldn't be the same without Complete Glass's reliable and top-notch services. Thank you!"`,
    },
  ];

  const updateSliderPosition = (index) => {
    const sliderItems = sliderRef.current.querySelectorAll(
      ".slider__items__item"
    );
    const slideWidth = sliderItems[0].offsetWidth;
    sliderRef.current.style.transform = `translateX(${-index * slideWidth}px)`;
  };

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? sliderItems.length - 1 : currentSlide - 1
    );
    updateSliderPosition(currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === sliderItems.length - 1 ? 0 : currentSlide + 1
    );
    updateSliderPosition(currentSlide + 1);
  };

  const handleSliderClick = (event) => {
    event.preventDefault();

    const sliderBounds = sliderRef.current.getBoundingClientRect();
    const slideWidth = sliderBounds.width / sliderItems.length;
    const startX =
      event.type === "touchstart" ? event.touches[0].clientX : event.clientX;
    const offset = startX - sliderBounds.left;
    const clickedSlideIndex = Math.floor(offset / slideWidth);

    setCurrentSlide(clickedSlideIndex);

    const handleMove = (event) => {
      const moveX =
        event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
      const diff = moveX - startX;
      const currentIndex = Math.min(
        Math.max(Math.floor(offset / slideWidth), 0),
        sliderItems.length - 1
      );
      const newIndex = Math.min(
        Math.max(Math.floor((offset + diff) / slideWidth), 0),
        sliderItems.length - 1
      );

      if (currentIndex !== newIndex) {
        setCurrentSlide(newIndex);
        updateSliderPosition(newIndex);
      }
    };

    const handleEnd = () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchend", handleEnd);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchend", handleEnd);
  };

  const getSliderPosition = (index) => {
    const slider = sliderRef.current;
    if (!slider) {
      return "";
    }
    const sliderBounds = slider.getBoundingClientRect();
    const slideWidth = sliderBounds.width / sliderItems.length;
    return `translateX(${slideWidth * index}px)`;
  };

  return (
    <div className="slider section">
      <div className="slider__row row">
        <div className="slider__nav">
          <div className="slider__nav__length">
            <span>{`${currentSlide + 1} / ${sliderItems.length}`}</span>
          </div>

          <div className="slider__nav__buttons">
            <button onClick={handlePrevClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>

        <div className="slider__items" ref={sliderRef}>
          {sliderItems.map((slide, index) => (
            <div
              key={index}
              className={`slider__items__item ${
                index === currentSlide ? "slider__items__item--active" : ""
              }`}
              style={{ transform: getSliderPosition(index) }}
            >
              <img src={slide.image} alt={slide.name} />
              <h5>{slide.name}</h5>
              <h4>{slide.review}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
