import axios from 'axios';
import {
  instagramDataType,
  resumeDataType,
  userData,
  userInfoDataType,
} from './types';

export class ResumeApi {
  private API: string;
  constructor() {
    this.API = 'https://api-staging.ozet.app/api/v1';
  }

  getUserInfo = (id: string) => {
    return axios.get<userInfoDataType>(`${this.API}${id}`);
  };
  getResume = (id: string) => {
    return axios.get<resumeDataType>(`${this.API}${id}`);
  };
  getInstagramImage = (url: string) => {
    return axios.get<instagramDataType>(`${url}`);
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
