import {
  combine,
  createEffect,
  createEvent,
  createStore,
  restore,
} from "effector";
import { URL } from "../API/constants";
interface IEpisode {
  id: number;
  air_date: string;
  name: string;
  episode: string;
  characters: string[];
}
interface ISeason {
  info?: {
    pages?: number;
  };
  results: IEpisode[];
}
interface ISeasonInfo {
  seasonInfo: ISeason;
}
export const $episodes = createStore<IEpisode[]>([]);
export const season = createEvent<IEpisode>();
export const getSeason = createEffect(async (page: number = 1) => {
  try {
    const response = await fetch(
      `${URL.episodes}?page=${page}`
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
  
});

export default createStore<ISeasonInfo>({
  seasonInfo: {
    info: {},
    results: [],
  },
}).on(getSeason.doneData, (state, season) => ({ ...state, season }));
