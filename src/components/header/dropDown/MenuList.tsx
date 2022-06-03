import { useStore } from "effector-react";
import React, { useState } from "react";
import { $seasons } from "../../../store";
import MenuItem from "./MenuItem";

const MenuList:React.FC = () => {
  const seasons = useStore($seasons);
  const [seasonsList, _] = useState(seasons);
  return (
    <ul className="dropdown__info-list dropdown-menu" >
      {
        seasonsList.map((season) => {
          return <MenuItem num={season[0].season} key={season[0].season}/>
        })
      }
    </ul>
  );
};

export default MenuList;
