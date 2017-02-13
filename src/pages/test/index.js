/**
 * 首页
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';

//  antd
import { Button, Modal } from 'antd';

//  页面组件
import TestComponent from './testComponent';

export class Test extends Component {
    render() {
        return (
            <div>
                <Button type="primary" onClick={ this.props.modalShow }>测试弹窗</Button>
                <Modal title="第一个 Modal" visible={this.props.visible}
                  onOk={this.props.modalHide} onCancel={this.props.modalHide}
                >
                  <p>对话框的内容</p>
                  <p>对话框的内容</p>
                  <p>对话框的内容</p>
                </Modal>
                <TestComponent onClick={ this.props.switch } context={ this.props.context } />
                <Button type="primary" onClick={ this.props.testGet }>获取数据</Button>
                <p>{ this.props.isGet ? "已获取数据" : "未获取数据" }</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);




