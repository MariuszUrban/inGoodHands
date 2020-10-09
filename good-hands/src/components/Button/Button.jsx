import React, { Component } from 'react';
import './_button.scss'

export default class Button extends Component {
    render() {
        return (
            <div >
                <button className="btn-main"><span>{this.props.text}</span></button>
            </div>
        )
    }
}
