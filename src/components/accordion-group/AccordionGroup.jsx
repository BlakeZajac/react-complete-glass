import React, { useState } from "react";
import "./accordion-group.scss";

function AccordionGroup({ items, onItemChange }) {
  const [expandedItems, setExpandedItems] = useState(
    items.map((item) => item.expanded)
  );

  const handleItemClick = (index) => {
    const newExpandedItems = expandedItems.map((item, i) =>
      i === index ? !item : false
    );
    setExpandedItems(newExpandedItems);
    onItemChange(index, newExpandedItems[index]);
  };

  return (
    <div className="accordion__items">
      {items.map((item, index) => (
        <div
          className={`accordion__items__item ${
            expandedItems[index] ? "accordion__items__item--expanded" : ""
          }`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="accordion__items__item__icon-wrapper">
            <img
              src={item.icon}
              alt={item.icon}
              className="accordion__items__item__icon"
            />
          </div>

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
