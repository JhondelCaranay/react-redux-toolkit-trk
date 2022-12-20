import { parseISO, formatDistanceToNow } from "date-fns";

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    console.log("🚀 ~ file: TimeAgo.jsx:4 ~ TimeAgo ~ timestamp", timestamp);
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span className="text-xs text-gray-800" title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};
