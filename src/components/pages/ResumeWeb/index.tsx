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
  ResumeWapper,
  StyledTable,
} from './styled';
import exProfileImg from '../../../img/profileImg.png';
import './Resume.css';
import ResumeCategoryBar from 'src/components/common/ResumeCategoryBar';
import { useParams } from 'react-router-dom';
import { resumeData, userInfoData } from '../../../api/ResumeData';
import InstagramImage from '../../../img/Instagram_logo.png';
import InstagramTestImage from '../../../img/InstagramTestImage.svg';
import Api from '../../../api/index';
import { imgAnimate, profileAnimate } from '../../common/Variants/Variants';
import { useGetResume } from '../../../api/hooks/useGetResume';
import {
  calculateDuration,
  getFullduration,
  getYearMonth,
} from '../../../utils/hooks/calculateDuration';
import { useGetUserInfo } from '../../../api/hooks/useGetUserInfo';

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

  const careerDuration = (key: string) => {
    const date = userInfoData.career.find(
      (data) => data.position === key,
    )?.duration;

    const duration = getYearMonth(date as number);
    switch (key) {
      case 'STAFF':
        return `인턴(스탭) ${duration}`;
      case 'MANAGER':
        return `매니저 ${duration}`;
      case 'DESIGNER':
        return `디자이너 ${duration}`;
      case 'LEDGER':
        return `원장 ${duration}`;
    }
  };
  useEffect(() => {
    Api.getJWT({ user_id: '9' });
  }, []);
  const jwtToken = localStorage.getItem('jwtToken');
  if (jwtToken) {
    const userInfo: any = useGetUserInfo();
    console.log('userInfo', userInfo.data);
    const resume: any = useGetResume();
    console.log('userInfo', resume.data);
  }
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
  useEffect(() => {
    setProfileHeight(lastElement.current?.getBoundingClientRect().bottom);
  }, [selectedTab]);

  return (
    <>
      {resumeData && userInfoData && (
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
                    checkID={checkID}
                    profileDetail={profileDetail}
                  />
                </ResumeCategoryBarWrapper>
                <ResumeDetailInner ref={profileDetail}>
                  <ResumeInnerWrapper>
                    <ResumeMargin ref={career} />
                    <ResumeSubTitle>
                      경력 ({getFullduration(userInfoData.career)})
                    </ResumeSubTitle>
                    <ResumeBr />
                    {resumeData.career.map((data: any) => (
                      <>
                        <ResumeDetailTitle>{data.company}</ResumeDetailTitle>
                        <ResumeSmallMargin />
                        <ResumeTerm>
                          {data.joinAt} ~ {data.quitAt} (
                          {calculateDuration(data.joinAt, data.quitAt)})
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
                        <ResumeTerm>{data.certificateAt}</ResumeTerm>
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
                          {data.joinAt} ~ {data.quitAt}
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
                    <ResumeTerm>{resumeData.military.quitAt}</ResumeTerm>
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
                    <ProfileNickname>{userInfoData.name}</ProfileNickname>
                    <ProfileName>{userInfoData.name}</ProfileName>
                  </ProfileNameWrapper>
                  <PcTableWrapper>
                    {/*경력사항*/}
                    <StyledTable>
                      <ProfileTableRow>
                        <ProfileCategory>경력</ProfileCategory>
                        <ProfileText>
                          {userInfoData.career.length < 3 && (
                            <ProfileWorkRow>
                              {userInfoData.career.map((data, key) => (
                                <>
                                  <ResumeColumnBar
                                    display={key == 0 && 'none'}
                                  />
                                  <div>{careerDuration(data.position)}</div>
                                </>
                              ))}
                            </ProfileWorkRow>
                          )}
                          {userInfoData.career.length > 2 && (
                            <>
                              <ProfileWorkRow>
                                {userInfoData.career
                                  .slice(0, 2)
                                  .map((data, key) => (
                                    <>
                                      <ResumeColumnBar
                                        display={key == 0 && 'none'}
                                      />
                                      <div>{careerDuration(data.position)}</div>
                                    </>
                                  ))}
                              </ProfileWorkRow>
                              <ProfileWorkRow>
                                {userInfoData.career
                                  .slice(2, userInfoData.career.length)
                                  .map((data, key) => (
                                    <>
                                      <ResumeColumnBar
                                        display={key == 0 && 'none'}
                                      />
                                      <div>{careerDuration(data.position)}</div>
                                    </>
                                  ))}
                              </ProfileWorkRow>
                            </>
                          )}
                        </ProfileText>
                      </ProfileTableRow>
                      <ProfileTableRow>
                        <ProfileCategory>연락처</ProfileCategory>
                        <ProfileText>{userInfoData.phoneNumber}</ProfileText>
                      </ProfileTableRow>
                    </StyledTable>
                    <StyledTable margin={50}>
                      <ProfileTableRow>
                        <ProfileCategory>생년월일</ProfileCategory>
                        <ProfileText>{userInfoData.birthday}</ProfileText>
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
                    {userInfoData.career.length < 3 && (
                      <ProfileWorkRow>
                        {userInfoData.career.map((data, key) => (
                          <>
                            <ResumeColumnBar display={key == 0 && 'none'} />
                            <div>{careerDuration(data.position)}</div>
                          </>
                        ))}
                      </ProfileWorkRow>
                    )}
                    {userInfoData.career.length > 2 && (
                      <>
                        <ProfileWorkRow>
                          {userInfoData.career.slice(0, 2).map((data, key) => (
                            <>
                              <ResumeColumnBar display={key == 0 && 'none'} />
                              <div>{careerDuration(data.position)}</div>
                            </>
                          ))}
                        </ProfileWorkRow>
                        <ProfileWorkRow>
                          {userInfoData.career
                            .slice(2, userInfoData.career.length)
                            .map((data, key) => (
                              <>
                                <ResumeColumnBar display={key == 0 && 'none'} />
                                <div>{careerDuration(data.position)}</div>
                              </>
                            ))}
                        </ProfileWorkRow>
                      </>
                    )}
                  </ProfileText>
                </ProfileTableRow>
                <ProfileTableRow>
                  <ProfileCategory>연락처</ProfileCategory>
                  <ProfileText>{userInfoData.phoneNumber}</ProfileText>
                </ProfileTableRow>
                <ProfileTableRow>
                  <ProfileCategory>생년월일</ProfileCategory>
                  <ProfileText>{userInfoData.birthday}</ProfileText>
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
        </ResumeWapper>
      )}
    </>
  );
};

export default ResumeWeb;
