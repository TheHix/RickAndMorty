import {
  combine,
  createEffect,
  createEvent,
  createStore,
  restore,
} from "effector";
import { URL } from "../API/constants";
import { IEpisode, ISeason } from "../Types/episodes";

export const addSeason = createEvent<ISeason>();
export const seasonsFilter = createEvent<number>();
export const season = createEvent<IEpisode>();
export const setSeasones = createEvent();
export const getSeasonFx = createEffect(async (page: number = 1) => {
  try {
    const response = await fetch(`${URL.episodes}?page=${page}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
});

export const $currentSeason = createStore<ISeason>({
  info: {},
  results: [],
}).on(getSeasonFx.doneData, (_, season) => season);

export const $seasones = createStore<ISeason[]>([])
  .on(setSeasones, () => {})
  .on(addSeason, (state, newSeson) => [...state, newSeson])
  .on(seasonsFilter, (state, numSeasone: number) => {
    return state.filter((seasone: ISeason) => {
      return seasone.info?.pages !== numSeasone;
    });
  });
