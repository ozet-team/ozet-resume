import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import API from '../../../api';
import ResumePdf from '../ResumePdf';
import { useGetUserInfo } from '../../../api/hooks/useGetUserInfo';
import { useGetResume } from '../../../api/hooks/useGetResume';

const GetResumePdf = () => {
  const [id, setID] = useState('');
  const { userInfoData } = useGetUserInfo(id);
  const { resumeData } = useGetResume(id);
  return (
    <div>
      <input onChange={(e) => setID(e.target.value)} />
      {id && userInfoData && resumeData && (
        <button
          onClick={() => {
            const htmlToString = ReactDOMServer.renderToStaticMarkup(
              <ResumePdf userInfoData={userInfoData} resumeData={resumeData} />,
            ).toString();
            console.log(htmlToString);
            // API.postResumeHTML({ html: htmlToString });
          }}
        >
          pdf 만들기
        </button>
      )}
    </div>
  );
};

export default GetResumePdf;
