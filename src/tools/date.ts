import { differenceInMonths } from "date-fns";
export const getConfidenceIntervalBetweenEpisodes = (
  dateLeft: Date,
  dateRight: Date
): any => {
  const difference = differenceInMonths(dateLeft, dateRight);
  //если разница между сериями больше 8 месяцев вернуть true, иначе false
  return difference > 8;
};
