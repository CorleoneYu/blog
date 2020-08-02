import React from 'react';
import { HeaderMenuListBox } from './style';
import { ILink } from '../../type';
import { RouterMap } from '../../constant/history';
import { Link } from 'react-router-dom';

const menuList: ILink[] = [
  {
    render: '归档',
    link: RouterMap.archive,
  },
  {
    render: '关于我们',
    link: RouterMap.about,
  },
];

export default function HeaderMenuList() {
  return (
    <HeaderMenuListBox>
      <div className="nav-menu">
        <div className="nav-menu">
          {menuList.map((menu) => {
            return (
              <div className="menu-item" key={menu.link}>
                <Link to={menu.link}>{menu.render}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </HeaderMenuListBox>
  );
}
