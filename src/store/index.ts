import {
  createEffect,
  createEvent,
  createStore,
  forward,
  sample,
} from "effector";
import { URL } from "../API/constants";
import { getConfidenceIntervalBetweenEpisodes } from "../tools/date";
import { ICharacterInfo, IEpisode, ILocationInfo, ISeason } from "../Types/types";

export const addSeason = createEvent<ISeason>();
export const seasonsFilter = createEvent<number>();
export const getlocationData = createEvent();
export const setCurrentId = createEvent<number>();
export const setCurrentEpisode = createEvent<IEpisode | null>();
export const setCurrentCharacterInfo = createEvent<ICharacterInfo | null>();
export const getCharactersUrls = createEffect();
export const setSeasons = createEvent();
export const assignSeries = createEvent();
export const getEpisodeCount = createEvent();
export const setLocationInfoUrl = createEvent<string>();

export const getSeasonFx = createEffect(async (page: number = 1) => {
  try {
    const response = await fetch(`${URL.episodes}?page=${page}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
});
export const getLocationInfoFX = createEffect(async (url: string) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
});
const $locationInfoUrl = createStore<string>("").on(
  setLocationInfoUrl,
  (_, url) => url
);

export const $locationInfo = createStore<ILocationInfo | null>(null).on(
  getLocationInfoFX.doneData,
  (_, locationInfo) => locationInfo
);
const getCharacterInfoAtCurrentLocationFx = createEffect((urls: string[]) => {
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
export const $characterInfoAtCurrentLocation = createStore<ICharacterInfo[]>(
  []
).on(
  getCharacterInfoAtCurrentLocationFx.doneData,
  (_, characterInfo) => characterInfo
);
sample({
  clock: setLocationInfoUrl,
  source: $locationInfoUrl,
  target: getLocationInfoFX,
});
sample({
  clock: getLocationInfoFX.doneData,
  source: $locationInfo,
  fn: (info) => info ? info.residents : [],
  target: getCharacterInfoAtCurrentLocationFx,
});

export const getInfoEpisode = async (numEpisodes: number) => {
  try {
    const response = await fetch(`${URL.episodes}/${numEpisodes}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
export const getInfoEpisodesFx = createEffect(async (numEpisodes: number) => {
  const episodes: IEpisode[] = [];
  for (let i = 1; i <= numEpisodes; i++) {
    episodes.push(await getInfoEpisode(i));
  }
  return episodes;
});
export const $infoEpisodes = createStore<IEpisode[]>([]).on(
  getInfoEpisodesFx.doneData,
  (_, info) => info
);

export const getEpisodeCountFX = createEffect(async () => {
  try {
    const result = await fetch(URL.episodes);
    const json = await result.json();
    return json.info.count;
  } catch (error) {
    console.log(error);
  }
});

export const $episodeCount = createStore<number>(0).on(
  getEpisodeCountFX.doneData,
  (_, num) => num
);

export const $seasons = createStore<IEpisode[][]>([])
  .on(setSeasons, (_, seasons) => seasons)
  .on(assignSeries, state => {
    return state.map((episodes: IEpisode[], season: number) => {
      return episodes.map((episode: IEpisode, episodeNum: number) => {
        return { ...episode, episodeNum: episodeNum + 1, season: season + 1 };
      });
    });
  });

const splitBySeason = (episodes: IEpisode[]) => {
  const locEpisodes = [...episodes];
  const seasons: IEpisode[][] = [];
  let startIndex = 0;
  for (let i = 1; i < locEpisodes.length; i++) {
    if (
      getConfidenceIntervalBetweenEpisodes(
        new Date(locEpisodes[i].air_date),
        new Date(locEpisodes[i - 1].air_date)
      ) ||
      i === locEpisodes.length - 1
    ) {
      if (i === locEpisodes.length - 1) {
        seasons.push(locEpisodes.slice(startIndex));
      } else {
        seasons.push(locEpisodes.slice(startIndex, i));
      }
      startIndex = i;
    }
  }
  return seasons;
};

forward({
  from: setSeasons,
  to: assignSeries,
});
sample({
  clock: getInfoEpisodesFx.doneData,
  target: setSeasons,
  fn: splitBySeason,
  source: $infoEpisodes,
});
sample({
  clock: getEpisodeCountFX.doneData,
  target: getInfoEpisodesFx,
  source: $episodeCount,
});
forward({
  from: getEpisodeCount,
  to: getEpisodeCountFX,
});
const getCharactersUrlsFx = createEffect(async (id: number) => {
  try {
    const response = await fetch(`${URL.episodes}/${id}`);
    const json = await response.json();
    return json.characters;
  } catch (error) {
    console.log(error);
  }
});
const getlocationDataFX = createEffect(async (url: string) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
});
const getcharacterInfoFx = createEffect((urls: string[]) => {
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
const getCountSeasonsFX = createEffect(async () => {
  try {
    const response = await fetch(URL.episodes);
    const json = await response.json();
    return json.info.pages;
  } catch (error) {
    console.log(error);
  }
});
const $countSeasons = createStore<number>(0).on(
  getCountSeasonsFX.doneData,
  (_, count) => count
);
const $locationData = createStore<any>(null).on(
  getlocationDataFX.doneData,
  (_, locData) => locData
);

const $characterUrls = createStore<string[]>([]).on(
  getCharactersUrlsFx.doneData,
  (_, charactersUrl) => charactersUrl
);
const $characterInfo = createStore<ICharacterInfo[]>([]).on(
  getcharacterInfoFx.doneData,
  (_, info) => info
);
const $currentEpisode = createStore<IEpisode | null>(null).on(
  setCurrentEpisode,
  (_, currentEpisode) => currentEpisode
);
const $currentCharacterInfo = createStore<ICharacterInfo | null>(null).on(
  setCurrentCharacterInfo,
  (_, characterInfo) => characterInfo
);

const $currentId = createStore<number>(0).on(setCurrentId, (_, id) => id);

sample({
  clock: setCurrentId,
  target: getCharactersUrlsFx,
  source: $currentId,
});

sample({
  source: $characterUrls,
  target: getcharacterInfoFx,
  clock: getCharactersUrlsFx.doneData,
});

export {
  $currentId,
  $currentCharacterInfo,
  $locationData,
  $currentEpisode,
  $characterInfo,
  $characterUrls,
  $countSeasons,
};
