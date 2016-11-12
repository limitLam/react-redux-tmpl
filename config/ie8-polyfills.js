/*
 兼容 IE8 相关 shim/sham/polyfill 打包
*/
require('es5-shim'); // fix export * from 'xxx'
require('es5-shim/es5-sham'); // fix export * from 'xxx'
require('html5shiv');// fix html5 element

require('console-polyfill'); // fix console
// require('core-js/fn/object/assign');
// require('object-assign');
require('core-js/es6/object'); // fix Object.assign
require('es6-promise').polyfill(); // fix Promise
require('fetch-ie8');// fix fetch
