import React from 'react';
import { HeaderBox } from './style';
import HeaderMenuList from '../header-menu-list';
import { Link } from 'react-router-dom';
import { RouterMap } from '../../constant/history';

export default function Header() {
  return (
    <HeaderBox>
      <div className="nav-bar">
        <Link to={RouterMap.index}>首页</Link>
        <HeaderMenuList />
      </div>
    </HeaderBox>
  );
}
