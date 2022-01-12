import useSWR from 'swr';
import Api from '../index';

async function getResume() {
  const res = await Api.getResume();
  return res.data;
}

export function useGetResume() {
  const { data: resumeData, error: resumeError } = useSWR(
    [`/member/user/me/resume`],
    getResume,
  );
  return {
    data: resumeData && resumeData,
    resumeError,
    loading: !resumeError && !resumeError,
  };
}
