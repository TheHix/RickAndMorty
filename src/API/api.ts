import { IEpisode } from "../Types/types";
import { URL } from "./constants";

const getAllCharacters = async (nums: string) => {
  try {
    const response = await fetch(`${URL.characters}/${nums}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const getInfoEpisode = async (numEpisodes: number) => {
  try {
    const response = await fetch(`${URL.episodes}/${numEpisodes}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const collectInfoEpisodes = async (numEpisodes: number) => {
  const episodes: IEpisode[] = [];
  for (let i = 1; i <= numEpisodes; i++) {
    episodes.push(await getInfoEpisode(i));
  }
  return episodes;
};

const getTotalCountEpisodes = async () => {
  try {
    const result = await fetch(URL.episodes);
    const json = await result.json();
    return json.info.count;
  } catch (error) {
    console.log(error);
  }
};

const getLocationInfo = async (url: string) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const getSeason = async (page: number = 1) => {
  try {
    const response = await fetch(`${URL.episodes}?page=${page}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const getlocationData = async (url: string) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const getCharactersUrls = async (id: number) => {
  try {
    const response = await fetch(`${URL.episodes}/${id}`);
    const json = await response.json();
    return json.characters;
  } catch (error) {
    console.log(error);
  }
};

const getCountSeasons = async () => {
  try {
    const response = await fetch(URL.episodes);
    const json = await response.json();
    return json.info.pages;
  } catch (error) {
    console.log(error);
  }
};

export {
  getInfoEpisode,
  getAllCharacters,
  collectInfoEpisodes,
  getTotalCountEpisodes,
  getLocationInfo,
  getSeason,
  getlocationData,
  getCharactersUrls,
  getCountSeasons,
};
