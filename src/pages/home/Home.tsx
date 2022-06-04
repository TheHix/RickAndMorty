import { useStore } from "effector-react";
import React, { useEffect } from "react";
import Season from "./Season";

import { $seasons, getEpisodeCount } from "../../store/store";
import { ISeasonWrapper } from "../../Types/types";
import Loader from "../../components/Loader";

const Home: React.FC = () => {
  const seasons = useStore($seasons);

  useEffect(() => {
    getEpisodeCount();
    
  }, []);
  console.log();
  
  return (
    <main className="main">
      <div className="main__info info">
        <div className="info__container container">

          {seasons.length ? seasons.map((currentSeasone: ISeasonWrapper, index: number) => {
            return (
              <Season
                key={index}
                seasonNumber={(index + 1).toString()}
                seasoneInfo={currentSeasone}
              />
            );
          })
          :
          <Loader/>
        }
        </div>
      </div>
    </main>
  );
};

export default Home;
