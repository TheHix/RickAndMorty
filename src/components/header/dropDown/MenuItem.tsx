import React, { useState } from "react";
interface MenuItemProps {
  num: number;
}
const MenuItem: React.FC<MenuItemProps> = ({ num }) => {
    const [checked, setChecked] = useState(true);
  return (
    <li className="dropdown-menu__item">
      <label>
        <input type="checkbox" checked={checked} onChange={() => {setChecked(!checked)}}/>
        {num} сезон
      </label>
    </li>
  );
};

export default MenuItem;
