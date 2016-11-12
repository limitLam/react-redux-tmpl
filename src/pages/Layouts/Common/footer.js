/*
  公用底部
*/

import React, { Component, PropTypes } from 'react';

class Footer extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-footer clearfix">
              脚部
            </div>
        );
    }
}

export default Footer;


