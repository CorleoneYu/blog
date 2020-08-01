import React from 'react';
import { LayoutBox } from './style';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import history from '../../constant/history';
import Home from '../home';
import Archive from '../archive';
import Article from '../article';
import About from '../about';
import Search from '../search';

const Layout = () => {
  return (
    <LayoutBox>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/archive" component={Archive} />
          <Route path="/article" component={Article} />
          <Route path="/Search" component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </LayoutBox>
  );
}

export default Layout;
