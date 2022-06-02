import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { URL } from "../API/constants";
import Season from "../components/episodes/Season";

import { $seasons, getEpisodeCountFX } from "../store";
import { IEpisode, ISeason } from "../Types/types";

const Home: React.FC = () => {
  const seasons = useStore($seasons);
  // const seasones = useStore($seasones)
  // const getAllSeasons = async (numSeasons: any) => {
  //   for (let i = 1; i <= numSeasons; i++) {
  //     addSeason(await getSeasonFx(i));
  //   }
  // };

  // const getNumberOfSeasons = async () => {
  //   const result = await fetch(URL.episodes);
  //   const json = await result.json();
  //   const numSeasons = await json.info.page;
  //   getAllSeasons(numSeasons);
  // };

  useEffect(() => {
    // if (!seasones.length) {
    //   getNumberOfSeasons();
    //   getEpisodeCountFX();
    // }
    getEpisodeCountFX();
  }, []);
  //console.log(getConfidenceIntervalBetweenEpisodes(new Date("June 20, 2021"),new Date("May 31, 2020")));
  
  return (
    <main className="main">
      <div className="main__info info">
        <div className="info__container container">
          {seasons.map((currentSeasone: IEpisode[], index: number) => {
            return (
              <Season
                key={index}
                seasonNumber={(index + 1).toString()}
                seasoneInfo={currentSeasone}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
