import request from "../utils/request";
// 用户注册
export const userRegist = (data) => {
  return request("/api/regist", "post", data);
};
// 用户登录
export const userLogin = (data) => {
  return request("/api/login", "post", data);
};
