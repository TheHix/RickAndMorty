import { createEffect, createEvent, createStore } from "effector";
import { URL } from "../API/constants";
import { IEpisode, ISeason } from "../Types/episodes";

export const addSeason = createEvent<ISeason>();
export const seasonsFilter = createEvent<number>();
export const season = createEvent<IEpisode>();

export const getSeasonFx = createEffect(async (page: number = 1) => {
  try {
    const response = await fetch(`${URL.episodes}?page=${page}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
});

export const getCharactersUrlsFx = createEffect(async (id: number) => {
  try {
    const response = await fetch(`${URL.episodes}/${id}`);
    const json = await response.json();
    return json.characters;
  } catch (error) {
    console.log(error);
  }
});

export const $characterUrls = createStore<string[]>([]).on(
  getCharactersUrlsFx.doneData,
  (_, charactersUrl) => charactersUrl
);

export const $seasones = createStore<ISeason[]>([])
  .on(addSeason, (state, newSeson) => [...state, newSeson])
  .on(seasonsFilter, (state, numSeasone: number) => {
    return state.filter((seasone: ISeason) => {
      return seasone.info?.pages !== numSeasone;
    });
  });
