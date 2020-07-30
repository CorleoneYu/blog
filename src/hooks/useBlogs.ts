import { useState, useEffect } from 'react';
import { IBlog } from '../type';
import { getBlogs } from '../api/blog';

// function formatBlogs(blogs: any[]) {}

const useBlogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    getBlogs().then((res) => {
      console.log('res', res);
    });
  }, []);

  return {
    blogs,
    setBlogs,
  };
};

export default useBlogs;
