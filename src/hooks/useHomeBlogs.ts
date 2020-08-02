import { useEffect } from 'react';
import useBlogs from './useBlogs';

const useHomeBlogs = () => {
    const { blogs, getBlogs, paginationInfo } = useBlogs();

    useEffect(() => {
        const currentPage = 1;
        const pageCount = 9;
        getBlogs(currentPage, pageCount);
    }, [getBlogs]);

    return {
        paginationInfo,
        homeBlogs: blogs,
    }
};

export default useHomeBlogs;
