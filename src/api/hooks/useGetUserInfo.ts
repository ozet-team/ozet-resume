import useSWR from 'swr';
import Api from '../index';

async function getUserInfo() {
  const res = await Api.getUserInfo();
  return res.data;
}
export function useGetUserInfo() {
  const { data: userInfoData, error: userInfoError } = useSWR(
    [`/member/user/me`],
    getUserInfo,
  );
  return {
    data: userInfoData && userInfoData,
    userInfoError,
    loading: !userInfoError && !userInfoError,
  };
}
