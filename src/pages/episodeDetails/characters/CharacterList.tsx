import { useStore } from "effector-react";
import React from "react";
import { $characterInfo } from "../../../store";
import { ICharacterInfo } from "../../../Types/types";
import Loader from "../../../components/Loader";
import CharacterInstance from "./CharacterInstance";

const CharacterList = () => {
    const characterInfo = useStore($characterInfo);
  return (
    <div className="info__characters characters-info">
      <h1 className="characters-info__title">Персонажи</h1>
      <div className="characters-info__body">
        {characterInfo.length ? (
          characterInfo.map((character: ICharacterInfo, index: number) => {
            return <CharacterInstance key={index} characterInfo={character} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default CharacterList;
