import useSWR from 'swr';
import Api from '../index';

const getInstagramImage = async (url: string) => {
  const res = await Api.getInstagramImage(url);
  return res.data;
};

export const useGetInstagramImage = (id: string, socialKey: string) => {
  const { data, error } = useSWR(
    [`https://graph.instagram.com/${id}&access_token=${socialKey}`],
    getInstagramImage,
  );
  return {
    data: data && data,
    error: !error && !error,
  };
};
