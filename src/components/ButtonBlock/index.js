import React, { Component } from 'react';
import './index.css';

class ButtonBlock extends Component {
    render() {
        return (
            <div className='button-container'>
                {this.props.children}
            </div>
        )
    }
}

export default ButtonBlock;
