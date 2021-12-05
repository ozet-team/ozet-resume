import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ResumeWeb from '../pages/ResumeWeb';

export const Layout = () => {
  return (
    <Switch>
      <Route path={'/resume/:id'} component={ResumeWeb} />
    </Switch>
  );
};
