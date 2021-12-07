import useSWR from 'swr';
import Api from '../index';

async function getResume(id: string) {
  const res = await Api.getResume(id);
  return res.data;
}

export function useGetResume() {
  const { data, error } = useSWR([`/resume`], getResume);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
