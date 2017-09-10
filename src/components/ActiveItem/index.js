import React, { Component } from 'react';
import './index.css';

import downArrowIcon from '../../images/active-items/down-arrow-icon.svg';
import upArrowIcon from '../../images/active-items/up-arrow-icon.svg';

const ActiveSubItem = ({name, img, copy}) => {
    return (
        <div className="active-sub-item">
            <img src={img} alt="" className="active-sub-item-img"/>
            <div className="active-sub-item-text">
                <div className="active-sub-item-name">{name}</div>
                <div className="active-sub-item-copy">{copy}</div>
            </div>
        </div>
    )
}


class ActiveItem extends Component {
    constructor(){
        super();
        this.state = {
            expanded: false
        }
    }

    handleClick = (e) => {
        if(this.state.expanded){
            this.setState({
                expanded: false
            })
        } else {
            this.setState({
                expanded: true
            })
        }
    }

    render() {
        const { name, img, subItems } = this.props,
              { expanded } = this.state;
        return (
            <div className='active-container'>
                <div className="active-item-header">
                    <img src={img} alt=""  className="active-item-header-img"/>
                    <div className="active-item-header-name">{name}</div>
                    <div className="arrow-icon-container" onClick={this.handleClick}>
                        {
                            expanded?<img src={upArrowIcon} alt=""/> : <img src={downArrowIcon} alt=""/>
                        }
                    </div>
                </div>
                {
                    expanded && subItems.map((subItem, index) => {
                        return (
                            <ActiveSubItem
                                name={subItem.title}
                                key={`${subItem.title}-${index}`}
                                img={subItem.imgSrc}
                                copy={subItem.copy}
                                />
                        )
                    })
                }
            </div>
        )
    }
}

export default ActiveItem;
