import axios from 'axios';
import { ResumeData } from './ResumeData';
import { userData } from './types';
import { setAuthorizationToken } from '../utils/hooks/setAuthorizationToken';

export class ResumeApi {
  private API: string;
  constructor() {
    this.API = 'https://api-staging.ozet.app/api/v1';
  }

  getResume = (jwtToken: string) => {
    return axios.get<typeof ResumeData>(`${this.API}/member/user/me`, {
      headers: {
        Authorization: `JWT ${jwtToken}`,
      },
    });
  };
  getJWT = (payload: { user_id: string }) => {
    return axios
      .post<userData>(`${this.API}/member/auth/passcode/pass`, payload)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
      });
  };
}

export default new ResumeApi();
