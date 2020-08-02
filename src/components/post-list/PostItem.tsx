import React from 'react';
import { PostItemBox, Thumb } from './style';
import { IBlog } from '../../type';
import Cat1 from '../../image/cat1.jpeg';

export interface IPostItem {
  blog: IBlog;
}

export default function PostIem(props: IPostItem) {
  const { blog } = props;

  return (
    <PostItemBox>
      <Thumb url={Cat1} />
      <div className="triangles-container">
        <div className="triangle"></div>
        <div className="triangle-reverse triangle"></div>
      </div>
      <div className="item-label">
        <div className="item-title">{blog.title}</div>
        <div className="item-tag-list">
          {blog.tagList.map((tag) => (
            <div className="item-tag" key={tag.id}>
              {tag.tagName}
            </div>
          ))}
        </div>
      </div>
    </PostItemBox>
  );
}
