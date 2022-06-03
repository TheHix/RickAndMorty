import { useStore } from "effector-react";
import React, { useEffect } from "react";
import CharacterList from "../../components/characters/CharacterList";
import Loader from "../../components/Loader";
import {
  $characterInfoAtCurrentLocation,
  $currentCharacterInfo,
  $locationInfo,
  setLocationInfoUrl,
} from "../../store";
import { storage } from "../../tools/storage";

const LocationInfo = () => {
  const characterInfoAtCurrentLocation = useStore(
    $characterInfoAtCurrentLocation
  );
  const currentCharacterInfo = useStore($currentCharacterInfo);
  const locationInfo = useStore($locationInfo);
  useEffect(() => {
    setLocationInfoUrl(currentCharacterInfo?.location.url ?? storage.getLocation());
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
