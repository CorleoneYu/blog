import React from 'react';
import { LayoutBox } from './style';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RouterMap } from '../../constant/history';
import Home from '../home';
import Archive from '../archive';
import Article from '../article';
import About from '../about';
import Search from '../search';

const Layout = () => {
  return (
    <LayoutBox>
      <Switch>
        <Route exact path={RouterMap.index} component={Home} />
        <Route path={RouterMap.about} component={About} />
        <Route path={RouterMap.archive} component={Archive} />
        <Route path={RouterMap.article} component={Article} />
        <Route path={RouterMap.search} component={Search} />
        <Redirect from="*" to={RouterMap.index} />
      </Switch>
    </LayoutBox>
  );
};

export default Layout;
