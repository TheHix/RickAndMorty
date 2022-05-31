import React from "react";
import { IEpisode } from "../Types/episodes";
interface SeasonEpisodeProps {
  item: IEpisode;
  number: number;
}
const SeasonEpisode: React.FC<SeasonEpisodeProps> = ({ item, number }) => {
  const { episode, air_date, name, characters } = item;
  return (
    <div className="season__episode episode">
      <div className="episode__item episode__item-number">{number} эпизод</div>
      <div className="episode__item">{name}</div>
      <div className="episode__item">Дата выхода: {air_date}</div>
      <div className="episode__item">
        Количество персонажей: {characters.length}
      </div>
      <div className="episode__item">ID: {episode}</div>
    </div>
  );
};

export default SeasonEpisode;
