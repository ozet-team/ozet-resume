import React, { useEffect, useRef, useState } from 'react';
import {
  ProfileCategory,
  ProfileHeaderInner,
  ProfileHeaderWrapper,
  ProfileImage,
  ProfileImageWrapper,
  ProfileName,
  ProfileNameWrapper,
  ProfileNickname,
  ProfileTableRow,
  ProfileText,
  ProfileTextWrapper,
  ProfileWorkRow,
  ProfileWrapper,
  ResumeBr,
  ResumeColumnBar,
  ResumeDetailInner,
  ResumeDetailText,
  ResumeDetailTitle,
  ResumeDetailWrapper,
  ResumeImageWrapper,
  ResumeInstagramLogo,
  ResumeMargin,
  ResumeModalInner,
  ResumeModalWrapper,
  ResumeSnsImage,
  ResumeSnsLink,
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
import InstagramImage from '../../../img/InstagramLogo.svg';
import InstagramTestImage from '../../../img/InstagramTestImage.svg';

import './Resume.css';
import { imgAnimate, profileAnimate } from '../../common/Variants/Variants';
import { auto } from 'framer-motion/types/render/dom/value-types/type-auto';
import { useViewportScroll } from 'framer-motion';
const ResumeWeb = () => {
  const tabs = [
    { label: '경력', id: 'career' },
    { label: '자격증', id: 'certificate' },
    { label: '학력', id: 'academic' },
    { label: '병역', id: 'military' },
    { label: '자기소개', id: 'introduce' },
    { label: 'SNS', id: 'sns' },
  ];
  const profileName = useRef<HTMLDivElement>(null);
  const resumeHeight = useRef<HTMLDivElement>(null);
  const profileImage = useRef<HTMLDivElement>(null);
  const profileDetail = useRef<HTMLDivElement>(null);
  const introduce = useRef<HTMLDivElement>(null);
  const career = useRef<HTMLDivElement>(null);
  const certificate = useRef<HTMLDivElement>(null);
  const academic = useRef<HTMLDivElement>(null);
  const military = useRef<HTMLDivElement>(null);
  const sns = useRef<HTMLDivElement>(null);
  const lastElement = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState('introduce');
  const [profileHeight, setProfileHeight] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollActive, setScrollActive] = useState<boolean>(false);

  // const [profileData, setProfileData] = useState<typeof ResumeData>();
  const [toggle, setToggle] = useState<boolean>(false);
  const id = useParams<string>();
  const { scrollYProgress } = useViewportScroll();
  console.log(scrollYProgress);
  const scrollHandle = () => {
    if (scrollY > 100) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };
  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', scrollHandle);
    }
    scrollListener();
    return () => {
      window.removeEventListener('scroll', scrollHandle);
    };
  });
  const checkID = async (key: string) => {
    switch (key) {
      case 'introduce':
        return introduce.current?.offsetTop;
      case 'career':
        return career.current?.offsetTop;
      case 'certificate':
        return certificate.current?.offsetTop;
      case 'academic':
        return academic.current?.offsetTop;
      case 'military':
        return military.current?.offsetTop;
      case 'sns':
        return sns.current?.offsetTop;
    }
  };
  // useEffect(() => {
  //   checkResumeHeight();
  // });

  useEffect(() => {
    setProfileHeight(
      lastElement.current?.getBoundingClientRect().bottom as number,
    );
    // getResumeData();
  }, []);

  const modalAnimate = {
    unActive: {
      top: profileHeight,
      transition: {
        duration: 0.5,
      },
    },
    active: {
      opacity: 1,
      top: 104,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <ResumeWapper>
      <ProfileWrapper
        className={'Profile'}
        onClick={() => {
          setToggle(false);
        }}
      >
        <ProfileHeaderWrapper>
          <ProfileHeaderInner>
            <ProfileNameWrapper>
              <ProfileNickname>{profileData?.nickname}</ProfileNickname>
              <ProfileName>{profileData?.name}</ProfileName>
            </ProfileNameWrapper>
            <ProfileImageWrapper
              ref={profileImage}
              className={scrollActive ? 'imageClass' : ''}
            >
              <ProfileImage src={exProfileImg} />
            </ProfileImageWrapper>
          </ProfileHeaderInner>
        </ProfileHeaderWrapper>
        <ProfileTextWrapper
          ref={profileName}
          variants={profileAnimate}
          transition={{ duration: 0.3 }}
        >
          <StyledTable>
            <ProfileTableRow>
              <ProfileCategory>경력</ProfileCategory>
              <ProfileText>
                <ProfileWorkRow>
                  <div>{profileData?.workElement.intern}</div>
                  <ResumeColumnBar />
                  <div>{profileData?.workElement.manager}</div>
                </ProfileWorkRow>
                <ProfileWorkRow>
                  <div>{profileData?.workElement.designer}</div>
                  <ResumeColumnBar />
                  <div>{profileData?.workElement.ledger}</div>
                </ProfileWorkRow>
              </ProfileText>
            </ProfileTableRow>
            <ProfileTableRow>
              <ProfileCategory>연락처</ProfileCategory>
              <ProfileText>{profileData?.phone}</ProfileText>
            </ProfileTableRow>
            <ProfileTableRow>
              <ProfileCategory>생년월일</ProfileCategory>
              <ProfileText>{profileData?.birth}</ProfileText>
            </ProfileTableRow>
            <ProfileTableRow>
              <ProfileCategory>주소</ProfileCategory>
              <ProfileText>{profileData?.address}</ProfileText>
            </ProfileTableRow>
            <ProfileTableRow>
              <ProfileCategory>SNS</ProfileCategory>
              <ProfileText>{profileData?.snsLink}</ProfileText>
            </ProfileTableRow>
          </StyledTable>
          <div ref={lastElement} />
        </ProfileTextWrapper>
      </ProfileWrapper>
      <ResumeDetailWrapper
        profileHeight={profileHeight}
        variants={modalAnimate}
        transition={{ duration: 0.5 }}
        onClick={() => {
          setToggle(true);
        }}
      >
        <ResumeCategoryBar
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          checkID={checkID}
        />
        <ResumeDetailInner ref={profileDetail}>
          <ResumeSubTitle ref={career}>
            경력 {profileData?.workPeriod}
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
          <ResumeDetailTitle>
            {profileData?.military.category}
          </ResumeDetailTitle>
          <ResumeDetailText>{profileData?.military.period}</ResumeDetailText>
          <ResumeTerm>{profileData?.military.detail}</ResumeTerm>
          <ResumeMargin />
          <ResumeSubTitle ref={introduce}>자기소개 </ResumeSubTitle>
          <ResumeBr />
          <ResumeDetailText>{profileData?.introduce}</ResumeDetailText>
          <ResumeMargin />
          <ResumeSnsLink ref={sns}>
            <ResumeInstagramLogo src={InstagramImage} />
            <ResumeSubTitle>{profileData?.snsLink}</ResumeSubTitle>
          </ResumeSnsLink>
          <ResumeImageWrapper>
            <ResumeSnsImage src={InstagramTestImage} />
            <ResumeSnsImage src={InstagramTestImage} />
            <ResumeSnsImage src={InstagramTestImage} />
            <ResumeSnsImage src={InstagramTestImage} />
            <ResumeSnsImage src={InstagramTestImage} />
          </ResumeImageWrapper>
          <ResumeMargin />
        </ResumeDetailInner>
      </ResumeDetailWrapper>
    </ResumeWapper>
  );
};

export default ResumeWeb;
