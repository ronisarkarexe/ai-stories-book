export const getISTTimeFormate = (expiredAt: number) => {
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  }).format(new Date(expiredAt));
  return formattedTime;
};
