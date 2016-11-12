/*
	layout主页面
*/
import Header from './Common/header';
import Footer from './Common/footer';

import React, { Component, PropTypes } from 'react';

class Index extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-frm">
              <Header />
              <div className="frame-wrap-bg">
                <div className="frame-wrap">
                  {/* 主内容区 */}
                  {this.props.children}
                </div>
              </div>
              <Footer />
            </div>
        );
    }
}

export default Index;




