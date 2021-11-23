import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TopPage from './page/Toppage';
import SyoTopPage from './page/SyoTopPage';

export const Path = {
    TopPage: "/",
    SyoTopPage: "/SyoSystem",
};

const Routes = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact path={Path.TopPage} component={TopPage} />
        <Route exact path={Path.SyoTopPage} component={SyoTopPage} />
        <Redirect to={Path.TopPage} />
      </Switch>
    </div>
  );
};

export default Routes;