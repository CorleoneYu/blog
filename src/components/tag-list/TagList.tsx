import React from 'react';
import { TagListBox } from './style';
import { ITag } from '../../type';

const backgroundList = ['#6fa3ef', '#46c47c', '#f9bb3c', '#e8583d', '#bc99c4'];
const length = backgroundList.length;

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export interface ITagListProps {
  tagList: ITag[];
}

export default function TagList(props: ITagListProps) {
  const { tagList } = props;

  return (
    <TagListBox>
      {tagList.map((tag) => {
        return (
          <div
            className="tag-list-item"
            key={tag.id}
            style={{ background: backgroundList[getRandomInt(length)] }}
          >
            # {tag.tagName}
          </div>
        );
      })}
    </TagListBox>
  );
}
