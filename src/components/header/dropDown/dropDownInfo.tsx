import React from "react";

const DropDownInfo:React.FC = () => {
  return (
    <ul className="dropdown__info-list dropdown-menu" >
      <li className="dropdown-menu__item">
        <label>
          <input type="checkbox" />1 сезон
        </label>
      </li>
      <li className="dropdown-menu__item">
        <label>
          <input type="checkbox" />2 сезон
        </label>
      </li>
      <li className="dropdown-menu__item">
        <label>
          <input type="checkbox" />3 сезон
        </label>
      </li>
    </ul>
  );
};

export default DropDownInfo;
