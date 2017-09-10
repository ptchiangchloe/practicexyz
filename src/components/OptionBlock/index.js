import React, { Component } from 'react';
import './index.css';
import classNames from 'classnames';

import IconContainer from '../IconContainer'

class OptionBlock extends Component {
    render() {
        const {icontheme, name, isActive} = this.props;

        let classes = null;
        if(isActive) {
            classes = classNames({
                "option-container": true,
                "isActive": true
            });
        } else {
            classes = classNames({
                "option-container": true
            });
        }

        return (
            <div className={classes}>
                <IconContainer theme={icontheme}/>
                <div className="option-name">{name}</div>
            </div>
        )
    }
}

export default OptionBlock;
