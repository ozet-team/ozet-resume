export const convertDate = (iso: string) => {
  const date = new Date(iso);
  return date.toISOString().substring(0, 10);
};
export const convertPosition = (position: string) => {
  switch (position) {
    case 'STAFF':
      return `인턴`;
    case 'MANAGER':
      return `매니저`;
    case 'DESIGNER':
      return `디자이너`;
    case 'DIRECTOR':
      return `원장`;
  }
};
export const convertMilitary = (military: string) => {
  switch (military) {
    case 'NA':
      return `공익`;
    case 'EXEMPTION':
      return `면제`;
    case 'UNFINISHED':
      return `복무 중`;
    case 'FINISHED':
      return `군필`;
  }
};
export const convertPhoneNumber = (phone: string) => {
  const number = phone.replace(/\D/g, '').slice(-10);
  const firstNum = number.slice(0, 2);
  const secondNum = number.slice(2, 6);
  const thirdNum = number.slice(6, 11);
  return `0${firstNum} ${secondNum} ${thirdNum}`;
};
export const locationConvert = (fullLocation: string) => {
  const location = fullLocation.split(' ');
  return `${location[0]} ${location[1]} ${location[2]}`;
};
export const convertBirth = (birth: string) => {
  const birthDate = birth.split('-');
  return `${birthDate[0]}. ${birthDate[1]}. ${birthDate[2]}`;
};
