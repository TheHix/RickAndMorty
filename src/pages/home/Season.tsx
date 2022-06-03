import React, { useState } from "react";
import EpisodeSort from "../../components/EpisodeSort";
import { ISeasonWrapper } from "../../Types/types";

interface SeasonProps {
  seasonNumber: string;
  seasoneInfo: ISeasonWrapper;
}
const Season: React.FC<SeasonProps> = ({ seasonNumber, seasoneInfo }) => {
  const [inpitValue, setInpitValue] = useState("");
  return (
    <>
      {seasoneInfo.condition === true ? (
        <div className="season">
          <div className="season__title-block">
            <div className="season__title">Сезон {seasonNumber}</div>
            <input
              value={inpitValue}
              onChange={e => setInpitValue(e.target.value)}
              type="text"
              className="season__search"
              placeholder="Найти серию"
            />
          </div>
          <EpisodeSort
            inpitValue={inpitValue}
            seasoneInfo={seasoneInfo.episodes}
          />
        </div>
      ) : null}
    </>
  );
};

export default Season;
