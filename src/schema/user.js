export default {
  username(value) {
    if (!value) {
      return "请输入用户名";
    }
    if (value.length <= 2 || value.length >= 13) return "用户名必须3-12个字符";
    return true;
  },
  password(value) {
    if (!value) {
      return "请输入密码";
    }
    if (!/^[\S]{6,12}$/.test(value)) return "密码必须6-12个字符";
    return true;
  },
  isChecked(value) {
    if (value) {
      return "请勾选";
    }
    return true;
  },
};
