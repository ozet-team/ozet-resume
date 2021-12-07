import axios from 'axios';
import { sessionList } from './mock';

export class ResumeApi {
  private API: string;
  constructor() {
    this.API = 'my site link';
  }

  getResume = (id: string) => {
    return axios.get<typeof sessionList>(`${this.API}/resume/detail/${id}`);
  };
}

export default new ResumeApi();
