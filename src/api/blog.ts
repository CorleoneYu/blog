import { get } from './index';
import { apiUrls } from './constant';

/**
 * 分页请求文章列表
 * @param currentPage 当前页数
 * @param countPerPage 每页条数
 */
export function getBlogs(currentPage: number, countPerPage: number) {
  return get(apiUrls.blog.getBlogs, {
    currentPage,
    countPerPage,
  });
}

/**
 * 请求文章
 * @param id 文章 id
 */
export function getBlogById(id: number) {
  return get(apiUrls.blog.getBlogById, {
    id,
  });
}

/**
 * 根据标签 id 请求文章列表
 * @param id 标签 id
 * @param currentPage
 * @param countPerPage
 */
export function getBlogsByTagId(
  id: number,
  currentPage: number,
  countPerPage: number
) {
  return get(apiUrls.blog.getBlogsByTagId, {
    id,
    currentPage,
    countPerPage,
  });
}
