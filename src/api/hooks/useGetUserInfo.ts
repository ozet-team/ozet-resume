import useSWR from 'swr';
import Api from '../index';

async function getUserInfo(jwtToken: string) {
  const res = await Api.getUserInfo(jwtToken);
  return res.data;
}
export function useGetUserInfo(jwtToken: string) {
  const { data: userInfo, error } = useSWR([jwtToken], getUserInfo);
  return {
    data: userInfo && error,
    error,
    loading: !error && !userInfo,
  };
}
