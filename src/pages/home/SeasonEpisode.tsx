import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IEpisode } from "../../Types/types";
interface SeasonEpisodeProps {
  item: IEpisode;
  number: number;
}
const SeasonEpisode: React.FC<SeasonEpisodeProps> = ({ item, number }) => {
  const { episode, air_date, name, characters, id } = item;
  const url = useLocation();

  return (
    <Link to={`${url.pathname}info/${id}`} className="season__episode episode">
      <div className="episode__item episode__item-number">{number} эпизод</div>
      <div className="episode__item">{name}</div>
      <div className="episode__item">Дата выхода: {air_date}</div>
      <div className="episode__item">
        Количество персонажей: {characters.length}
      </div>
      <div className="episode__item">ID: {episode}</div>
    </Link>
  );
};

export default SeasonEpisode;
