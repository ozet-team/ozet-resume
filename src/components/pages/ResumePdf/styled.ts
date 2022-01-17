import styled from 'styled-components';

export const PdfWrapper = styled.div`
  font-family: 'Apple SD Gothic Neo', sans-serif;
  padding: 40px 50px;
`;
export const PdfInner = styled.div`
  width: 100%;
  max-width: 595px;
  margin: auto;
`;
export const PdfResume = styled.div`
  font-size: 10px;
  color: #939497;
  margin-bottom: 35px;
`;
export const PdfNickname = styled.div`
  font-size: 10px;
  margin-bottom: 1px;
`;
export const PdfName = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 18px;
`;
export const ElementWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 595px;
  margin: 0 auto;
  height: 185px;
  min-width: 595px;
  flex: 1;
`;

export const ElementInner = styled.div`
  padding-right: 60px;
  padding-left: 50px;
  padding-top: 30px;
`;

export const PdfProfileTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;
export const PdfProfileNickname = styled.div`
  font-size: 10px;
`;

export const PdfProfileDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const PdfProfileText = styled.table`
  font-size: 9px;
  padding-bottom: 9px;
  width: 100%;
  display: flex;
`;
export const PdfLeftDetail = styled.div`
  margin-right: 34px;
`;
export const PdfDetailElement = styled.div`
  margin-bottom: 6px;
`;
export const PdfProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const PdfProfileInner = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PdfProfileImage = styled.img`
  height: 126px;
  width: 126px;
  border: 0 solid;
  border-radius: 70px;
`;
export const PdfCategory = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-top: 24px;
  &:first-child {
    margin-top: 0;
  }
`;
export const PdfHr = styled.hr<any>`
  height: 1px;
  opacity: 10%;
  margin: 12px 0;
  background: black;
  margin-top: ${(props) => props.marginTop}px;
  display: ${(props) => props.display};
`;
export const PdfCareerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PdfCareerInner = styled.div`
  display: flex;
  flex-direction: row;
`;
export const PdfCareerRowLeft = styled.div`
  min-width: 108px;
`;
export const PdfCareerRowRight = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PdfPosition = styled.div`
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 6px;
`;
export const PdfCompany = styled.div`
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 6px;
`;
export const PdfWorkedOn = styled.div`
  font-size: 8px;
  color: #373737;
  margin-bottom: 6px;
`;
export const PdfDuration = styled.div`
  font-size: 9px;
  font-weight: 600;
  color: #858585;
  margin-bottom: 6px;
`;
