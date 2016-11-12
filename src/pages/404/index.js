/*
	404页面
*/

import React, { Component, PropTypes } from 'react';

class NpFound extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>404</div>
        );
    }
}

export default NpFound;


