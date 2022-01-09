export interface SignInRequest {
  email: string;
}

export type userData = {
  user: {
    username: string;
    name: string;
    email: string;
    phoneNumber: string;
  };
  token: string;
};
