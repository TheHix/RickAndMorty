import React from "react";
import { setCondition } from "../../../store/store";
interface MenuItemProps {
  num: number;
  condition: boolean;
}
const MenuItem: React.FC<MenuItemProps> = ({ num, condition }) => {
  return (
    <li className="dropdown-menu__item">
      <label>
        <input
          type="checkbox"
          checked={condition}
          onChange={() => setCondition(num - 1)}
        />
        {num} сезон
      </label>
    </li>
  );
};

export default MenuItem;
