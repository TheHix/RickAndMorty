import {
  createEffect,
  createEvent,
  createStore,
  forward,
  sample,
} from "effector";
import { URL } from "../API/constants";
import { getConfidenceIntervalBetweenEpisodes } from "../tools/date";
import {
  ICharacterInfo,
  IEpisode,
  ILocationInfo,
  ISeason,
  ISeasonWrapper,
} from "../Types/types";
import {
  getCharacterInfoAtCurrentLocationFx,
  getcharacterInfoFx,
  getCharactersUrlsFx,
  getCountSeasonsFx,
  getEpisodeCountFx,
  getInfoEpisodesFx,
  getlocationDataFx,
  getLocationInfoFx,
} from "./effects";
import { splitBySeason } from "./tools";

const setCurrentId = createEvent<number>();
const setCurrentEpisode = createEvent<IEpisode | null>();
const setCurrentCharacterInfo = createEvent<ICharacterInfo | null>();
const setSeasons = createEvent();
const assignSeries = createEvent();
const getEpisodeCount = createEvent();
const setLocationInfoUrl = createEvent<string>();
const setSort = createEvent<string>();
const setCondition = createEvent<number>();

const $locationInfoUrl = createStore<string>("").on(
  setLocationInfoUrl,
  (_, url) => url
);

const $sort = createStore<string>("по эпизоду").on(setSort, (_, sort) => sort);

const $locationInfo = createStore<ILocationInfo | null>(null).on(
  getLocationInfoFx.doneData,
  (_, locationInfo) => locationInfo
);

const $characterInfoAtCurrentLocation = createStore<ICharacterInfo[]>([]).on(
  getCharacterInfoAtCurrentLocationFx.doneData,
  (_, characterInfo) => characterInfo
);

const $infoEpisodes = createStore<IEpisode[]>([]).on(
  getInfoEpisodesFx.doneData,
  (_, info) => info
);

const $episodeCount = createStore<number>(0).on(
  getEpisodeCountFx.doneData,
  (_, num) => num
);
const $seasons = createStore<any>([])
  .on(setSeasons, (_, seasons) => seasons)
  .on(assignSeries, state => {
    return state.map((episodes: IEpisode[], season: number) => {
      return {
        condition: true,
        episodes: episodes.map((episode: IEpisode, episodeNum: number) => {
          return { ...episode, episodeNum: episodeNum + 1, season: season + 1 };
        }),
      };
    });
  })
  .on(setCondition, (state, num) => {
    const cuurentState = [...state];
    cuurentState[num].condition = !cuurentState[num].condition;
    return cuurentState;
  });

const $countSeasons = createStore<number>(0).on(
  getCountSeasonsFx.doneData,
  (_, count) => count
);
const $locationData = createStore<ILocationInfo | null>(null).on(
  getlocationDataFx.doneData,
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
  clock: getEpisodeCountFx.doneData,
  target: getInfoEpisodesFx,
  source: $episodeCount,
});
forward({
  from: getEpisodeCount,
  to: getEpisodeCountFx,
});
//--------------
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

//--------------
sample({
  clock: setLocationInfoUrl,
  source: $locationInfoUrl,
  target: getLocationInfoFx,
});
sample({
  clock: getLocationInfoFx.doneData,
  source: $locationInfo,
  fn: info => (info ? info.residents : []),
  target: getCharacterInfoAtCurrentLocationFx,
});

export {
  //events
  setCurrentId,
  setCurrentEpisode,
  setCurrentCharacterInfo,
  setSeasons,
  assignSeries,
  getEpisodeCount,
  setLocationInfoUrl,
  setSort,
  setCondition,
  //stores
  $seasons,
  $characterInfoAtCurrentLocation,
  $sort,
  $currentId,
  $currentCharacterInfo,
  $locationData,
  $currentEpisode,
  $characterInfo,
  $characterUrls,
  $countSeasons,
  $locationInfo,
};
