import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ResumeWeb from '../pages/ResumeWeb';
import GetResumePdf from '../pages/GetResumePdf';

export const Layout = () => {
  return (
    <Switch>
      <Route exact path={'/resume'} component={ResumeWeb} />
      <Route exact path={'/resume/:id'} component={ResumeWeb} />
      <Route exact path={'/pdf/'} component={GetResumePdf} />
    </Switch>
  );
};
