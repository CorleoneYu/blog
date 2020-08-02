import React, { useCallback } from 'react';
import { HomeBox } from './style';
import PostList from '../../components/post-list';
import Pagination from '../../components/pagination';
import useHomeBlogs from '../../hooks/useHomeBlogs';
import { IPaginationInfo } from '../../type';

export default function Home() {
  const { homeBlogs, paginationInfo } = useHomeBlogs();

  const renderPagination = useCallback((info: IPaginationInfo) => {
    const { count, currentPage, countPerPage } = info;
    return (
      <div className="pagination-container">
        <Pagination current={currentPage} pageSize={countPerPage} total={count} />
      </div>
    );
  }, []);

  return (
    <HomeBox>
      <div className="post-list-container">
        <PostList blogList={homeBlogs} />
        {paginationInfo && renderPagination(paginationInfo)}
      </div>
    </HomeBox>
  );
}
