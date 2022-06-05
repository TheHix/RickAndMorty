import { useStore } from "effector-react";
import React, { useState } from "react";
import { $seasons } from "../../../store/store";
import { ISeasonWrapper } from "../../../Types/types";
import MenuItem from "./MenuItem";

const MenuList: React.FC = () => {
  const seasons = useStore($seasons);
  const [seasonsList, _] = useState<ISeasonWrapper[]>(seasons);
  return (
    <ul className="dropdown__info-list dropdown-menu">
      {seasonsList.map((season: ISeasonWrapper) => {
        return (
          <MenuItem
            num={season.episodes[0].season}
            key={season.episodes[0].season}
            condition={season.condition}
          />
        );
      })}
    </ul>
  );
};

export default MenuList;
