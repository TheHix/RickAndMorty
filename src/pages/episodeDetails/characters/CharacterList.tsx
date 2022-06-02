import { useStore } from "effector-react";
import React from "react";
import { $characterInfo } from "../../../store";
import CharacterListInfo from "../../../components/CharacterListInfo";

const CharacterList = () => {
  const characterInfo = useStore($characterInfo);
  return <CharacterListInfo characterInfo={characterInfo} />;
};

export default CharacterList;
