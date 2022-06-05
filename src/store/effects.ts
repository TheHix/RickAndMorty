import { createEffect } from "effector";
import { URL } from "../API/constants";
import { IEpisode } from "../Types/types";

export const getInfoEpisodesFx = createEffect(async (numEpisodes: number) => {
  const episodes: IEpisode[] = [];
  for (let i = 1; i <= numEpisodes; i++) {
    episodes.push(await getInfoEpisode(i));
  }
  return episodes;
});

//-------------------
const getInfoEpisode = async (numEpisodes: number) => {
  try {
    const response = await fetch(`${URL.episodes}/${numEpisodes}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
//-------------------

export const getCharacterInfoAtCurrentLocationFx = createEffect(
  (urls: string[]) => {
    return Promise.all(
      urls.map(async url => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          return json;
        } catch (error) {
          console.log(error);
        }
      })
    );
  }
);
export const getCharactersUrlsFx = createEffect(async (id: number) => {
  try {
    const response = await fetch(`${URL.episodes}/${id}`);
    const json = await response.json();
    return json.characters;
  } catch (error) {
    console.log(error);
  }
});
export const getlocationDataFx = createEffect(async (url: string) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
});
export const getcharacterInfoFx = createEffect((urls: string[]) => {
  return Promise.all(
    urls.map(async url => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
      } catch (error) {
        console.log(error);
      }
    })
  );
});
export const getCountSeasonsFx = createEffect(async () => {
  try {
    const response = await fetch(URL.episodes);
    const json = await response.json();
    return json.info.pages;
  } catch (error) {
    console.log(error);
  }
});
export const getSeasonFx = createEffect(async (page: number = 1) => {
  try {
    const response = await fetch(`${URL.episodes}?page=${page}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
});
export const getLocationInfoFx = createEffect(async (url: string) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
});
export const getEpisodeCountFx = createEffect(async () => {
  try {
    const result = await fetch(URL.episodes);
    const json = await result.json();
    return json.info.count;
  } catch (error) {
    console.log(error);
  }
});
