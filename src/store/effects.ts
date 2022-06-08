import { createEffect } from "effector";
import {
  collectInfoEpisodes,
  getAllCharacters,
  getCharactersUrls,
  getCountSeasons,
  getlocationData,
  getLocationInfo,
  getSeason,
  getTotalCountEpisodes,
} from "../API/api";

export const getInfoEpisodesFx = createEffect(collectInfoEpisodes);
export const getCharacterInfoAtCurrentLocationFx = createEffect(getAllCharacters);
export const getCharactersUrlsFx = createEffect(getCharactersUrls);
export const getlocationDataFx = createEffect(getlocationData);
export const getcharacterInfoFx = createEffect(getAllCharacters);
export const getCountSeasonsFx = createEffect(getCountSeasons);
export const getSeasonFx = createEffect(getSeason);
export const getLocationInfoFx = createEffect(getLocationInfo);
export const getEpisodeCountFx = createEffect(getTotalCountEpisodes);
