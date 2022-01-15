import styled from 'styled-components';

export const PdfDetailWrapper = styled.div`
  background-color: white;
  z-index: 99;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 185px;
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
export const HeaderElementInner = styled.div`
  padding: 40px 50px;
  padding-right: 60px;
`;
export const DetailElementInner = styled.div`
  padding-right: 60px;
  padding-left: 50px;
  padding-top: 30px;
`;
export const PdfProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
`;
export const PdfProfileInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const PdfProfileImage = styled.img`
  height: 105px;
  width: 105px;
  border: 0 solid;
  border-radius: 60px;
`;
export const PdfProfileTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;
export const PdfProfileNickname = styled.div`
  font-size: 10px;
`;
export const PdfProfileName = styled.h1`
  font-size: 22px;
  font-weight: bold;
`;
export const PdfProfileDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const PdfProfileDetail = styled.ul`
  font-size: 9px;
  margin-top: 3px;
  &:first-child {
    margin-top: 0;
  }
`;
