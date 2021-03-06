import axios from 'axios';

const myAxios = axios.create({
  timeout: 10000,
});

myAxios.defaults.headers.common['Content-Type'] =
  'application/x-www-form-urlencoded';
myAxios.defaults.transformRequest = (data) => {
  return JSON.stringify(data);
};

myAxios.interceptors.response.use(
  (response) => {
    const res = response.data;
    const { success } = res;

    if (success) {
      return Promise.resolve(res);
    }

    console.error({
      content: '请重试',
    });
    return Promise.reject(res);
  },

  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.error({
            content: '请求的资源不存在',
          });
          break;
        case 500:
          console.error({
            content: '内部错误，请稍后重试',
          });
          break;
        case 503:
          console.error({
            content: '服务器正在维护，请稍后重试',
          });
          break;
      }
    }
    return Promise.reject(error.response);
  }
);

type Params = {
  [key: string]: any;
};

export default myAxios;

export const get = (url: string, params: Params, config = {}) =>
  myAxios.get(url, { ...config, params });
export const deletes = (url: string, params: Params, config = {}) =>
  myAxios.delete(url, { ...config, params });
export const post = (url: string, params: Params, config = {}) =>
  myAxios.post(url, params, config);
export const put = (url: string, params: Params, config = {}) =>
  myAxios.put(url, params, config);
