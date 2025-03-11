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

export const doPublishAccessibility = (subscriptionType: string) => {
  if (
    subscriptionType === "free" ||
    subscriptionType === "pro" ||
    subscriptionType === "premium"
  ) {
    return true;
  } else {
    return false;
  }
};

export interface ITopicData {
  title: string;
  color: string;
  selected: boolean;
}

export const topicsData: ITopicData[] = [
  { title: "#AIWriting", color: "bg-blue-100 text-blue-800", selected: true },
  {
    title: "#StoryGeneration",
    color: "bg-purple-100 text-purple-800",
    selected: true,
  },
  { title: "#Writing", color: "bg-blue-100 text-blue-800", selected: false },
  {
    title: "#Creativity",
    color: "bg-green-100 text-green-800",
    selected: false,
  },
  {
    title: "#DigitalMarketing",
    color: "bg-yellow-100 text-yellow-800",
    selected: false,
  },
  {
    title: "#Storytelling",
    color: "bg-purple-100 text-purple-800",
    selected: false,
  },
  { title: "#Productivity", color: "bg-red-100 text-red-800", selected: false },
];
