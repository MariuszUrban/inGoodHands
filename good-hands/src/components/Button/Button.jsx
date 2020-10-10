import React, { Component } from 'react';
import './_button.scss'

export default class Button extends Component {
    render() {
        return (
            <div className={`${this.props.wrapper}`}>
                <button className={`btn-main ${this.props.class}`}><span>{this.props.text}</span></button>
            </div>
        )
    }
}
