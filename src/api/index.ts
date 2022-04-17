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
    return axios.get<userInfoDataType>(`${this.API}/member/user/${id}`);
  };
  getResume = (id: string) => {
    return axios.get<resumeDataType>(`${this.API}/member/user/${id}/resume`);
  };
  getInstagramImage = (token: string) => {
    return axios.get<instagramDataType>(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  };
  postResumeHTML = (payload: { html: string }) => {
    return axios.patch(`${this.API}/member/user/me/resume/pdf/`, payload, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('jwtToken')}`,
      },
    });
  };
  getJWT = (payload: { user_id: string }) => {
    return axios
      .post<{ token: string }>(
        `${this.API}/member/auth/passcode/pass/`,
        payload,
      )
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
      });
  };
}

export default new ResumeApi();
