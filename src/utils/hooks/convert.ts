export const convertDate = (iso: string) => {
  const date = new Date(iso);
  return date.toISOString().substring(0, 10);
};
