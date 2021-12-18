import axios from 'axios';
import { ResumeData } from './ResumeData';

export class ResumeApi {
  private API: string;
  private KEY: string;
  constructor() {
    this.API = 'https://api-staging.ozet.app/api/v1';
    this.KEY = '';
  }

  getResume = () => {
    return axios.get<typeof ResumeData>(`${this.API}/member/user/me`, {
      headers: {
        Authorization: `${this.KEY}`,
      },
    });
  };
}

export default new ResumeApi();
