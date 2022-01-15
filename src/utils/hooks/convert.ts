export const convertDate = (iso: string) => {
  const date = new Date(iso);
  return date.toISOString().substring(0, 10);
};
export const convertPosition = (positon: string) => {
  switch (positon) {
    case 'STAFF':
      return `인턴`;
    case 'MANAGER':
      return `매니저`;
    case 'DESIGNER':
      return `디자이너`;
    case 'LEDGER':
      return `원장`;
  }
};
export const convertPhoneNumber = (phone: string) => {
  const number = phone.replace(/\D/g, '').slice(-10);
  const firstNum = number.slice(0, 2);
  const secondNum = number.slice(2, 6);
  const thirdNum = number.slice(6, 11);
  return `0${firstNum} ${secondNum} ${thirdNum}`;
};
