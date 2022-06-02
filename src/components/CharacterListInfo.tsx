import React from "react";
import CharacterInstance from "../pages/episodeDetails/characters/CharacterInstance";
import { ICharacterInfo } from "../Types/types";
import Loader from "./Loader";
interface CharacterListInfoProps {
  characterInfo: ICharacterInfo[];
}
const CharacterListInfo: React.FC<CharacterListInfoProps> = ({
  characterInfo,
}) => {
  return (
    <div className="info__characters characters-info">
      <h1 className="characters-info__title">Персонажи</h1>
      {characterInfo.length ? (
        <div className="characters-info__body characters-block">
          {characterInfo.map((character: ICharacterInfo, index: number) => {
            return <CharacterInstance key={index} characterInfo={character} />;
          })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CharacterListInfo;
