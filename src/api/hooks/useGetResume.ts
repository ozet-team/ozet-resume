import useSWR from 'swr';
import Api from '../index';

export async function getResume(id: string) {
  const res = await Api.getResume(id);
  return res.data;
}

export function useGetResume(id: string) {
  const { data: resumeData, error: resumeError } = useSWR(
    [id, `/member/user/${id}/resume`],
    getResume,
  );
  return {
    resumeData: resumeData && resumeData,
    error: !resumeError && !resumeError,
  };
}
