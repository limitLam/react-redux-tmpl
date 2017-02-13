/**
 * 首页
 */

import React, {
    Component,
    PropTypes
} from 'react';
import {
    connect
} from 'react-redux';
import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';

import {
    Select
} from 'antd';
const Option = Select.Option;

export class Home extends Component {
    render() {
        return (
            <div style={ { height:3000 } }>
                <button onClick={this.props.onDecreaseClick}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.props.onIncreaseClick}>+</button>
                <Select defaultValue="lucy" style={{ width: 120 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>Disabled</Option>
                  <Option value="yiminghe">yiminghe</Option>
                </Select>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);