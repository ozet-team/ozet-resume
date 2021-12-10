import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ResumeWapper = styled.div`
  background: #f0f2f5;
`;
export const ProfileWrapper = styled.div`
  background: #f0f2f5;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  min-height: 148px;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 0;
  position: relative;
`;
export const ProfileImage = styled(motion.img)`
  height: 180px;
  width: 180px;
  position: absolute;
`;
export const ProfileImageWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  height: 180px;
  margin-bottom: 60px;
`;
export const ProfileHeaderWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ProfileNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
`;
export const ProfileTextWrapper = styled(motion.div)``;
export const StyledTable = styled(motion.div)`
  margin-bottom: 30px;
`;
export const ProfileCategory = styled.td`
  min-width: 50px;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 8px;
`;
export const ProfileText = styled.td`
  font-size: 13px;
  padding-left: 12px;
  padding-bottom: 8px;
  width: 260px;
`;
export const ProfileTableRow = styled.tr`
  display: flex;
  flex-direction: row;
`;

export const ProfileNickname = styled.div`
  font-size: 14px; ;
`;
export const ProfileName = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 4px;
`;
export const ProfileIntroduce = styled.div`
  margin-top: 16px;
  margin-bottom: 20px;
  font-size: 16px;
`;
export const ResumeDetailWrapper = styled(motion.div)`
  border-style: solid;
  border-width: 0px;
  border-radius: 16px;
  background-color: white;
  z-index: 99;
  position: fixed;
`;

export const ResumeModalWrapper = styled.div`
  display: block !important;
`;
export const ResumeModalInner = styled.div`
  overflow: initial;
`;
export const ProfileWorkRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;
export const ResumeColumnBar = styled.div`
  width: 1px;
  height: 19px;
  margin: 0 6px;
  background: black;
`;

export const ResumeDetailInner = styled.div`
  position: relative;
  padding: 0px 20px;
  font-family: 'Apple SD Gothic Neo', sans-serif;
  overflow-y: scroll;
  height: calc(100vh - 203px);
  margin-top: 27px;
`;
export const ResumeSubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border-style: solid;
  border-width: 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const ResumeInstagramLogo = styled.img`
  height: 26px;
  width: 26px;
  margin-right: 11px;
`;
export const ResumeDetailTitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
`;
export const ResumeDetailText = styled.div`
  margin-top: 4px;
  font-size: 14px;
`;
export const ResumeTerm = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: #828282;
`;
export const ResumeBr = styled.div`
  height: 1px;
  background: black;
  opacity: 10%;
  margin-top: 5px;
  margin-bottom: 10px;
`;
export const ResumeMargin = styled.div`
  height: 32px;
`;
