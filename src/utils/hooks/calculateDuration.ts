import moment from 'moment';

export const calculateDuration = (joinAt: string, quitAt: string) => {
  const t1 = moment(joinAt, 'YYYY-MM-DD');
  const t2 = moment(quitAt, 'YYYY-MM-DD');
  const rowMonth = moment.duration(t2.diff(t1)).asMonths();
  const rowYear = moment.duration(t2.diff(t1)).asYears();
  const month = Math.round(rowMonth);
  const year = Math.floor(rowYear);

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
export const getFullDuration = (
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
