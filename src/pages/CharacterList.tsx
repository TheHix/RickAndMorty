import { useStore } from "effector-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterInstance from "../components/characters/CharacterInstance";
import {
  $characterInfo,
  $currentEpisode,
  setCurrentEpisode,
  setCurrentId,
} from "../store";
import { storage } from "../tools/storage";
import { ICharacterInfo } from "../Types/types";

const CharacterList: React.FC = () => {
  const characterInfo = useStore($characterInfo);
  const currentEpisode = useStore($currentEpisode);
  setCurrentEpisode(currentEpisode ?? storage.getCurrentEpisode());
  
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setCurrentId(+id);
    }
  }, [id]);
  
  return (
    <main className="main">
      <div className="main__info info">
        <div className="info__container container">
          <div className="info__body">
            <div className="info__episode episode-info">
              {currentEpisode?.id ? (
                <>
                  <div className="episode-info__item">
                    {currentEpisode?.name}
                  </div>
                  <div className="episode-info__item">
                    {currentEpisode.season} сезон{" "}
                    {currentEpisode.episodeNum}{" "}
                    серия
                  </div>
                  <div className="episode-info__item">
                    Дата выхода:{currentEpisode.air_date}
                  </div>
                  <div className="episode-info__item">
                    Количество персонажей: {currentEpisode.characters.length}
                  </div>
                  <div className="episode-info__item">
                    ID: {currentEpisode.episode}
                  </div>
                </>
              ) : null}
            </div>
            <div className="info__characters characters-info">
              <h1 className="characters-info__title">Персонажи</h1>
              <div className="characters-info__body">
                {characterInfo.map((character: ICharacterInfo, index: number) => {
                  return <CharacterInstance key={index} characterInfo={character} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CharacterList;
