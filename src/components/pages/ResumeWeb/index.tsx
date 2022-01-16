import React, { useEffect, useRef, useState } from 'react';
import {
  ImageListWrapper,
  ImageListWrapperLess,
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
  ResumeWrapper,
  StyledTable,
} from './styled';
import exProfileImg from '../../../img/profileImg.png';
import './Resume.css';
import ResumeCategoryBar from 'src/components/common/ResumeCategoryBar';
import { useParams } from 'react-router-dom';
// import { resumeData, userInfoData } from '../../../api/ResumeData';
import InstagramImage from '../../../img/Instagram_logo.png';
import InstagramTestImage from '../../../img/InstagramTestImage.svg';
import Api from '../../../api/index';
import { imgAnimate, profileAnimate } from '../../common/Variants/Variants';
import { useGetResume } from '../../../api/hooks/useGetResume';
import {
  calculateDuration,
  changeDateYM,
  changeDateYMD,
  getFullDuration,
  getYearMonth,
} from '../../../utils/hooks/calculateDuration';
import { useGetUserInfo } from '../../../api/hooks/useGetUserInfo';
import {
  convertBirth,
  convertPhoneNumber,
  convertPosition,
} from '../../../utils/hooks/convert';
import { resumeDataType, userInfoDataType } from '../../../api/types';
import CareerTable from '../../common/CareerTable';

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
  // const [modalHeight, setModalHeight] = useState<number | undefined>(0);
  // const [tabHeight, setTabHeight] = useState<number | undefined>(0);
  const [toggle, setToggle] = useState<boolean>(false);

  const id = useParams<string>();
  useEffect(() => {
    Api.getJWT({ user_id: '9' });
  }, []);
  const jwtToken = localStorage.getItem('jwtToken');

  const userInfo: any = useGetUserInfo();
  const userInfoData: userInfoDataType = userInfo.data;
  const resume: any = useGetResume();
  const resumeData: resumeDataType = resume.data;

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

  let modalAnimate = {};
  const isMobile = window.innerWidth < 500;
  if (isMobile) {
    modalAnimate = {
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
  }
  useEffect(() => {
    setProfileHeight(lastElement.current?.getBoundingClientRect().bottom);
  });

  return (
    <>
      {resumeData && userInfoData && (
        <ResumeWrapper>
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
                    checkID={checkID}
                    profileDetail={profileDetail}
                  />
                </ResumeCategoryBarWrapper>
                <ResumeDetailInner ref={profileDetail}>
                  <ResumeInnerWrapper>
                    <ResumeMargin ref={career} />
                    <ResumeSubTitle>
                      경력 ({getFullDuration(userInfoData.career)})
                    </ResumeSubTitle>
                    <ResumeBr />
                    {resumeData.career.map((data: any) => (
                      <>
                        <ResumeDetailTitle>{data.company}</ResumeDetailTitle>
                        <ResumeSmallMargin />
                        <ResumeTerm>
                          {changeDateYM(data.joinAt)} ~{' '}
                          {changeDateYM(data.quitAt)} (
                          {calculateDuration(data.joinAt, data.quitAt)}) |{' '}
                          {convertPosition(data.position)}
                        </ResumeTerm>
                        <ResumeSmallMargin />
                        <ResumeDetailText>{data.workedOn}</ResumeDetailText>
                        <ResumeMargin />
                      </>
                    ))}
                    <ResumeMargin ref={certificate} />
                    <ResumeSubTitle>자격증</ResumeSubTitle>
                    <ResumeBr />
                    {resumeData.certificate.map((data: any) => (
                      <>
                        <ResumeDetailTitle>{data.name}</ResumeDetailTitle>
                        <ResumeSmallMargin />
                        <ResumeTerm>
                          {changeDateYMD(data.certificateAt)}
                        </ResumeTerm>
                        <ResumeSmallMargin />
                        <ResumeDetailText>{data.vendor}</ResumeDetailText>
                        <ResumeMargin />
                      </>
                    ))}
                    <ResumeMargin ref={academic} />
                    <ResumeSubTitle>학력</ResumeSubTitle>
                    <ResumeBr />
                    {resumeData.academic.map((data: any) => (
                      <>
                        <ResumeDetailTitle>{data.major}</ResumeDetailTitle>
                        <ResumeSmallMargin />
                        <ResumeTerm>
                          {changeDateYM(data.joinAt)} ~{' '}
                          {changeDateYM(data.quitAt)}
                        </ResumeTerm>
                        <ResumeMargin />
                      </>
                    ))}
                    <ResumeMargin ref={military} />
                    <ResumeSubTitle>병역</ResumeSubTitle>
                    <ResumeBr />
                    <ResumeDetailTitle>
                      {resumeData.military.service}
                    </ResumeDetailTitle>
                    <ResumeSmallMargin />
                    <ResumeTerm>
                      {changeDateYM(resumeData.military.joinAt)} ~{' '}
                      {changeDateYM(resumeData.military.quitAt)}
                    </ResumeTerm>
                    <ResumeSmallMargin />
                    <ResumeDetailText>
                      {resumeData.military.exemptionReason}
                    </ResumeDetailText>
                    <ResumeMargin ref={introduce} />
                    <ResumeSubTitle>자기소개 </ResumeSubTitle>
                    <ResumeBr />
                    <ResumeDetailText>
                      {userInfoData.introduce}
                    </ResumeDetailText>
                    <ResumeMargin ref={sns} />
                    <ResumeSubTitle>SNS</ResumeSubTitle>
                    <ResumeBr />
                    <ResumeSnsLink>
                      <ResumeInstagramLogo src={InstagramImage} />
                      <ResumeDetailText>
                        @{userInfoData.snsAddress}
                      </ResumeDetailText>
                    </ResumeSnsLink>
                    {/*SNS 이미지*/}
                    {userInfoData.snsList.length > 4 ? (
                      <>
                        <ImageListWrapper>
                          {userInfoData.snsList.map(
                            (
                              data: {
                                username: string;
                                url: string;
                              },
                              id: number,
                            ) => (
                              <ResumeImageWrapper key={id}>
                                <ResumeSnsImage
                                  width={'100px'}
                                  src={data.url}
                                />
                              </ResumeImageWrapper>
                            ),
                          )}
                        </ImageListWrapper>
                      </>
                    ) : (
                      <>
                        <ImageListWrapperLess>
                          {userInfoData.snsList.map((data: any, id: any) => (
                            <ImageListWrapperLess key={id}>
                              <ResumeSnsImage
                                width={'100%'}
                                src={InstagramTestImage}
                              />
                            </ImageListWrapperLess>
                          ))}
                        </ImageListWrapperLess>
                      </>
                    )}

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
                    <ProfileNickname>닉네임</ProfileNickname>
                    <ProfileName>{userInfoData.name}</ProfileName>
                  </ProfileNameWrapper>
                  <PcTableWrapper>
                    {/*경력사항*/}
                    <StyledTable>
                      <ProfileTableRow>
                        <ProfileCategory>경력</ProfileCategory>
                        <ProfileText>
                          <CareerTable career={userInfoData.career} />
                        </ProfileText>
                      </ProfileTableRow>
                      <ProfileTableRow>
                        <ProfileCategory>연락처</ProfileCategory>
                        <ProfileText>
                          {convertPhoneNumber(userInfoData.phoneNumber)}
                        </ProfileText>
                      </ProfileTableRow>
                    </StyledTable>
                    <StyledTable margin={50}>
                      <ProfileTableRow>
                        <ProfileCategory>생년월일</ProfileCategory>
                        <ProfileText>
                          {convertBirth(userInfoData.birthday)}
                        </ProfileText>
                      </ProfileTableRow>
                      <ProfileTableRow>
                        <ProfileCategory>주소</ProfileCategory>
                        <ProfileText>{userInfoData.address}</ProfileText>
                      </ProfileTableRow>
                      <ProfileTableRow>
                        <ProfileCategory>SNS</ProfileCategory>
                        <ProfileText>@{userInfoData.snsAddress}</ProfileText>
                      </ProfileTableRow>
                    </StyledTable>
                  </PcTableWrapper>
                </PcHeaderWrapper>
                <PcProfileImage src={userInfoData.profileImage} />
                <ProfileImageWrapper>
                  <ProfileImage
                    src={userInfoData.profileImage}
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
                    <CareerTable career={userInfoData.career} />
                  </ProfileText>
                </ProfileTableRow>
                <ProfileTableRow>
                  <ProfileCategory>연락처</ProfileCategory>
                  <ProfileText>
                    {convertPhoneNumber(userInfoData.phoneNumber)}
                  </ProfileText>
                </ProfileTableRow>
                <ProfileTableRow>
                  <ProfileCategory>생년월일</ProfileCategory>
                  <ProfileText>
                    {convertBirth(userInfoData.birthday)}
                  </ProfileText>
                </ProfileTableRow>
                <ProfileTableRow>
                  <ProfileCategory>주소</ProfileCategory>
                  <ProfileText>{userInfoData.address}</ProfileText>
                </ProfileTableRow>
                <ProfileTableRow>
                  <ProfileCategory>SNS</ProfileCategory>
                  <ProfileText>@{userInfoData.snsAddress}</ProfileText>
                </ProfileTableRow>
              </StyledTable>
            </ProfileTextWrapper>
            <div ref={lastElement} />
          </ProfileWrapper>
        </ResumeWrapper>
      )}
    </>
  );
};

export default ResumeWeb;
