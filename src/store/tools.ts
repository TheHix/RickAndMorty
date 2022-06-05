import { getConfidenceIntervalBetweenEpisodes } from "../tools/date";
import { IEpisode } from "../Types/types";

export const splitBySeason = (episodes: IEpisode[]) => {
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
