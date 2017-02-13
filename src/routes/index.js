/*
	Routes 路由配置
*/
// import React from 'react';
// import { Router, hashHistory } from 'react-router';

const routes = {
  component: require('PAGES/Layouts').default,
  childRoutes: [{
      // 首页跳转
      path: '/',
      indexRoute: {
        onEnter: (nextState, replace) => replace('', 'home')
      },
    },
    // 首页
    {
      path: 'home',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/home').default)
        })
      }
    },
    //  编辑器
    {
      path: 'editor',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/editor').default)
        })
      }
    },
    //  测试
    {
      path: 'test',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/test').default)
        })
      }
    },
    // 404
    {
      path: '*',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('PAGES/404').default);
        });
      }
    }
  ]
};

import {
  Router,
  hashHistory
} from 'react-router';

import React, {
  Component,
  PropTypes
} from 'react';

class Routers extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history = {hashHistory} routes = {routes} />
    );
  }
}

export default Routers;