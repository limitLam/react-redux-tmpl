/**
 * 首页
 */

import React, { Component, PropTypes } from 'react';

class Home extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Home</div>
        );
    }
}

export default Home;



