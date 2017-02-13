/**
 * 首页
 */

import React, { Component, PropTypes } from 'react';

//	antd
import { Button } from 'antd';

class TestComponent extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={ this.props.onClick }>{ this.props.context ? "正" : "反" }</Button>
            </div>
        );
    }
}

export default TestComponent;






