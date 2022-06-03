import { useStore } from "effector-react";
import React, { useMemo, useState } from "react";
import SeasonEpisode from "../pages/home/SeasonEpisode";
import { $sort } from "../store/store";
import { IEpisode } from "../Types/types";

interface episodeSortProps {
  seasoneInfo: IEpisode[];
  inpitValue: string;
}

const EpisodeSort: React.FC<episodeSortProps> = ({
  seasoneInfo,
  inpitValue,
}) => {
  const [episodes] = useState(seasoneInfo);

  const sort = useStore($sort);

  const sortEpisodes = useMemo(() => {
    if (sort === "по эпизоду") {
      return [...episodes].sort((a, b) => {
        return a.episode.localeCompare(b.episode);
      });
    } else if (sort === "по названию")
      return [...episodes].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
  }, [sort]);

  const foundSortEpisodes = useMemo(() => {
    if (sortEpisodes) {
      return sortEpisodes.filter(episode => {
        return episode.name.toLowerCase().includes(inpitValue.toLowerCase());
      });
    }
  }, [inpitValue, sortEpisodes]);
  return (
    <>
      {foundSortEpisodes ? (
        <div className="season__episodes">
          {foundSortEpisodes.map((episode: IEpisode, i: number) => {
            return (
              <SeasonEpisode
                item={episode}
                number={episode.episodeNum ? episode.episodeNum : i}
                key={episode.id}
              />
            );
          })}
        </div>
      ) : (
        <div className="season__error">Таких серий нет :(</div>
      )}
    </>
  );
};

export default EpisodeSort;
