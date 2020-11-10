// server.js

// 引入相关模块
const http = require('http');
const url = require('url');
const path = require('path');
const readStaticFile = require('./modules/readStaticFile');

// 搭建 HTTP 服务器
const serverOne = http.createServer(function(req, res) {
    const urlObj = url.parse(req.url);
    const urlPathname = urlObj.pathname;
    const filePathname = path.join(__dirname, "/public", urlPathname);

    // 读取静态文件
    readStaticFile(res, filePathname);
});

const serverTwo = http.createServer(function(req, res) {
    const urlObj = url.parse(req.url);
    const urlPathname = urlObj.pathname;
    const filePathname = path.join(__dirname, "/public", urlPathname);

    // 读取静态文件
    readStaticFile(res, filePathname);
});

// 在 3000 端口监听请求
serverOne.listen(3000, function() {
    console.log("服务器运行中.");
    console.log("正在监听 3000 端口:")
})

// 在 3001 端口监听请求
serverTwo.listen(3001, function () {
    console.log("服务器运行中.");
    console.log("正在监听 3001 端口:")
})
