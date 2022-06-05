import { useStore } from "effector-react";
import React, { useEffect, useState } from "react";
import CharacterList from "../../components/characters/CharacterList";
import Loader from "../../components/Loader";
import {
  $characterInfoAtCurrentLocation,
  $currentCharacterInfo,
  $locationInfo,
  setLocationInfoUrl,
} from "../../store/store";
import { storage } from "../../tools/storage";

const scroll = (e: any) => {
  if (
    e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight) <
    100
  ) {
    console.log("scroll");
  }
};

const LocationInfo: React.FC = () => {
  const characterInfoAtCurrentLocation = useStore(
    $characterInfoAtCurrentLocation
  );
  const currentCharacterInfo = useStore($currentCharacterInfo);
  const locationInfo = useStore($locationInfo);
  const [fetching, setFetching] = useState<boolean>(true);

  useEffect(() => {
    if (currentCharacterInfo?.location.url !== storage.getLocation()) {
      setLocationInfoUrl(
        currentCharacterInfo?.location.url ?? storage.getLocation()
      );
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scroll);
    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <main className="main">
      <div className="main__locaion locaion">
        <div className="locaion__container container">
          {!!locationInfo ? (
            <div className="locaion__detalis detalis-locaion">
              <div className="detalis-locaion__item">{locationInfo.name}</div>
              <div className="detalis-locaion__item">
                Измерение {locationInfo.dimension}
              </div>
              <div className="detalis-locaion__item">{locationInfo.type}</div>
            </div>
          ) : (
            <Loader />
          )}
          <CharacterList characterInfo={characterInfoAtCurrentLocation} />
        </div>
      </div>
    </main>
  );
};

export default LocationInfo;
