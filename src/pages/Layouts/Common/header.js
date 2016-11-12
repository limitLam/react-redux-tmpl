/*
  公用头部
*/

import React, { Component, PropTypes } from 'react';

class Header extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="the-main-nav-wrap">
              头部
            </div>
        );
    }
}

export default Header;


