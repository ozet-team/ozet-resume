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
export type resumeDataType = {
  username: string;
  name: string;
  email: string;
  phoneNumber: string;
  birthday: string;
  gender: string;
  introduce: string;
  profileImage: string;
  address: string;
  policyForTermsAgreed: string;
  policyForPrivacyAgreed: string;
  snsList: [];
  career: [
    {
      company: string;
      position: string;
      joinAt: string;
      quitAt: string;
      workedOn: string;
    },
  ];
  certificate: [
    {
      name: string;
      vendor: string;
      certificateAt: string;
    },
  ];
  academic: [
    {
      major: string;
      location: string;
      joinAt: string;
      quitAt: string;
    },
  ];
  military: {
    service: string;
    exemptionReason: string;
    joinAt: string;
    quitAt: string;
  };
};
