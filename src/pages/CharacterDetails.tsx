import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { $currentCharacterInfo, setCurrentCharacterInfo } from "../store/store";
import { storage } from "../tools/storage";

const CharacterDetails: React.FC = () => {
  const currentCharacterInfo = useStore($currentCharacterInfo);
  useEffect(() => {
    setCurrentCharacterInfo(
      currentCharacterInfo ?? storage.getCurrentCharacterInfo()
    );
  }, []);
  return (
    <main className="main">
      <div className="main__detalis detalis">
        <div className="detalis__container container">
          {currentCharacterInfo !== null ? (
            <div className="detalis__body">
              <div className="detalis__img">
                <img src={currentCharacterInfo.image} alt="" />
              </div>
              <div className="detalis__info detalis-info">
                <div className="detalis-info__item">
                  Имя: {currentCharacterInfo.name}
                </div>
                <div className="detalis-info__item">
                  Cтатус: {currentCharacterInfo.status}
                </div>
                <div className="detalis-info__item">
                  Вид: {currentCharacterInfo.species}
                </div>
                <div className="detalis-info__item">
                  Пол: {currentCharacterInfo.gender}
                </div>
                <div className="detalis-info__item">
                  Место проживания: {currentCharacterInfo.origin.name}
                </div>
                <div className="detalis-info__item">
                  Последняя локация: {currentCharacterInfo.location.name}
                </div>
                {currentCharacterInfo.location.name === "unknown" ? null : (
                  <div className="detalis-info__btn">Подробнее о последней локации</div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default CharacterDetails;
