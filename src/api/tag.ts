import { get } from './index';
import { apiUrls } from './constant';

export function getTags() {
  return get(apiUrls.tag.getTags, {});
}
