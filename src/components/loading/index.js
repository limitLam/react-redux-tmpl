/**
 * loading 加载
 * by tommyshao
 * 2016-08-10
 */

import React, { Component } from 'react'
import classNames from 'classnames'

export default class Loading extends Component {
    constructor(props) {
        super(props)
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    // }

    render() {

        const { show } = this.props
        const cls = classNames({
            loading: true,
            hide: !show
        })

        return (
            <div className={cls} id="loading">
                <div className="loading-wrap">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}
