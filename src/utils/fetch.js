/**
 * fetch wrapper
 */

import fetch from 'isomorphic-fetch'

import State from '../containers/Layouts/state'

/**
 * @param { String } url 异步请求地址
 * @param { PlainObject } data 异步配置参数
 * @param { Boolean } props 判断是否显示 Loading
 * @param { Function } pending 异步请求持续过程函数
 */
export default  (url, data, props, pending) => {

    // 开发期使用 mock 服务器地址，统一加上/API
    // 通过 webpack-dev-server 代理去掉/API
    url = __DEV__ ? `/API${url}` : url
    // @TODO: 联调测试
    // url = __DEV__ ? `http://192.168.9.76:1396${url}` : url

    // 当两个参数时一般是 data 为空
    if(!props && typeof data === 'boolean') {
        props = data
        data = {}
    }


    // fetch 规范中只有 post 才能设置 body 属性
    // 当为 get 方法时需拼接在 url 上
    if(data && data['body']) {
        if(data['method'] && data['method'].toLowerCase() === 'post') { // post
            /*let formData = new FormData()
            let body = data.body
            for(let o in body) {
                formData.append(o, body[o][0])
            }
            data.body = formData */
            // @todo: mock
            data.body = JSON.stringify(data.body)
            
        } else { // get
            let queryString = []
            for(let i in data.body) {
                queryString.push(`${i}=${data.body[i]}`)
            }
            data.body = queryString.join('&')

            // 拼接查询字符串
            url = [url, data.body].join(url.includes('?') ? '': '?')

            // 删除 body 配置
            // 否则报错
            delete data.body
        }
    }

    // 拷贝配置
    data = Object.assign({}, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        },
        // 设置同源cookies
        credentials: 'same-origin',
        // 跨域资源共享
        // credentials: 'include'
    }, data)

    // 显示loading图标
    props && State.showLoading()

    return new Promise(function (resolve, reject) {
        
        fetch(url, data)
                .then(res=> res.json())  // 数据接口统一为 json
                .then(res => {
                    // 隐藏loading图标
                    props && State.hideLoading()
                    if(res.IsSuccess) {
                        resolve(res)
                    } else {
                        //alert(`错误代码：${res.ResultCode}, 原因：${res.Message}`)
                        // 业务处理错误
                        reject(res)
                        // 错误
                        if(res.ResultCode === 998) throw new Error(`错误代码：${res.ResultCode}, 原因：${res.Message}`)
                    }
                })
                .catch(err=> {
                    console.log(err)
                    alert(`错误代码：${ err }`)
                    console.error('Fetch Error: %s', err)
                })
    })
}
