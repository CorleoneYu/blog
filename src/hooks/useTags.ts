import { useState, useCallback } from 'react';
import { ITag } from '../type';
import { getTagsApi } from '../api/tag';
import { formatTags } from '../utils/converter';

const useTags = () => {
  const [tags, setTags] = useState<ITag[]>([]);

  const getTags = useCallback(async () => {
    const res = await getTagsApi();
    const { data } = res as any;
    setTags(formatTags(data));
  }, []);

  return {
    tags,
    getTags,
  };
};

export default useTags;
