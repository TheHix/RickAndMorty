import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { URL } from "../API/constants";
import Season from "../components/Season";
import { $seasones, addSeason, getSeasonFx } from "../store/store";
import { ISeason } from "../Types/episodes";

const Main: React.FC = () => {
  const seasones = useStore($seasones);
  async function getAllSeasons(json: any) {
    for (let i = 1; i <= json.info.pages; i++) {
      addSeason(await getSeasonFx(i));
    }
  }
  useEffect(() => {
    fetch(URL.episodes)
      .then(result => result.json())
      .then(json => {
        getAllSeasons(json);
      });
  }, []);
  console.log(seasones);
  return (
    <main className="main">
      <div className="main__container container">
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
    </main>
  );
};

export default Main;
