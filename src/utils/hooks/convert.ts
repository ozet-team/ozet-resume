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
