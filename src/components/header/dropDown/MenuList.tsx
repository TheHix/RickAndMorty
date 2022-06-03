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
        seasonsList.map((season:any) => {
          return <MenuItem num={season.episodes[0].season} key={season.episodes[0].season} condition = {season.condition}/>
        })
      }
    </ul>
  );
};

export default MenuList;
