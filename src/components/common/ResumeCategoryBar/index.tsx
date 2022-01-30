import { motion } from 'framer-motion';
import React from 'react';
import { StyledLi, StyledNav, StyledUl } from './styled';
import './ResumeCategoryBar.css';

interface Props {
  tabs: { label: string; id: string }[];
  selectedTab: string;
  setSelectedTab: (id: string) => void;
  profileDetail: any;
  checkID: (key: string) => number | undefined;
}

const ResumeCategoryBar = ({
  tabs,
  selectedTab,
  setSelectedTab,
  checkID,
  profileDetail,
}: Props) => {
  return (
    <>
      <StyledNav>
        <StyledUl>
          {tabs.map((item, id) => (
            <StyledLi
              margin={id > 1 ? 10 : 0}
              key={item.id}
              className={item.id === selectedTab ? 'selected' : ''}
              onClick={() => {
                setSelectedTab(item.id);
                profileDetail.current.scrollTo({
                  top: checkID(item.id),
                  behavior: 'smooth',
                });
              }}
            >
              {item.label}
              {item.id === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </StyledLi>
          ))}
        </StyledUl>
      </StyledNav>
    </>
  );
};

export default ResumeCategoryBar;
