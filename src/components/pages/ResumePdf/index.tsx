import React from 'react';
import CareerTable from '../../common/CareerTable';
import {
  convertBirth,
  convertMilitary,
  convertPhoneNumber,
  convertPosition,
  locationConvert,
} from '../../../utils/hooks/convert';
import { changeDateYM } from '../../../utils/hooks/calculateDuration';
import { resumeDataType, userInfoDataType } from '../../../api/types';
import './resumePdf.css';

interface ResumeProps {
  userInfoData: userInfoDataType;
  resumeData: resumeDataType;
}

const ResumePdf: React.FC<ResumeProps> = ({ userInfoData, resumeData }) => {
  // const { userInfoData } = useGetUserInfo(id);
  // const { resumeData } = useGetResume(id);

  return (
    <div className={'PdfWrapper'}>
      {userInfoData && resumeData && (
        <div className={'PdfInner'}>
          <div className={'PdfProfileWrapper'}>
            <div className={'PdfProfileInner'}>
              <div className={'PdfResume'}>RESUME</div>
              <div className={'PdfNickname'}>닉네임</div>
              <div className={'PdfName'}>{userInfoData.name}</div>
              <div className={'PdfProfileText'}>
                <div className={'PdfLeftDetail'}>
                  <CareerTable career={userInfoData.career} />
                  <div className={'PdfDetailElement'}>
                    {convertPhoneNumber(userInfoData.phoneNumber)}
                  </div>
                </div>
                <div>
                  <div className={'PdfDetailElement'}>
                    {convertBirth(userInfoData.birthday)}
                  </div>
                  <div className={'PdfDetailElement'}>
                    {locationConvert(userInfoData.address)}
                  </div>
                  <div className={'PdfDetailElement'}>
                    @{userInfoData.snsAddress}
                  </div>
                </div>
              </div>
            </div>
            <img
              className={'PdfProfileImage'}
              src={userInfoData.profileImage}
            />
          </div>
          <div className={'PdfCategory'}>경력</div>
          <div className={'PdfHr'} />
          <div className={'PdfCareerWrapper'}>
            {resumeData.career.map((data, id) => (
              <div className={'PdfCareerInner'} key={id}>
                <div className={'PdfCareerRowLeft'}>
                  <div className={'PdfPosition'}>
                    {convertPosition(data.position)}
                  </div>
                  <div className={'PdfDuration'}>
                    {changeDateYM(data.joinAt)} ~ {changeDateYM(data.quitAt)}
                  </div>
                </div>
                <div className={'PdfCareerRowRight'}>
                  <div className="PdfCompany">{data.company}</div>
                  <div className={'PdfWorkedOn'}>{data.workedOn}</div>
                  {resumeData.career.length - 1 !== id && (
                    <div className={'PdfHr'} />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={'PdfCategory'}>자격증</div>
          <div className={'PdfHr'} />
          <div className={'PdfCareerWrapper'}>
            {resumeData.certificate.map((data) => (
              <>
                <div className={'PdfCompany'}>{data.name}</div>
                <div className={'PdfDuration'}>{data.certificateAt}</div>
              </>
            ))}
          </div>
          <div className={'PdfCategory'}>학력</div>
          <div className={'PdfHr'} />
          <div className={'PdfCareerWrapper'}>
            {resumeData.academic.map((data) => (
              <>
                <div className={'PdfCompany'}>{data.major}</div>
                <div className={'PdfDuration'}>
                  {changeDateYM(data.joinAt)} ~ {changeDateYM(data.quitAt)}
                </div>
              </>
            ))}
          </div>
          <div className={'PdfCategory'}>병역</div>
          <div className={'PdfHr'} />
          <div className={'PdfCareerWrapper'}>
            <div className={'PdfCompany'}>
              {convertMilitary(resumeData.military.service)}
            </div>
            <div className={'PdfWorkedOn'}>
              {resumeData.military.exemptionReason}
            </div>
          </div>
          <div className={'PdfCategory'}>자기소개</div>
          <div className={'PdfHr'} />
          <div className={'PdfCareerWrapper'}>
            <div className={'PdfWorkedOn'}>{userInfoData.introduce}</div>
          </div>
          <div className="PdfCategory">SNS</div>
          <div className={'PdfHr'} />
          {/*<PdfCareerWrapper>*/}
          {/*  {userInfoData.snsList.map((data, id) => (*/}
          {/*    <img key={id} src={data.url} />*/}
          {/*  ))}*/}
          {/*</PdfCareerWrapper>*/}
        </div>
      )}
    </div>
  );
};

export default ResumePdf;
