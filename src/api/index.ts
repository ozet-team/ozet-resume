import axios from 'axios';
import { ResumeData } from './ResumeData';

export class ResumeApi {
  private API: string;
  constructor() {
    this.API = 'my site link';
  }

  getResume = (id: string) => {
    return axios.get<typeof ResumeData>(`${this.API}/resume/detail/${id}`);
  };
}

export default new ResumeApi();
