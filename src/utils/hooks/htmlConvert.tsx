import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ResumePdf from '../../components/pages/ResumePdf';

export const htmlConvert = (userData: any, resume: any) => {
  const HTML = ReactDOMServer.renderToStaticMarkup(
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,viewport-fit=cover,maximum-scale=1.0,user-scalable=0"
          />
        </head>
        <body>
          <ResumePdf userInfoData={userData} resumeData={resume} />
        </body>
      </html>
    </>,
  ).toString();
  return HTML;
};
