// react 相关库
import React from 'react';
import ReactDOM from 'react-dom';
//	redux相关库
import { Provider } from 'react-redux';
// 导入路由配置
import Routers from '../routes';
//	引入store
import store from '../store';

export default (<Provider store={store}><Routers /></Provider>);