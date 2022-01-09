import useSWR from 'swr';
import Api from '../index';

async function getResume(jwtToken: string) {
  const res = await Api.getResume(jwtToken);
  return res.data;
}

export function useGetResume(jwtToken: string) {
  const { data, error } = useSWR([jwtToken], getResume);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
