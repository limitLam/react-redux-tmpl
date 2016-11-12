/**
 * 加载更多
 * 
 * by tommyshao
 * 2016-08-30
 */

import React,{ Component } from 'react'
import { Button, ButtonWrap } from 'components/button'

export default class LoadMore extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '加载更多' || props.text,
            end: false,
            active: false
        }
    }

    // 激活
    __Active() {
        this.setState({ active: true })
    }

    componentWillReceiveProps(nextPros) {
        const state = Object.assign({}, this.state, nextPros.option)
        this.setState(state)
    }

    // 响应激活状态
    handleActive = () => {
        const { onActive } = this.props
        this.__Active()
        typeof onActive === 'function' && onActive() 
    }

    __renderTxt() {
        const option = this.state

        if(option.end) {
            return option.text
        } else {
            return (
                <span>
                    <span className="loop-rotate-wrap">
                        {
                            option.active ?  <i className="icon-loop loop-rotate"></i> : <i className="icon-chevron-thin-down"></i>
                        } 
                    </span>
                    &nbsp;
                    { option.text }
                </span>
            )
        }
    }

    render() {
        const option = this.state
        return (
            <ButtonWrap>
                <Button type="border-thirdly" onClick={ this.handleActive } disabled={ option.active }>
                    {
                        this.__renderTxt()
                    }
                    
                </Button>
            </ButtonWrap>
        )
    }
}