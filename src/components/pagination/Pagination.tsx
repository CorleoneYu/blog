import React from 'react';
import { PaginationBox } from './style';

export interface IPaginationProps {
  // 当前页码
  current: number;
  // 每页条数
  pageSize: number;
  // 数据总量
  total: number;
  // 页码改变的回调
  onChange?: (page: number) => void;
}

export default function Pagination(props: IPaginationProps) {
  const { current, pageSize, total } = props;
  const sumPage = Math.round(total / pageSize);
  const array = Array.from([...Array(sumPage)].keys()); // [0, 1, ...sumPage]

  return <PaginationBox>
    <li className="prev">←</li>
    {array.map((page: number) => {
      return <li key={page+1}>{page + 1}</li>
    })}
    <li className="next">→</li>
  </PaginationBox>;
}
