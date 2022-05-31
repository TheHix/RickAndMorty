import React, { useEffect, useState } from "react";
import { ICharacterInfo } from "../../Types/episodes";
interface CharacterInstanceProps {
  url: string;
}
const CharacterInstance: React.FC<CharacterInstanceProps> = ({ url }) => {
  const [characterInfo, setcharacterInfo] = useState<ICharacterInfo | null>(
    null
  );

  const getCharacterInfo = async (url: string) => {
    const res = await fetch(url);
    const json = await res.json();
    setcharacterInfo(json);
  };

  useEffect(() => {
    getCharacterInfo(url);
  }, []);

  return (
    <div className="info__character character">
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
              Гендер: {characterInfo.gender}
            </div>
            <div className="text-character__item">
              Локация: {characterInfo.location.name}
            </div>
          </div>
        </>
      ) : (
        <div>загрузка...</div>
      )}
    </div>
  );
};

export default CharacterInstance;
