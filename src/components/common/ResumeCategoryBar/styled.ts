import styled from 'styled-components';

export const StyledNav = styled.nav`
  border-style: solid;
  border-width: 0px;
  border-radius: 16px;
`;
export const StyledUl = styled.ul`
  margin-top: 22px;
  display: flex;
  padding-left: 0px;
  justify-content: space-around;
  @media (min-width: 500px) {
    width: 445px;
    display: flex;
    justify-content: space-between;
    margin-top: 38px;
  }
`;
export const StyledLi = styled.li`
  background: white;
  cursor: pointer;
  height: 24px;
  margin: 0px 10px;
  padding-bottom: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  font-family: 'Apple SD Gothic Neo', sans-serif;
  font-weight: bold;
  color: black;
  opacity: 30%;
  -webkit-tap-highlight-color: transparent;
  @media (min-width: 500px) {
    font-size: 16px;
  }
`;
