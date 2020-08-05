import { IBlog, ITag, IPaginationInfo, IComment } from '../type';

export function formatPaginationInfo(info: any): IPaginationInfo {
  return {
    count: info.count,
    countPerPage: info.countPerPage,
    currentPage: info.currentPage,
    limitOffset: info.limitOffset,
    limitRows: info.limitRows,
    sumPage: info.sumPage,
  };
}

/**
 * 格式化标签数据
 * @param tags 后台的 tag 数据
 */
export function formatTags(tags: any[]): ITag[] {
  return tags.map((tag) => {
    return {
      id: tag.id,
      tagName: tag.tagName,
    };
  });
}

/**
 * 格式化博客数据
 * @param blogs 后台的 blog 数据
 */
export function formatBlogs(blogs: any[]): IBlog[] {
  return blogs.map((blog) => {
    return {
      id: blog.id,
      title: blog.title,
      description: blog.description,
      heat: blog.heat,
      tagList: formatTags(blog.tagList),
      _createTime: blog.createTime,
      _updateTime: blog.updateTime,
      createTime: formatTime(blog.createTime),
      updateTime: formatTime(blog.updateTime),
    };
  });
}

/**
 * 格式化评论数据
 * @param comments 后台的 comment 数据
 */
export function formatComments(comments: any[]): IComment[] {
  return comments.map((comment) => {
    return {
      id: comment.id,
      content: comment.content,
      mailbox: comment.content,
      createTime: formatTime(comment.createTime),
      _createTime: comment.createTime,
      blogId: comment.blogId,
      name: comment.name,
    };
  });
}

/**
 * 格式化文件大小, 输出成带单位的字符串
 * @param {Number} size 文件大小
 * @param {Number} [pointLength=2] 精确到的小数点数。
 * @param {Array} [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。
 *    如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
 */
export function formatSize(size: number, pointLength = 2, units = ['B', 'K', 'M', 'G', 'TB']) {
  let unit;
  while ((unit = units.shift()) && size >= 1024) {
    size = size / 1024;
  }

  return size.toFixed(pointLength) + unit;
}

/**
 * 格式化时间戳
 * @param time 时间戳
 */
export function formatTime(time: number): string {
  const date = new Date(time);
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  const D = date.getDate() + ' ';
  const h = date.getHours() + ':';
  const m = date.getMinutes() + ':';
  const s = date.getSeconds();

  return Y + M + D + h + m + s;
}
