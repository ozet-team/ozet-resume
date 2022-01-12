import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ResumeWeb from '../pages/ResumeWeb';

export const Layout = () => {
  return (
    <Switch>
      <Route exact path={'/resume'} component={ResumeWeb} />
      <Route exact path={'/resume/:id'} component={ResumeWeb} />
    </Switch>
  );
};
