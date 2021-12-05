import React, { useState } from 'react';
import {
  ProfileImage,
  ProfileImageWrapper,
  ProfileIntroduce,
  ProfileName,
  ProfileNickname,
  ProfileWrapper,
  ProfileTextWrapper,
  ResumeDetailWrapper,
  ResumeSubTitle,
  ResumeDetailTitle,
  ResumeDetailText,
  ResumeTerm,
  ResumeBr,
} from './styled';
import exProfileImg from '../../../img/profileImg.png';
import './Resume.css';
import ResumeCategoryBar from 'src/components/common/ResumeCategoryBar';
import { useParams } from 'react-router-dom';
import { ResumeData } from '../../../api/ResumeData';

const ResumeWeb = () => {
  const tabs = [{ label: '상세정보' }, { label: 'SNS' }];
  const [selectedTab, setSelectedTab] = useState('상세정보');
  const { id } = useParams<{ id: string }>();
  const profileData = ResumeData.find((data) => data.id === Number(id));
  return (
    <>
      <ProfileWrapper className={'Profile'}>
        <ProfileImageWrapper>
          <ProfileImage src={exProfileImg} />
        </ProfileImageWrapper>
        <ProfileTextWrapper>
          <ProfileNickname>{profileData?.nickname}</ProfileNickname>
          <ProfileName>{profileData?.name}</ProfileName>
          <ProfileIntroduce>{profileData?.introduce}</ProfileIntroduce>
        </ProfileTextWrapper>
      </ProfileWrapper>
      <ResumeCategoryBar
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === '상세정보' ? (
        <ResumeDetailWrapper>
          <ResumeSubTitle>경력 {profileData?.workTime}</ResumeSubTitle>
          {profileData?.workDetail.map((data) => (
            <>
              <ResumeDetailTitle>{data.spaceName}</ResumeDetailTitle>
              <ResumeDetailText>{data.workInformation}</ResumeDetailText>
              <ResumeTerm>{data.workPeriod}</ResumeTerm>
            </>
          ))}
          <ResumeBr />
          <ResumeSubTitle>자격증</ResumeSubTitle>
          {profileData?.certificate.map((data) => (
            <>
              <ResumeDetailTitle>{data.name}</ResumeDetailTitle>
              <ResumeTerm>{data.date}</ResumeTerm>
            </>
          ))}
          <ResumeBr />
          <ResumeSubTitle>학력</ResumeSubTitle>
          {profileData?.academic.map((data) => (
            <>
              <ResumeDetailTitle>{data.name}</ResumeDetailTitle>
              <ResumeTerm>{data.period}</ResumeTerm>
            </>
          ))}
          <ResumeBr />
          <ResumeSubTitle>병역</ResumeSubTitle>
          <ResumeDetailTitle>{profileData?.military}</ResumeDetailTitle>
        </ResumeDetailWrapper>
      ) : null}
      {selectedTab === 'SNS' ? (
        <ResumeDetailWrapper>
          <ResumeSubTitle>instagram.com/hair_ozet/</ResumeSubTitle>
        </ResumeDetailWrapper>
      ) : null}
    </>
  );
};

export default ResumeWeb;
