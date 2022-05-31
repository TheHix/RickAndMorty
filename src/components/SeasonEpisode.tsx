import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IEpisode } from "../Types/episodes";
interface SeasonEpisodeProps {
  item: IEpisode;
  number: number;
}
const SeasonEpisode: React.FC<SeasonEpisodeProps> = ({ item, number }) => {
  const { episode, air_date, name, characters } = item;
  const url = useLocation();
  //console.log(`${url.pathname}info/${episode}`);
  
  return (
    <Link
      to='/info'
      className="season__episode episode"
    >
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
