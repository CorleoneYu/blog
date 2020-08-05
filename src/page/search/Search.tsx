import React, { useEffect } from 'react';
import { SearchBox } from './style';
import TagList from '../../components/tag-list';
import useTags from '../../hooks/useTags';

export default function Search() {
  const { tags, getTags } = useTags();

  useEffect(() => {
    getTags();
  }, [getTags]);

  return (
    <SearchBox>
      <div className="search-input-container">
        <input className="search-input" placeholder="Search..." />
        <span>搜索</span>
      </div>
      <div className="tag-list">
        <TagList tagList={tags} />
      </div>
    </SearchBox>
  );
}
