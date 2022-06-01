import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { URL } from "../API/constants";
import Season from "../components/episodes/Season";

import { $seasones, addSeason, getSeasonFx } from "../store/store";
import { ISeason } from "../Types/episodes";

const Home: React.FC = () => {
  const seasones = useStore($seasones);

  const getAllSeasons = async (numSeasons: any) => {
    for (let i = 1; i <= numSeasons; i++) {
      addSeason(await getSeasonFx(i));
    }
  };

  const getNumberOfSeasons = async () => {
    const result = await fetch(URL.episodes);
    const json = await result.json();
    const numSeasons = await json.info.pages;
    getAllSeasons(numSeasons);
  };

  useEffect(() => {
    if (!seasones.length) {
      getNumberOfSeasons();
    }
  }, []);
  return (
    <main className="main">
      <div className="main__info info">
        <div className="info__container container">
          {seasones.map((currentSeasone: ISeason, index: number) => {
            return (
              <Season
                key={index}
                seasonNumber={(index + 1).toString()}
                seasoneInfo={currentSeasone.results}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
