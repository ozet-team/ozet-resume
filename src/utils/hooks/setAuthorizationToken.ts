import axios from 'axios';

export function setAuthorizationToken(token: string) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common['Authorization'];
  }
}
