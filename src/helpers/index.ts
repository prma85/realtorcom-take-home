import { Feature, Properties } from "../interfaces/database";

export const getMonth = (m: number) => {
  switch (m) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jum";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
    default:
      return 'Invalid Month'
  }
};

export const convertDateToString = (d: number) => {
  const date = new Date(d);
  let hours: string | number = date.getHours();
  let minutes: string | number = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes} ${ampm}`;
  return `${getMonth(
    date.getMonth() + 1
  )} ${date.getDate()}, ${date.getFullYear()}, ${strTime}`;
};

export const sortBy = (by: keyof Properties, asc: boolean) => (
  a: Feature,
  b: Feature
) => {
  if (a.properties[by]! > b.properties[by]!) return asc ? 1 : -1;
  if (a.properties[by]! < b.properties[by]!) return asc ? -1 : 1;
  return 0;
};

export const capitalizeFirstLetter = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const convertToSentenceCase = (value: string) => {
  const result = value.replace(/([A-Z])/g, " $1");
  return capitalizeFirstLetter(result);
};
