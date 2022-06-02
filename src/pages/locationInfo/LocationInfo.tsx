import { useStore } from "effector-react";
import React, { useEffect } from "react";
import CharacterListInfo from "../../components/CharacterListInfo";
import Loader from "../../components/Loader";
import {
  $characterInfoAtCurrentLocation,
  $currentCharacterInfo,
  $locationInfo,
  setLocationInfoUrl,
} from "../../store";
import { ICharacterInfo } from "../../Types/types";
import CharacterInstance from "../episodeDetails/characters/CharacterInstance";

const LocationInfo = () => {
  const characterInfoAtCurrentLocation = useStore(
    $characterInfoAtCurrentLocation
  );
  const currentCharacterInfo = useStore($currentCharacterInfo);
  const locationInfo = useStore($locationInfo);
  useEffect(() => {
    if (currentCharacterInfo !== null) {
      setLocationInfoUrl(currentCharacterInfo?.location.url);
    }
  }, []);
  console.log(locationInfo, characterInfoAtCurrentLocation);
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
          <CharacterListInfo characterInfo={characterInfoAtCurrentLocation} />
        </div>
      </div>
    </main>
  );
};

export default LocationInfo;
