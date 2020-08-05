import { useEffect } from 'react';
import useComments from './useComments';

const useRecentComments = () => {
  const { comments, getComments } = useComments();

  useEffect(() => {
    const currentPage = 1;
    const pageCount = 5;
    getComments(currentPage, pageCount);
  }, [getComments]);

  return {
    recentComments: comments,
  };
};

export default useRecentComments;
