export interface IEpisode {
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
