import React, { Component } from 'react'
import './index.css';
export default class HeadBar extends Component {
    render() {
        return (
            <div>
                <h3 className="Heading">{this.props.content}</h3>
            </div>
        )
    }
}
