import { REQUEST_LIMITS } from "../../constants/subscription";

export const getShortenedText = (
  content: string | undefined,
  wordLimit: number = 35
): string => {
  if (!content) return "";
  const words: string[] = content.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : content;
};

export const getRequestLimit = (subscriptionType: string) => {
  if (subscriptionType === "free") {
    return REQUEST_LIMITS.free;
  } else if (subscriptionType === "pro") {
    return REQUEST_LIMITS.pro;
  } else if (subscriptionType === "premium") {
    return REQUEST_LIMITS.premium;
  } else {
    return 3;
  }
};

export const topicsData = [
  { title: "#AIWriting", color: "bg-blue-100 text-blue-800" },
  { title: "#StoryGeneration", color: "bg-purple-100 text-purple-800" },
  { title: "#Writing", color: "bg-blue-100 text-blue-800" },
  { title: "#Creativity", color: "bg-green-100 text-green-800" },
  { title: "#DigitalMarketing", color: "bg-yellow-100 text-yellow-800" },
  { title: "#Storytelling", color: "bg-purple-100 text-purple-800" },
  { title: "#Productivity", color: "bg-red-100 text-red-800" },
];
