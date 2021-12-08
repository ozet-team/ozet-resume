import React, { useEffect, useRef, useState } from 'react';
import {
  ProfileCategory,
  ProfileHeaderWrapper,
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
  StyledTable,
} from './styled';
import exProfileImg from '../../../img/profileImg.png';
import './Resume.css';
import ResumeCategoryBar from 'src/components/common/ResumeCategoryBar';
import { useParams } from 'react-router-dom';
import { ResumeData as profileData } from '../../../api/ResumeData';

import './Resume.css';
import { imgAnimate, profileAnimate } from '../../common/Variants/Variants';
const ResumeWeb = () => {
  const tabs = [
    { label: '자기소개', id: 'introduce' },
    { label: '경력', id: 'career' },
    { label: '자격증', id: 'certificate' },
    { label: '학력', id: 'academic' },
    { label: '병역', id: 'military' },
    { label: 'SNS', id: 'sns' },
  ];
  const introduce = useRef<HTMLDivElement>(null);
  const career = useRef<HTMLDivElement>(null);
  const certificate = useRef<HTMLDivElement>(null);
  const academic = useRef<HTMLDivElement>(null);
  const military = useRef<HTMLDivElement>(null);
  const sns = useRef<HTMLDivElement>(null);
  const lastElement = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState('introduce');
  const [profileHeight, setProfileHeight] = useState<number | undefined>(0);
  const [tabHeight, setTabHeight] = useState<number | undefined>(0);
  // const [profileData, setProfileData] = useState<typeof ResumeData>();
  const [toggle, setToggle] = useState<boolean>(false);

  const id = useParams<string>();
  // const getResumeData = async () => {
  //   const { data }: any = await Api.getResume(id);
  //   setProfileData(data);
  // };

  const checkID = async (key: string) => {
    switch (key) {
      case 'introduce':
        return introduce.current?.getBoundingClientRect().bottom;
      case 'career':
        return career.current?.getBoundingClientRect().bottom;
      case 'certificate':
        return certificate.current?.getBoundingClientRect().bottom;
      case 'academic':
        return academic.current?.getBoundingClientRect().bottom;
      case 'military':
        return military.current?.getBoundingClientRect().bottom;
      case 'sns':
        return sns.current?.getBoundingClientRect().bottom;
    }
  };

  useEffect(() => {
    setProfileHeight(lastElement.current?.getBoundingClientRect().bottom);

    // setProfileData(ResumeData);
    // getResumeData();
  }, [selectedTab]);

  const modalAnimate = {
    unActive: {
      top: profileHeight,
      transition: {
        duration: 0.5,
      },
    },
    active: {
      opacity: 1,
      top: 148,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <ResumeWapper>
      <ResumeDetailWrapper
        variants={modalAnimate}
        animate={toggle ? 'active' : 'unActive'}
        transition={{ duration: 0.5 }}
        onClick={() => {
          setToggle(true);
        }}
      >
        <ResumeCategoryBar
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabHeight={tabHeight}
          checkID={checkID}
        />
        <ResumeDetailInner>
          <ResumeSubTitle ref={introduce}>자기소개 </ResumeSubTitle>
          <ResumeBr />
          <ResumeDetailText>
            미용사는 고객에게 적합한 머리 스타일을 연출하고, 기타 고객의 머리
            손질에 관련된 서비스를 제공하는 일을 담당한다. 고객의 얼굴이나
            머리형태에 따라 알맞은 머리 모양을 권하고, 고객의 모발 상태와 형태,
            모발의 손상 정도를 확인하여 머리모양을 결정
          </ResumeDetailText>
          <ResumeMargin />
          <ResumeSubTitle ref={career}>
            경력 {profileData?.workTime}
          </ResumeSubTitle>
          <ResumeBr />
          {profileData?.workDetail.map((data) => (
            <>
              <ResumeDetailTitle>{data.spaceName}</ResumeDetailTitle>
              <ResumeDetailText>{data.workInformation}</ResumeDetailText>
              <ResumeTerm>{data.workPeriod}</ResumeTerm>
            </>
          ))}
          <ResumeMargin />
          <ResumeSubTitle ref={certificate}>자격증</ResumeSubTitle>
          <ResumeBr />
          {profileData?.certificate.map((data) => (
            <>
              <ResumeDetailTitle>{data.name}</ResumeDetailTitle>
              <ResumeTerm>{data.date}</ResumeTerm>
            </>
          ))}
          <ResumeMargin />
          <ResumeSubTitle ref={academic}>학력</ResumeSubTitle>
          <ResumeBr />
          {profileData?.academic.map((data) => (
            <>
              <ResumeDetailTitle>{data.name}</ResumeDetailTitle>
              <ResumeTerm>{data.period}</ResumeTerm>
            </>
          ))}
          <ResumeMargin />
          <ResumeSubTitle ref={military}>병역</ResumeSubTitle>
          <ResumeBr />
          <ResumeDetailTitle>{profileData?.military}</ResumeDetailTitle>
          <ResumeMargin />
          <ResumeSubTitle ref={sns}>SNS</ResumeSubTitle>
          <ResumeBr />
          <ResumeSubTitle>instagram.com/hair_ozet/</ResumeSubTitle>
        </ResumeDetailInner>
      </ResumeDetailWrapper>
      <ProfileWrapper
        className={'Profile'}
        onClick={() => {
          setToggle(false);
        }}
      >
        <ProfileHeaderWrapper>
          <ProfileNameWrapper>
            <ProfileNickname>{profileData?.nickname}</ProfileNickname>
            <ProfileName>{profileData?.name}</ProfileName>
          </ProfileNameWrapper>
          <ProfileImageWrapper>
            <ProfileImage
              src={exProfileImg}
              variants={imgAnimate}
              animate={toggle ? 'active' : 'unActive'}
              transition={{ duration: 0.5 }}
            />
          </ProfileImageWrapper>
        </ProfileHeaderWrapper>
        <ProfileTextWrapper
          variants={profileAnimate}
          animate={toggle ? 'active' : 'unActive'}
          transition={{ duration: 0.3 }}
        >
          <StyledTable>
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
          </StyledTable>
          <div ref={lastElement} />
        </ProfileTextWrapper>
      </ProfileWrapper>
    </ResumeWapper>
  );
};

export default ResumeWeb;
