# react-redux-tmpl

React + Redux + Antd  前端项目模板（支持IE8+）

# Quick Start

克隆项目后，在根目录打开 cmd

## 安装依赖

```
npm i（推荐用淘宝CNPM："cnpm i"）
```

## 启动项目

```
npm start
```

## 打包项目

```
npm run bundle
```

## 打包并预览

```
npm run build
```

打包代码在 dist 目录


# 目录结构

```javascript
config
|-- build.js                        # 打包预览脚本
|-- ie8-polyfills.js                # IE8兼容包配置
|-- info.js                         # 网站信息
|-- server.js                       # 预览服务器
|-- utils.js                        # 配置工具库
|-- webpack.common.js               # 公共配置
|-- webpack.dev.js                  # 开发配置
|-- webpack.rap.js                  # 开发rap配置，调用的是淘宝Mock服务器
|-- webpack.prod.js                 # 生产配置
dist                                # 打包目录
docs                                # 项目文档
node_modules                        
polyfill                            # polyfill打包文件（IE8兼容包）
src                                 # 项目源码
|-- action                          # 公用action，主要为修改全局状态的action，供给page中的action引入
|-- assets                          # 静态资源，包括公用的 css/less/html/images 等
|-- components                      # 公用组件，主要是react组件
|   |-- loading
|   |   |-- index.js
|   |   |-- index.less
|-- entries                         # 入口目录
|   |-- app.html                    # 入口页
|   |-- app.js                      # 入口JS
|-- pages                           # 页面目录
|   |-- page1                       
|   |   |-- index.js                # 页面逻辑
|   |   |-- index.less              # 页面样式
|   |   |-- mapDispatchToProps.js   # 页面redux的mapDispatchToProps
|   |   |-- mapStateToProps.js   	# 页面redux的mapStateToProps
|   |   |-- reducer.js   			# 页面redux的reducer
|   |   |-- state.js   				# 页面redux的state
|-- reducers                        
|   |-- index.js    				# reducer总体整合                   
|-- routes                          # 页面路由
|-- store                        
|   |-- index.js    				# store
|-- utils                           # 工具库
package.json                        
README.MD
```

# 注意事项

- Antd 用的是 1.11.2 版本（兼容IE8），用法请查看 [1.x API 文档](http://1x.ant.design/)
- 安装 cnpm：```npm install -g cnpm --registry=https://registry.npm.taobao.org```
- 删除 node_modules 文件夹： ```rd /s/q node_modules```
