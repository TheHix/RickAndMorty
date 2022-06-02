import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CharacterInstance from "../components/characters/CharacterInstance";
import { $characterUrls, getCharactersUrlsFx } from "../store/store";

const CharacterList: React.FC = () => {
  const characterUrls = useStore($characterUrls);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCharactersUrlsFx(+id);
    }
  }, [id]);

  return (
    <main className="main">
      <div className="main__info info">
        <h1 className="info__title">Персонажи</h1>
        <div className="info__container container">
          <div className="info__body">
            {characterUrls.map((url: string, index: number) => {
              return <CharacterInstance key={index} url={url} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CharacterList;
