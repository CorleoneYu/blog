import { get } from './index';
import { apiUrls } from './constant';

export function getWebCommentApi(currentPage: number, countPerPage: number) {
  return get(apiUrls.comment.getWebComments, {
    currentPage,
    countPerPage,
  });
}
