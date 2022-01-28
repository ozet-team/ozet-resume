import React, { RefObject, useEffect, useRef } from 'react';
import {
  PdfCareerInner,
  PdfCareerRowLeft,
  PdfCareerRowRight,
  PdfCareerWrapper,
  PdfCategory,
  PdfCompany,
  PdfDetailElement,
  PdfDuration,
  PdfHr,
  PdfInner,
  PdfLeftDetail,
  PdfName,
  PdfNickname,
  PdfPosition,
  PdfProfileImage,
  PdfProfileInner,
  PdfProfileText,
  PdfProfileWrapper,
  PdfResume,
  PdfWorkedOn,
  PdfWrapper,
} from './styled';
import CareerTable from '../../common/CareerTable';
import {
  convertBirth,
  convertMilitary,
  convertPhoneNumber,
  convertPosition,
  locationConvert,
} from '../../../utils/hooks/convert';
import { changeDateYM } from '../../../utils/hooks/calculateDuration';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useParams } from 'react-router-dom';
import Api from '../../../api';
import { useGetUserInfo } from '../../../api/hooks/useGetUserInfo';
import { resumeDataType, userInfoDataType } from '../../../api/types';
import { useGetResume } from '../../../api/hooks/useGetResume';

const ResumePdf = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const id = useParams<string>();

  const userInfo: any = useGetUserInfo(id);
  const userInfoData: userInfoDataType = userInfo.data;
  const resume: any = useGetResume(id);
  const resumeData: resumeDataType = resume.data;

  const profileImg = new Image();
  const getPdf = async () => {
    const element = resume.current;
    const canvas = await html2canvas(element as HTMLDivElement);

    const doc = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 180;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const imgData = canvas.toDataURL('image/png');
    profileImg.src = userInfoData.profileImage;

    const pageHeight = 295;
    let heightLeft = imgHeight;

    let position = 20;

    doc.addImage(imgData, 'PNG', 15, position, imgWidth, imgHeight);
    position = heightLeft - imgHeight + 15;
    heightLeft -= pageHeight;
    while (heightLeft >= 20) {
      position = heightLeft - imgHeight + 15;
      doc.addPage();
      doc.addImage(imgData, 'PNG', 15, position, imgWidth, imgHeight);

      heightLeft -= pageHeight;
      console.log(heightLeft);
    }

    doc.save('resume.pdf');
  };

  return (
    <PdfWrapper>
      <button
        onClick={() => {
          getPdf();
        }}
      />
      <PdfInner ref={resumeRef}>
        <PdfProfileWrapper>
          <PdfProfileInner>
            <PdfResume>RESUME</PdfResume>
            <PdfNickname>닉네임</PdfNickname>
            <PdfName>{userInfoData.name}</PdfName>
            <PdfProfileText>
              <PdfLeftDetail>
                <CareerTable career={userInfoData.career} />
                <PdfDetailElement>
                  {convertPhoneNumber(userInfoData.phoneNumber)}
                </PdfDetailElement>
              </PdfLeftDetail>
              <div>
                <PdfDetailElement>
                  {convertBirth(userInfoData.birthday)}
                </PdfDetailElement>
                <PdfDetailElement>
                  {locationConvert(userInfoData.address)}
                </PdfDetailElement>
                <PdfDetailElement>@{userInfoData.snsAddress}</PdfDetailElement>
              </div>
            </PdfProfileText>
          </PdfProfileInner>
          <PdfProfileImage src={userInfoData.profileImage} />
        </PdfProfileWrapper>
        <PdfCategory>경력</PdfCategory>
        <PdfHr marginTop={6} />
        <PdfCareerWrapper>
          {resumeData.career.map((data, id) => (
            <PdfCareerInner key={id}>
              <PdfCareerRowLeft>
                <PdfPosition>{convertPosition(data.position)}</PdfPosition>
                <PdfDuration>
                  {changeDateYM(data.joinAt)} ~ {changeDateYM(data.quitAt)}
                </PdfDuration>
              </PdfCareerRowLeft>
              <PdfCareerRowRight>
                <PdfCompany>{data.company}</PdfCompany>
                <PdfWorkedOn>{data.workedOn}</PdfWorkedOn>
                <PdfHr
                  marginTop={6}
                  display={resumeData.career.length - 1 == id && 'none'}
                />
              </PdfCareerRowRight>
            </PdfCareerInner>
          ))}
        </PdfCareerWrapper>
        <PdfCategory>자격증</PdfCategory>
        <PdfHr marginTop={6} />
        <PdfCareerWrapper>
          {resumeData.certificate.map((data) => (
            <>
              <PdfCompany>{data.name}</PdfCompany>
              <PdfDuration>{data.certificateAt}</PdfDuration>
            </>
          ))}
        </PdfCareerWrapper>
        <PdfCategory>학력</PdfCategory>
        <PdfHr marginTop={6} />
        <PdfCareerWrapper>
          {resumeData.academic.map((data) => (
            <>
              <PdfCompany>{data.major}</PdfCompany>
              <PdfDuration>
                {changeDateYM(data.joinAt)} ~ {changeDateYM(data.quitAt)}
              </PdfDuration>
            </>
          ))}
        </PdfCareerWrapper>
        <PdfCategory>병역</PdfCategory>
        <PdfHr marginTop={6} />
        <PdfCareerWrapper>
          <PdfCompany>
            {convertMilitary(resumeData.military.service)}
          </PdfCompany>
          <PdfWorkedOn>{resumeData.military.exemptionReason}</PdfWorkedOn>
        </PdfCareerWrapper>
        <PdfCategory>자기소개</PdfCategory>
        <PdfHr marginTop={6} />
        <PdfCareerWrapper>
          <PdfWorkedOn>{userInfoData.introduce}</PdfWorkedOn>
        </PdfCareerWrapper>
        <PdfCategory>SNS</PdfCategory>
        <PdfHr marginTop={6} />
        <PdfCareerWrapper>
          {userInfoData.snsList.map((data, id) => (
            <img key={id} src={data.url} />
          ))}
        </PdfCareerWrapper>
      </PdfInner>
    </PdfWrapper>
  );
};

export default ResumePdf;
