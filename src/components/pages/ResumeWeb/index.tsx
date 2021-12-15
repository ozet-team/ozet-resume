import React, { useEffect, useRef, useState } from 'react';
import {
  ImageListWrapper,
  PcHeaderWrapper,
  PcProfileImage,
  PcTableWrapper,
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
  ResumeCategoryBarWrapper,
  ResumeColumnBar,
  ResumeDetailInner,
  ResumeDetailText,
  ResumeDetailTitle,
  ResumeDetailWrapper,
  ResumeImageWrapper,
  ResumeInnerWrapper,
  ResumeInstagramLogo,
  ResumeMargin,
  ResumeModalInner,
  ResumeModalWrapper,
  ResumeSmallMargin,
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
import InstagramImage from '../../../img/Instagram_logo.png';
import InstagramTestImage from '../../../img/InstagramTestImage.svg';

import './Resume.css';
import { imgAnimate, profileAnimate } from '../../common/Variants/Variants';
const ResumeWeb = () => {
  const tabs = [
    { label: '경력', id: 'career' },
    { label: '자격증', id: 'certificate' },
    { label: '학력', id: 'academic' },
    { label: '병역', id: 'military' },
    { label: '자기소개', id: 'introduce' },
    { label: 'SNS', id: 'sns' },
  ];
  const profileDetail = useRef<HTMLDivElement>(null);
  const introduce = useRef<HTMLDivElement>(null);
  const career = useRef<HTMLDivElement>(null);
  const certificate = useRef<HTMLDivElement>(null);
  const academic = useRef<HTMLDivElement>(null);
  const military = useRef<HTMLDivElement>(null);
  const sns = useRef<HTMLDivElement>(null);
  const lastElement = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState('career');
  const [profileHeight, setProfileHeight] = useState<number | undefined>(0);
  const [modalHeight, setModalHeight] = useState<number | undefined>(0);
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
  console.log(modalHeight);
  useEffect(() => {
    setProfileHeight(lastElement.current?.getBoundingClientRect().bottom);
    setModalHeight(profileDetail.current?.clientHeight as number);
    // getResumeData();
  }, [selectedTab]);
  let modalAnimate = {};
  const isMobile = window.innerWidth < 500;
  if (isMobile) {
    modalAnimate = {
      unActive: {
        top: profileHeight,
        // top: window.innerHeight - 60,
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
  }

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
        <ResumeModalWrapper>
          <ResumeModalInner>
            <ResumeCategoryBarWrapper>
              <ResumeCategoryBar
                tabs={tabs}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                tabHeight={tabHeight}
                checkID={checkID}
                profileDetail={profileDetail}
              />
            </ResumeCategoryBarWrapper>
            <ResumeDetailInner ref={profileDetail}>
              <ResumeInnerWrapper>
                <ResumeMargin ref={career} />
                <ResumeSubTitle>
                  경력 ({profileData?.workPeriod})
                </ResumeSubTitle>
                <ResumeBr />
                {profileData?.workDetail.map((data) => (
                  <>
                    <ResumeDetailTitle>{data.spaceName}</ResumeDetailTitle>
                    <ResumeSmallMargin />
                    <ResumeTerm>{data.workPeriod}</ResumeTerm>
                    <ResumeSmallMargin />
                    <ResumeDetailText>{data.workInformation}</ResumeDetailText>
                    <ResumeMargin />
                  </>
                ))}
                <ResumeMargin ref={certificate} />
                <ResumeSubTitle>자격증</ResumeSubTitle>
                <ResumeBr />
                {profileData?.certificate.map((data) => (
                  <>
                    <ResumeDetailTitle>{data.name}</ResumeDetailTitle>
                    <ResumeSmallMargin />
                    <ResumeTerm>{data.date}</ResumeTerm>
                    <ResumeSmallMargin />
                    <ResumeDetailText>기관</ResumeDetailText>
                    <ResumeMargin />
                  </>
                ))}
                <ResumeMargin ref={academic} />
                <ResumeSubTitle>학력</ResumeSubTitle>
                <ResumeBr />
                {profileData?.academic.map((data) => (
                  <>
                    <ResumeDetailTitle>{data.name}</ResumeDetailTitle>
                    <ResumeSmallMargin />
                    <ResumeTerm>{data.period}</ResumeTerm>
                    <ResumeMargin />
                  </>
                ))}
                <ResumeMargin ref={military} />
                <ResumeSubTitle>병역</ResumeSubTitle>
                <ResumeBr />
                <ResumeDetailTitle>
                  {profileData?.military.category}
                </ResumeDetailTitle>
                <ResumeSmallMargin />
                <ResumeTerm>{profileData?.military.period}</ResumeTerm>
                <ResumeSmallMargin />
                <ResumeDetailText>
                  {profileData?.military.detail}
                </ResumeDetailText>
                <ResumeMargin ref={introduce} />
                <ResumeSubTitle>자기소개 </ResumeSubTitle>
                <ResumeBr />
                <ResumeDetailText>{profileData?.introduce}</ResumeDetailText>
                <ResumeMargin ref={sns} />
                <ResumeSubTitle>SNS </ResumeSubTitle>
                <ResumeBr />
                <ResumeSnsLink>
                  <ResumeInstagramLogo src={InstagramImage} />
                  <ResumeDetailText>{profileData?.snsLink}</ResumeDetailText>
                </ResumeSnsLink>
                <ImageListWrapper>
                  <ResumeImageWrapper>
                    <ResumeSnsImage src={InstagramTestImage} />
                  </ResumeImageWrapper>
                  <ResumeImageWrapper>
                    <ResumeSnsImage src={InstagramTestImage} />
                  </ResumeImageWrapper>
                  <ResumeImageWrapper>
                    <ResumeSnsImage src={InstagramTestImage} />
                  </ResumeImageWrapper>
                  <ResumeImageWrapper>
                    <ResumeSnsImage src={InstagramTestImage} />
                  </ResumeImageWrapper>
                  <ResumeImageWrapper>
                    <ResumeSnsImage src={InstagramTestImage} />
                  </ResumeImageWrapper>
                  <ResumeImageWrapper>
                    <ResumeSnsImage src={InstagramTestImage} />
                  </ResumeImageWrapper>
                </ImageListWrapper>
                <ResumeMargin />
                <ResumeMargin />
                <ResumeMargin />
              </ResumeInnerWrapper>
            </ResumeDetailInner>
          </ResumeModalInner>
        </ResumeModalWrapper>
      </ResumeDetailWrapper>
      <ProfileWrapper
        className={'Profile'}
        onClick={() => {
          setToggle(false);
        }}
      >
        <ProfileHeaderWrapper>
          <ProfileHeaderInner>
            <PcHeaderWrapper>
              <ProfileNameWrapper>
                <ProfileNickname>{profileData?.nickname}</ProfileNickname>
                <ProfileName>{profileData?.name}</ProfileName>
              </ProfileNameWrapper>
              <PcTableWrapper>
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
                </StyledTable>
                <StyledTable>
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
              </PcTableWrapper>
            </PcHeaderWrapper>
            <PcProfileImage src={exProfileImg} />
            <ProfileImageWrapper>
              <ProfileImage
                src={exProfileImg}
                variants={imgAnimate}
                animate={toggle ? 'active' : 'unActive'}
                transition={{ duration: 0.5 }}
              />
            </ProfileImageWrapper>
          </ProfileHeaderInner>
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
        </ProfileTextWrapper>
        <div ref={lastElement} />
      </ProfileWrapper>
    </ResumeWapper>
  );
};

export default ResumeWeb;
