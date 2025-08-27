import { format } from "timeago.js";

const formatDate = (date: Date | undefined): string => {
  if (date === undefined) return "";
  return format(date);
};

export default formatDate;
