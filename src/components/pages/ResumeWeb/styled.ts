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
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 0;
  position: fixed;
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
  margin-top: 24px;
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
  font-size: 13px;
  font-weight: 700;
  padding-bottom: 8px;
  color: #666666;
`;
export const ProfileText = styled.td`
  font-size: 13px;
  padding-left: 12px;
  padding-bottom: 9px;
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
  background-color: white;
  z-index: 99;
  border-width: 0px;
  border-radius: 16px;
  position: fixed;
  height: 100vh;
  width: 100vw;
`;

export const ResumeModalWrapper = styled.div`
  display: block;
  border-style: solid;
  border-width: 0px;
  border-radius: 16px;
  position: relative;
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
  height: 11px;
  margin: 0 6px;
  background: black;
`;

export const ResumeCategoryBarWrapper = styled.div`
  padding: 0px 10px;
`;
export const ResumeDetailInner = styled.div`
  position: relative;
  padding: 0px 20px;
  font-family: 'Apple SD Gothic Neo', sans-serif;
  overflow-y: scroll;
  height: calc(100vh - 150px);
  padding-top: 27px;
`;
export const ResumeSubTitle = styled.div`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const ResumeInstagramLogo = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 8px;
  border-radius: 6px;
`;
export const ResumeDetailTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
export const ResumeSnsLink = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: center;
  margin-bottom: 9px;
`;
export const ResumeImageWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  box-sizing: border-box;
`;
export const ImageListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ResumeSnsImage = styled.img`
  border-radius: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ResumeDetailText = styled.div`
  font-size: 13px;
  font-weight: 400;
`;
export const ResumeTerm = styled.div`
  font-size: 13px;
  color: #828282;
`;
export const ResumeBr = styled.div`
  height: 1px;
  background: black;
  opacity: 10%;
  margin-top: 8px;
  margin-bottom: 10px;
`;
export const ResumeLargeMargin = styled.div`
  height: 24px;
`;
export const ResumeMargin = styled.div`
  height: 12px;
`;
export const ResumeSmallMargin = styled.div`
  height: 2px;
`;
