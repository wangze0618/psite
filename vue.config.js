const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/",
  // devServer: {
  //   historyApiFallback: true,
  //   allowedHosts: "all",
  //   // open: true,
  //   port: 8080,
  //   proxy: {
  //     "/api": {
  //       target: "https://v.api.aa1.cn", //API服务器的地址
  //       // ws: true, //代理websockets
  //       changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
  //       // secure: false,
  //       // pathRewrite: {
  //       //   "^/api": "",
  //       // },
  //     },
  //   },
  // },
});
