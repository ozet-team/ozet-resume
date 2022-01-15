import React from 'react';
import { ResumeWrapper } from '../ResumeWeb/styled';
import {
  DetailElementInner,
  ElementWrapper,
  HeaderElementInner,
  PdfDetailWrapper,
  PdfProfileDetail,
  PdfProfileDetailWrapper,
  PdfProfileImage,
  PdfProfileInner,
  PdfProfileName,
  PdfProfileNickname,
  PdfProfileTitleWrapper,
  PdfProfileWrapper,
} from './styled';
import { userInfoData } from '../../../api/ResumeData';

const ResumePdf = () => {
  return (
    <ResumeWrapper>
      <ElementWrapper>
        <HeaderElementInner>
          <PdfProfileWrapper>
            <PdfProfileInner>
              <PdfProfileImage src={userInfoData.profileImage} />
              <PdfProfileTitleWrapper>
                <PdfProfileNickname>닉네임</PdfProfileNickname>
                <PdfProfileName>{userInfoData.name}</PdfProfileName>
              </PdfProfileTitleWrapper>
            </PdfProfileInner>
            <PdfProfileDetailWrapper>
              <PdfProfileDetail>{userInfoData.phoneNumber}</PdfProfileDetail>
              <PdfProfileDetail>{userInfoData.birthday}</PdfProfileDetail>
              <PdfProfileDetail>{userInfoData.address}</PdfProfileDetail>
              <PdfProfileDetail>{userInfoData.snsAddress}</PdfProfileDetail>
            </PdfProfileDetailWrapper>
          </PdfProfileWrapper>
        </HeaderElementInner>
      </ElementWrapper>
      <PdfDetailWrapper>
        <DetailElementInner>asdsd</DetailElementInner>
      </PdfDetailWrapper>
    </ResumeWrapper>
  );
};

export default ResumePdf;
