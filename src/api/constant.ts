export const apiPrefix = 'chenweilin.xin/blogBack/frontApi/';

export const apiUrls = {
  // 文章相关
  blog: {
    getBlogs: `${apiPrefix}/blogs`,
    getBlogById: `${apiPrefix}/blogById`,
    getBlogsByTagId: `${apiPrefix}/blogByTagId`,
    addBlogHeat: `${apiPrefix}/addBlogHeat`,
    searchBlogs: `${apiPrefix}/searchBlog`,
  },
  // 标签相关
  tag: {
    getTags: `${apiPrefix}/tags`,
    getTagsWithHeat: `${apiPrefix}/tagsWithHeat`,
  },
  // 访问量相关
  visit: {
    getVisits: `${apiPrefix}/visits`,
    addVisits: `${apiPrefix}/addVisits`,
  },
  // 评论相关
  comment: {
    comment: `${apiPrefix}/comment`,
    getWebComments: `${apiPrefix}/getWebComment`,
    getBlogComments: `${apiPrefix}/getBlogComment`,
  },
};
