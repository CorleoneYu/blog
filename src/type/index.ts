export interface ITag {
  tagName: string;
  createTime: string; // 转换后的字符串
  _createTime: number; // 时间戳
}

export interface IBlog {
  id: number;
  title: string;
  description: string;
  content: string;
  heat: number;
  createTime: string;
  _createTime: number;
  updateTime: string;
  _updateTime: number;
  tagList: ITag[];
}
