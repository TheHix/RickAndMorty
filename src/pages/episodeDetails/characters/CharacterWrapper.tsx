import { useStore } from "effector-react";
import React from "react";
import CharacterList from "../../../components/characters/CharacterList";
import { $characterInfo } from "../../../store/store";

const CharacterWrapper: React.FC = () => {
  const characterInfo = useStore($characterInfo);
  return <CharacterList characterInfo={characterInfo} />;
};

export default CharacterWrapper;
