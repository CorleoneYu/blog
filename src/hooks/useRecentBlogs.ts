import { useEffect } from 'react';
import useBlogs from './useBlogs';

const useRecentBlogs = () => {
    const { blogs, getBlogs } = useBlogs();

    useEffect(() => {
        const currentPage = 1;
        const pageCount = 5;
        getBlogs(currentPage, pageCount);
    }, [getBlogs]);

    return {
        recentBlogs: blogs,
    }
};

export default useRecentBlogs;
