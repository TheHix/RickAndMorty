import { useStore } from "effector-react";
import React, { useMemo, useState } from "react";
import { IEpisode } from "../../Types/types";
import SeasonEpisode from "../SeasonEpisode";

interface SeasonProps {
  seasonNumber: string;
  seasoneInfo: IEpisode[];
}
const Season: React.FC<SeasonProps> = ({ seasonNumber, seasoneInfo }) => {
  const [episodes, ] = useState(seasoneInfo);
  const [value, setValue] = useState("");

  const foundEpisodes = useMemo(() => {
    return episodes.filter(episode => {
      return episode.name.toLowerCase().includes(value.toLowerCase());
    });
  }, [value]);
   
  return (
    <div className="season">
      <div className="season__title-block">
        <div className="season__title">Сезон {seasonNumber}</div>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          className="season__search"
          placeholder="Найти серию"
        />
      </div>
      {foundEpisodes.length ? (
        <div className="season__episodes">
          {foundEpisodes.map((episode: IEpisode, i) => {
            return (
              <SeasonEpisode
                item={episode}
                number={episode.episodeNum ? episode.episodeNum: i}
                key={episode.id}
              />
            );
          })}
        </div>
      ) : (
        <div className="season__error">Таких серий нет :(</div>
      )}
    </div>
  );
};

export default Season;
