import { useStore } from "effector-react";
import React, { useEffect } from "react";
import Season from "./Season";

import { $seasons, getEpisodeCount } from "../../store";
import { IEpisode } from "../../Types/types";

const Home: React.FC = () => {
  const seasons = useStore($seasons);

  useEffect(() => {
    getEpisodeCount();
  }, []);
  
  return (
    <main className="main">
      <div className="main__info info">
        <div className="info__container container">
          {seasons.map((currentSeasone: any, index: number) => {
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
