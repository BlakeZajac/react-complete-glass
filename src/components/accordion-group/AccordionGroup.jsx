import React, { useRef, useState } from "react";
import "./accordion-group.scss";

function AccordionGroup({ items, onItemChange }) {
  const [expandedItems, setExpandedItems] = useState(
    items.map((item) => item.expanded)
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [circleText, setCircleText] = useState("Open");
  const [isHovered, setIsHovered] = useState(false);
  const accordionItemsRef = useRef(null);

  const handleItemClick = (index) => {
    const newExpandedItems = expandedItems.map((item, i) =>
      i === index ? !item : false
    );
    setExpandedItems(newExpandedItems);
    onItemChange(index, newExpandedItems[index]);
    setCircleText(newExpandedItems[index] ? "Close" : "Open");
    setIsHovered(newExpandedItems[index] ? true : false);
  };

  const handleMouseEnter = (e) => {
    const { left, top } = accordionItemsRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setMousePosition({ x, y });
  };

  const handleMouseMove = (e) => {
    const { left, top } = accordionItemsRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    if (
      accordionItemsRef.current.querySelector(
        ".accordion__items__item--expanded:hover"
      )
    ) {
      setCircleText("Close");
      setIsHovered(true);
    } else {
      setCircleText("Open");
      setIsHovered(false);
    }
    setMousePosition({ x, y });
  };

  return (
    <div className="accordion__items" ref={accordionItemsRef}>
      <div
        className="accordion__items__circle"
        style={{ left: mousePosition.x - 100, top: mousePosition.y - 50 }}
      >
        {circleText}
      </div>

      {items.map((item, index) => (
        <div
          className={`accordion__items__item ${
            expandedItems[index] ? "accordion__items__item--expanded" : ""
          }`}
          key={index}
          onClick={() => handleItemClick(index)}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
        >
          {item.icon && (
            <div className="accordion__items__item__icon-wrapper">
              <img
                src={item.icon}
                alt={item.icon}
                className="accordion__items__item__icon"
              />
            </div>
          )}

          <div className="accordion__items__item__content">
            <h5 className="accordion__items__item__content__header">
              {item.title}
            </h5>

            <div
              className={`accordion__items__item__content__content ${
                expandedItems[index]
                  ? "accordion__items__item__content__content--expanded"
                  : ""
              }`}
            >
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccordionGroup;
