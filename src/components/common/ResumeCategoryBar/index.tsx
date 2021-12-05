import { motion } from 'framer-motion';
import React from 'react';
import { StyledLi, StyledUl } from './styled';
import './ResumeCategoryBar.css';

interface Props {
  tabs: { label: string }[];
  selectedTab: string;
  setSelectedTab: (id: string) => void;
}

const ResumeCategoryBar = ({ tabs, selectedTab, setSelectedTab }: Props) => {
  return (
    <>
      <nav>
        <StyledUl>
          {tabs.map((item) => (
            <StyledLi
              key={item.label}
              className={item.label === selectedTab ? 'selected' : ''}
              onClick={() => setSelectedTab(item.label)}
            >
              {item.label}
              {item.label === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </StyledLi>
          ))}
        </StyledUl>
      </nav>
    </>
  );
};

export default ResumeCategoryBar;
