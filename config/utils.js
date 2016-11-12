/**
 * 配置的相关工具函数
 */
const path = require('path');
const fs = require('fs');
// 自动获取入口配置
exports.getEntrys = function(dirname) {
    return fs.readdirSync(dirname).reduce(function(entries, dir) {
        if (!fs.statSync(path.join(dirname, dir)).isDirectory()) {
            const fileArr = dir.split('.'),
                fileName = fileArr[0],
                ext = fileArr[1];
            if (ext === 'js') { // 仅js文件为入口文件
                entries[fileName] = path.join(dirname, dir);
            }
        }
        return entries;
    }, {})
};
// 获取本地IP
exports.getIP = function() {
    const os = require('os');
    const ifaces = os.networkInterfaces();
    let ip = '127.0.0.1';
    for (let dev in ifaces) {
        ifaces[dev].forEach(function(details) {
            if (details.family === 'IPv4' && !details.internal) {
                ip = details.address;
                return;
            }
        })
    }
    return ip;
};
// 自动打开浏览器
exports.open = function(url) {
    const exec = require('child_process').exec;
    let cmd;
    if (process.platform === 'win32') {
        cmd = 'explorer';
    } else if (process.platform === 'linux') {
        cmd = 'xdg-open';
    } else if (process.platform === 'darwin') {
        cmd = 'open';
    }
    exec(cmd + ' "' + url + '"');
};
