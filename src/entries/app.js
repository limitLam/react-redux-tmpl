/**
 * 入口文件
 */
import React from 'react';
import ReactDom from 'react-dom';

// 导入公共样式

import 'ASSETS/less/main.less';

// // 导入路由配置
// import routes from '../routes';

// 导入路由配置
import provider from './provider';

// 渲染页面
ReactDom.render(provider, document.getElementById('root'));
