import useSWR from 'swr';
import Api from '../index';

async function getUserInfo(id: string) {
  const res = await Api.getUserInfo(id);
  return res.data;
}
export function useGetUserInfo(id: string) {
  const { data: userInfoData, error: userInfoError } = useSWR(
    [`/member/user/me`, id],
    getUserInfo,
  );
  return {
    data: userInfoData && userInfoData,
    userInfoError,
    loading: !userInfoError && !userInfoError,
  };
}
