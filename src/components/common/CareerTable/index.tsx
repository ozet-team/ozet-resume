import React from 'react';
import { userInfoData } from '../../../api/ResumeData';
import { ProfileWorkRow, ResumeColumnBar } from '../../pages/ResumeWeb/styled';
import { getYearMonth } from '../../../utils/hooks/calculateDuration';
import './careerTable.css';

interface props {
  career: { position: string; duration: number }[];
}

const CareerTable = (props: props) => {
  const { career } = props;
  const careerDuration = (key: string) => {
    const date = career.find((data) => data.position === key)?.duration;

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
  return (
    <>
      {career.length < 3 && (
        <div className={'ProfileWorkRow'}>
          {career.map((data, key) => (
            <>
              {key !== 0 && <div className="ResumeColumnBar" />}
              <div>{careerDuration(data.position)}</div>
            </>
          ))}
        </div>
      )}
      {career.length > 2 && (
        <>
          <div className={'ProfileWorkRow'}>
            {career.slice(0, 2).map((data, key) => (
              <>
                {key !== 0 && <div className="ResumeColumnBar" />}
                <div>{careerDuration(data.position)}</div>
              </>
            ))}
          </div>
          <div className={'ProfileWorkRow'}>
            {career.slice(2, userInfoData.career.length).map((data, key) => (
              <>
                {key !== 0 && <div className="ResumeColumnBar" />}
                <div>{careerDuration(data.position)}</div>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CareerTable;
