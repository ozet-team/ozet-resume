export const calculateDuration = (joinAt: string, quitAt: string) => {
  const joinDate = new Date(joinAt);
  const quitDate = new Date(quitAt);
  const durationMs = quitDate.getTime() - joinDate.getTime();
  const durationDay = durationMs / (1000 * 60 * 60 * 24);
  const duration = {
    year: Math.floor(durationDay / 365),
    month: Math.floor((durationDay % 365) / 30),
  };
  console.log(durationDay);
  console.log(Math.floor(durationDay % 365));
  console.log(duration.year, duration.month);
  return duration;
};
