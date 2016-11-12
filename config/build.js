/**
 * 打包项目并启动静态服务器预览
 * 
 * by koen
 * 2016/10/10
 */
const exec = require('child_process').exec;
const utils = require('./utils');

const CMD_BUNDLE = 'npm run bundle';
const CMD_SERVER = 'node config/server';

const URL = 'http://127.0.0.1:8001';

const child = exec(CMD_BUNDLE);

child.stdout.on('data', function(data) {
  console.log(data);
});
child.stderr.on('data', function(data) {
  console.log(data);
});
child.on('close', function(code) {
  // 启动静态 server
  exec(CMD_SERVER).stdout.on('data', function(data) {
    console.log(data);
    // 打开浏览器
    utils.open(URL);
  });
});