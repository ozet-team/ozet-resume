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
  username: 'ozet_d16066f09b594276bb7d9628e5ea1564';
  name: '김헤어';
  email: 'kimhair@hair.com';
  phoneNumber: '+821057809397';
  birthday: '1997-07-12';
  gender: 'MALE';
  introduce: '내가 바로 개쩌는 헤어 디자이너';
  profileImage: 'https://ozet-bucket.s3.ap-northeast-2.amazonaws.com/media/user/profile/5/20211213_92573506';
  address: '경기도 성남시 분당구 야탑동 386-4';
  policyForTermsAgreed: '2021-12-11T03:07:48.706758';
  policyForPrivacyAgreed: '2021-12-11T03:07:48.706758';
  snsList: [];
  career: [
    {
      company: 'string';
      position: 'STAFF';
      joinAt: '2022-01-09T16:40:57.318Z';
      quitAt: '2022-01-09T16:40:57.318Z';
      workedOn: 'string';
    },
  ];
  certificate: [
    {
      name: 'string';
      vendor: 'string';
      certificateAt: '2022-01-09T16:40:57.318Z';
    },
  ];
  academic: [
    {
      major: 'string';
      location: 'string';
      joinAt: '2022-01-09T16:40:57.318Z';
      quitAt: '2022-01-09T16:40:57.318Z';
    },
  ];
  military: {
    service: 'NA';
    exemptionReason: 'string';
    joinAt: '2022-01-09T16:40:57.318Z';
    quitAt: '2022-01-09T16:40:57.318Z';
  };
};
