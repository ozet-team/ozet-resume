import React, { useState } from 'react';
import {
  ProfileCategory,
  ProfileImage,
  ProfileImageWrapper,
  ProfileName,
  ProfileNameWrapper,
  ProfileNickname,
  ProfileTableRow,
  ProfileText,
  ProfileTextWrapper,
  ProfileWrapper,
  ResumeBr,
  ResumeDetailInner,
  ResumeDetailText,
  ResumeDetailTitle,
  ResumeDetailWrapper,
  ResumeMargin,
  ResumeSubTitle,
  ResumeTerm,
  ResumeWapper,
} from './styled';
import exProfileImg from '../../../img/profileImg.png';
import './Resume.css';
import ResumeCategoryBar from 'src/components/common/ResumeCategoryBar';
import { useParams } from 'react-router-dom';
import { ResumeData as profileData } from '../../../api/ResumeData';
import { modalAnimate } from 'src/components/common/Variants/Variants';

const ResumeWeb = () => {
  const tabs = [
    { label: '자기소개' },
    { label: '경력' },
    { label: '자격증' },
    { label: '학력' },
    { label: '병역' },
    { label: 'SNS' },
  ];
  const [selectedTab, setSelectedTab] = useState('자기소개');
  // const [profileData, setProfileData] = useState<typeof ResumeData>();
  const id = useParams<string>();
  // const getResumeData = async () => {
  //   const { data }: any = await Api.getResume(id);
  //   setProfileData(data);
  // };
  // useEffect(() => {
  //   // setProfileData(ResumeData);
  //   getResumeData();
  // }, []);

  return (
    <ResumeWapper>
      <ProfileWrapper className={'Profile'}>
        <ProfileNameWrapper>
          <ProfileNickname>{profileData?.nickname}</ProfileNickname>
          <ProfileName>{profileData?.name}</ProfileName>
        </ProfileNameWrapper>
        <ProfileImageWrapper>
          <ProfileImage src={exProfileImg} />
        </ProfileImageWrapper>
        <ProfileTextWrapper>
          <table>
            <ProfileTableRow>
              <ProfileCategory>경력</ProfileCategory>
              <ProfileText>
                인턴(스탭) 10년 12개월 매니저 10년 12개월 디자이너 10년 12개월
                원장 10년 12개월
              </ProfileText>
            </ProfileTableRow>
            <ProfileTableRow>
              <ProfileCategory>연락처</ProfileCategory>
              <ProfileText>010-0000-0000</ProfileText>
            </ProfileTableRow>
            <ProfileTableRow>
              <ProfileCategory>생년월일</ProfileCategory>
              <ProfileText>0000.00.00</ProfileText>
            </ProfileTableRow>
            <ProfileTableRow>
              <ProfileCategory>주소</ProfileCategory>
              <ProfileText>서울시 00구 00동</ProfileText>
            </ProfileTableRow>
            <ProfileTableRow>
              <ProfileCategory>SNS</ProfileCategory>
              <ProfileText>@hair_ozet</ProfileText>
            </ProfileTableRow>
          </table>
        </ProfileTextWrapper>
      </ProfileWrapper>
      <ResumeDetailWrapper
        variants={modalAnimate}
        initial={'start'}
        animate={'end'}
      >
        <ResumeCategoryBar
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <ResumeDetailInner>
          <ResumeSubTitle>자기소개 </ResumeSubTitle>
          <ResumeBr />
          <ResumeDetailText>
            미용사는 고객에게 적합한 머리 스타일을 연출하고, 기타 고객의 머리
            손질에 관련된 서비스를 제공하는 일을 담당한다. 고객의 얼굴이나
            머리형태에 따라 알맞은 머리 모양을 권하고, 고객의 모발 상태와 형태,
            모발의 손상 정도를 확인하여 머리모양을 결정
          </ResumeDetailText>
          <ResumeMargin />
          <ResumeSubTitle>경력 {profileData?.workTime}</ResumeSubTitle>
          <ResumeBr />
          {profileData?.workDetail.map((data) => (
            <>
              <ResumeDetailTitle>{data.spaceName}</ResumeDetailTitle>
              <ResumeDetailText>{data.workInformation}</ResumeDetailText>
              <ResumeTerm>{data.workPeriod}</ResumeTerm>
            </>
          ))}
          <ResumeMargin />
          <ResumeSubTitle>자격증</ResumeSubTitle>
          <ResumeBr />
          {profileData?.certificate.map((data) => (
            <>
              <ResumeDetailTitle>{data.name}</ResumeDetailTitle>
              <ResumeTerm>{data.date}</ResumeTerm>
            </>
          ))}
          <ResumeMargin />
          <ResumeSubTitle>학력</ResumeSubTitle>
          <ResumeBr />
          {profileData?.academic.map((data) => (
            <>
              <ResumeDetailTitle>{data.name}</ResumeDetailTitle>
              <ResumeTerm>{data.period}</ResumeTerm>
            </>
          ))}
          <ResumeMargin />
          <ResumeSubTitle>병역</ResumeSubTitle>
          <ResumeBr />
          <ResumeDetailTitle>{profileData?.military}</ResumeDetailTitle>
          <ResumeMargin />
          <ResumeSubTitle>instagram.com/hair_ozet/</ResumeSubTitle>
        </ResumeDetailInner>
      </ResumeDetailWrapper>
    </ResumeWapper>
  );
};

export default ResumeWeb;
