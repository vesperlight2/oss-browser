const path = require("path");

module.exports = {
  //窗体title
  title: "RhoninBioCloud OSS Browser",

  //app id，打包名称前缀
  appId: "RhoninBioCloud-oss-browser",

  //app名称，需要提供各个语言版本
  appName: {
    "zh-CN": "罗宁生物云OSS浏览器",
    "en-US": "RhoninBioCloud OSS Browser",
  },

  //logo png 格式, 主要用于mac和linux系统
  logo_png: path.join(__dirname, "./icon.png"),

  //logo icns 格式，主要用于mac系统
  logo_ico: path.join(__dirname, "./icon.icns"),

  //logo ico 格式，主要用于windows系统
  logo_ico: path.join(__dirname, "./icon.ico"),

  //“关于”弹窗的主要内容
  about_html: '<div><a href="http://rhonin-bio.com">罗宁生物</a><a>    </a><a href="http://biomediv.cn">罗宁生物云</a></div>',
};
