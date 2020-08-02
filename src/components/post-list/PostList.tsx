import React from 'react';
import { PostListBox } from './style';
import { IBlog } from '../../type';
import PostItem from './PostItem';

export interface IPostListProps {
  blogList: IBlog[];
}

export default function PostList(props: IPostListProps) {
  const { blogList } = props;
  return <PostListBox>
    {blogList.map(blog => {
      return <div className="post-list-item" key={blog.id}>
        <PostItem blog={blog} />
      </div>
    })}
  </PostListBox>;
}
