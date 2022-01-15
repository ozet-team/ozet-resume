import { createArrayReporterError } from 'jest-config/build/ReporterValidationErrors';

export const calculateDuration = (joinAt: string, quitAt: string) => {
  const joinDate = new Date(joinAt);
  const quitDate = new Date(quitAt);
  const durationMs = quitDate.getTime() - joinDate.getTime();
  const durationDay = durationMs / (1000 * 60 * 60 * 24);
  const year = Math.floor(durationDay / 365);
  const month = Math.floor((durationDay % 365) / 30);
  if (month < 1) {
    return `${year}년`;
  } else if (year < 1) {
    return `${month}개월`;
  } else {
    return `${year}년 ${month}개월`;
  }
};
export const getYearMonth = (date: number) => {
  const year = Math.floor(date / 365);
  const month = Math.floor((date % 365) / 30);
  if (month < 1) {
    return `${year}년`;
  } else if (year < 1) {
    return `${month}개월`;
  } else {
    return `${year}년 ${month}개월`;
  }
};
export const getFullduration = (
  career: {
    position: string;
    duration: number;
  }[],
) => {
  let date = 0;
  career.map((data) => (date = date + data.duration));
  const year = Math.floor(date / 365);
  const month = Math.floor((date % 365) / 30);
  if (month < 1) {
    return `${year}년`;
  } else if (year < 1) {
    return `${month}개월`;
  } else {
    return `${year}년 ${month}개월`;
  }
};
export const changeDateYM = (fullDate: string) => {
  const newDate = new Date(fullDate);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  return `${year}. ${month}`;
};
export const changeDateYMD = (fullDate: string) => {
  const newDate = new Date(fullDate);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  return `${year}. ${month}. ${date}`;
};
