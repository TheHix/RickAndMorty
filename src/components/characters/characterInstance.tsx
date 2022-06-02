import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { setCurrentCharacterInfo } from "../../store/store";
import { storage } from "../../tools/storage";
import { ICharacterInfo } from "../../Types/episodes";
import Loader from "../Loader";
interface CharacterInstanceProps {
  url: string;
}
const CharacterInstance: React.FC<CharacterInstanceProps> = ({ url }) => {
  const [characterInfo, setCharacterInfo] = useState<ICharacterInfo | null>(
    null
  );
  const getCharacterInfo = async (url: string) => {
    const res = await fetch(url);
    const json = await res.json();
    setCharacterInfo(json);
  };

  const { id } = useParams();
  const currentPath = useLocation();

  useEffect(() => {
    getCharacterInfo(url);
  }, []);

  return (
    <Link
      to={`${currentPath.pathname}${id}/detalis`}
      className="info__character character"
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
        <Loader/>
      )}
    </Link>
  );
};

export default CharacterInstance;
