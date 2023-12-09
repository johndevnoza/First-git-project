import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";

export default function DropDown({ lable, children, icon }) {
  const [isDropDownVisible, setDropDownVisible] = useState(false);

  const handleMouseOver = () => {
    setDropDownVisible(true);
  };
  const handleMouseOut = () => {
    setDropDownVisible(false);
  };

  return (
    <div className="dropDown" onClick={handleMouseOver}>
      <span>{lable}</span>
        <FontAwesomeIcon icon={icon}/>
         
      <div
        className={`dropDownContent ${isDropDownVisible ? "visible" : ""}`}
        onMouseLeave={handleMouseOut}
      >
        {children}
      </div>
    </div>
  );
}
