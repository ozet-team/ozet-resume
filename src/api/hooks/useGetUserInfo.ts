import useSWR from 'swr';
import Api from '../index';

async function getUserInfo(id: string) {
  const res = await Api.getUserInfo(id);
  return res.data;
}
export function useGetUserInfo(id: string) {
  const { data: userInfoData, error } = useSWR(
    [id, `/member/user/${id}`],
    getUserInfo,
  );
  return {
    userInfoData: userInfoData && userInfoData,
    error: !error && !error,
  };
}
