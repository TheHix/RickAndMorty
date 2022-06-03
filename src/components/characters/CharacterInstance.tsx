import React from "react";
import { Link, useParams } from "react-router-dom";
import { setCurrentCharacterInfo } from "../../store/store";
import { storage } from "../../tools/storage";
import { ICharacterInfo } from "../../Types/types";
import Loader from "../Loader";
interface CharacterInstanceProps {
  characterInfo: ICharacterInfo;
}
const CharacterInstance: React.FC<CharacterInstanceProps> = ({
  characterInfo,
}) => {
  const { id } = useParams();
  return (
    <Link
      to={`/info/${id}/detalis`}
      className="characters-info__character character"
      onClick={() => {
        if (characterInfo !== null) {
          storage.saveCurrentCharacterInfo(characterInfo);
        }
        setCurrentCharacterInfo(characterInfo);
      }}
    >
      {characterInfo !== null ? (
        <>
          <div className="character__img">
            <img src={characterInfo.image} alt="фото персонажа:)" />
          </div>
          <div className="character__text text-character">
            <div className="text-character__item">
              Имя: {characterInfo.name}
            </div>
            <div className="text-character__item">
              Cтатус: {characterInfo.status}
            </div>
            <div className="text-character__item">
              Вид: {characterInfo.species}
            </div>
            <div className="text-character__item">
              Пол: {characterInfo.gender}
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </Link>
  );
};

export default CharacterInstance;
