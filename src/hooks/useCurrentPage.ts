import { useState } from 'react';

const useCurrentPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    return {
        currentPage,
        setCurrentPage,
    }
};

export default useCurrentPage;
