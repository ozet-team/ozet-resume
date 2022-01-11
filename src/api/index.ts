import axios from 'axios';
import { resumeDataType, userData, userInfoDataType } from './types';

export class ResumeApi {
  private API: string;
  constructor() {
    this.API = 'https://api-staging.ozet.app/api/v1';
  }

  getUserInfo = (jwtToken: string) => {
    return axios.get<userInfoDataType>(`${this.API}/member/user/me`, {
      headers: {
        Authorization: `JWT ${jwtToken}`,
      },
    });
  };
  getResume = (jwtToken: string) => {
    return axios.get<resumeDataType>(`${this.API}/member/user/me/resume`, {
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
