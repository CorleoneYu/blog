import { useState, useCallback } from 'react';
import { IComment, IPaginationInfo } from '../type';
import { getWebCommentApi } from '../api/comment';
import { formatComments, formatPaginationInfo } from '../utils/converter';

const useComments = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<IPaginationInfo>();

  const getComments = useCallback(async (currentPage: number, countPerPage: number) => {
    const res = await getWebCommentApi(currentPage, countPerPage);
    const { data, extraData } = res as any;
    setComments(formatComments(data));
    setPaginationInfo(formatPaginationInfo(extraData));
  }, []);

  return {
    comments,
    getComments,
    paginationInfo,
  };
};

export default useComments;
