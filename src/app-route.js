import React, { lazy, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

export const AppRoutes = () => {
  const [basePath, setBasePath] = useState('/');

  useEffect(() => {
    // console.log(window.location);
    let _basePath = '/';

    if (!window.location.origin.includes('localhost')) {
      _basePath = window.location.pathname.substr(
        0,
        window.location.pathname.length - 1
      );
      setBasePath(_basePath);
    }
  }, []);

  const Join = lazy(() => import('./Join/Join'));

  const Room = lazy(() => import('./Room/Room'));

  return (
    <Switch>
      <Route exact path={basePath} component={Join} />
      <Route path="/room" component={Room} />
    </Switch>
  );
};
