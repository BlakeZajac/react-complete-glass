import React, { useState } from "react";

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
        <div className="accordion__items__item" key={index}>
          <img src={item.icon} className="accordion__items__item__icon" />
          <h4
            className="accordion__items__item__header"
            onClick={() => handleItemClick(index)}
          >
            {item.title}
          </h4>
          {expandedItems[index] && (
            <div className="accordion__items__item__content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export { AccordionGroup };
