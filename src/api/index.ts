import axios from 'axios';
import { resumeDataType, userData, userInfoDataType } from './types';

export class ResumeApi {
  private API: string;
  private JWT: string | null;
  constructor() {
    this.API = 'https://api-staging.ozet.app/api/v1';
    this.JWT = localStorage.getItem('jwtToken');
  }

  getUserInfo = () => {
    return axios.get<userInfoDataType>(`${this.API}/member/user/me`, {
      headers: {
        Authorization: `JWT ${this.JWT}`,
      },
    });
  };
  getResume = () => {
    return axios.get<resumeDataType>(`${this.API}/member/user/me/resume`, {
      headers: {
        Authorization: `JWT ${this.JWT}`,
      },
    });
  };
  getJWT = (payload: { userId: string }) => {
    return axios
      .post<userData>(`${this.API}/member/auth/passcode/pass`, payload)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
      });
  };
}

export default new ResumeApi();
