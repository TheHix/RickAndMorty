export interface IEpisode {
  id: number;
  air_date: string;
  name: string;
  episode: string;
  characters: string[];
  episodeNum: number;
  season: number;
}
export interface ISeasonWrapper {
  condition: boolean;
  episodes: IEpisode[];
}
export interface ISeason {
  info: {
    pages: number;
  };
  results: IEpisode[];
}
export interface ICharacterInfo {
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
  };
  created: string;
}
export interface ILocationInfo {
  type: string;
  residents: string[];
  name: string;
  dimension: string;
}
