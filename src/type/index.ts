export interface ITag {
  id: number;
  tagName: string;
  createTime?: string; // 转换后的字符串
  _createTime?: number; // 时间戳
}

export interface IBlog {
  id: number;
  title: string;
  description: string;
  heat: number;
  createTime: string;
  _createTime: number;
  updateTime: string;
  _updateTime: number;
  tagList: ITag[];
  content?: string;
}

export interface ILink {
  render: string;
  link: string;
}

export interface IPaginationInfo {
  count: number;
  countPerPage: number;
  currentPage: number;
  limitOffset: number;
  limitRows: 0;
  sumPage: 22;
}

export interface IComment {
  id: number;
  content: string;
  mailbox: string;
  createTime: string;
  _createTime: number;
  blogId?: number;
  name?: string;
}
