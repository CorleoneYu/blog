import { useState, useCallback } from 'react';
import { IBlog, IPaginationInfo } from '../type';
import { getBlogsApi } from '../api/blog';
import { formatBlogs, formatPaginationInfo } from '../utils/converter';

const useBlogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<IPaginationInfo>();

  const getBlogs = useCallback(async (currentPage: number, countPerPage: number) => {
    const res = await getBlogsApi(currentPage, countPerPage);
    const { data, extraData } = res as any;
    setBlogs(formatBlogs(data));
    setPaginationInfo(formatPaginationInfo(extraData));
  }, []);

  return {
    blogs,
    getBlogs,
    paginationInfo,
  };
};

export default useBlogs;
