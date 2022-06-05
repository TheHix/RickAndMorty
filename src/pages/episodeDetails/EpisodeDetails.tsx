import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import {
  $currentEpisode,
  setCurrentEpisode,
  setCurrentId,
} from "../../store/store";
import { storage } from "../../tools/storage";
import CharacterWrapper from "./characters/CharacterWrapper";

const EpisodeDetails: React.FC = () => {
  const currentEpisode = useStore($currentEpisode);
  const { id } = useParams();

  useEffect(() => {
    setCurrentEpisode(currentEpisode ?? storage.getCurrentEpisode());
  }, []);

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
              {currentEpisode ? (
                <>
                  <div className="episode-info__item">
                    {currentEpisode?.name}
                  </div>
                  <div className="episode-info__item">
                    {currentEpisode.season} сезон {currentEpisode.episodeNum}{" "}
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
              ) : (
                <Loader />
              )}
            </div>
            <CharacterWrapper />
          </div>
        </div>
      </div>
    </main>
  );
};

export default EpisodeDetails;
