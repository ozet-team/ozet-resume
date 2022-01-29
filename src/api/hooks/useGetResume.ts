import useSWR from 'swr';
import Api from '../index';

async function getResume(id: string) {
  const res = await Api.getResume(id);
  return res.data;
}

export function useGetResume(id: string) {
  const { data: resumeData, error: resumeError } = useSWR(
    [`/member/user/${id}/resume`],
    getResume,
  );
  return {
    data: resumeData && resumeData,
    resumeError,
    loading: !resumeError && !resumeError,
  };
}
