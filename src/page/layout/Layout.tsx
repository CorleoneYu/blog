import React from 'react';
import { LayoutBox } from './style';
import useBlogs from '../../hooks//useBlogs';

function Layout() {
  const { blogs } = useBlogs();
  return <LayoutBox>layout</LayoutBox>;
}

export default Layout;
