export interface IEpisode {
  id?: number;
  air_date: string;
  name: string;
  episode: string;
  characters: string[];
}
export interface ISeason {
  info?: {
    pages?: number;
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
  };
  origin: {
    name: string;
  };
}
