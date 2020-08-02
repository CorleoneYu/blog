import { get } from './index';
import { apiUrls } from './constant';

export function getTagsApi() {
  return get(apiUrls.tag.getTags, {});
}
