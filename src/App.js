import React, { Component } from 'react';
import './App.css';

// Components
import IconContainer from './components/IconContainer';
import ButtonBlock from './components/ButtonBlock';
import OptionBlock from './components/OptionBlock';
import ActiveItem from './components/ActiveItem';

// Images
import downArrowIcon from './images/down-arrow-icon.svg'
import roundMaginifierIcon from './images/round-maginifier-icon.svg'

// Data
import { navigationInfo, activeItemInfo } from './data';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-header">
                    <h3>Coding Challenge @ Practice</h3>
                </div>
                <div className="section-header">
                    <ButtonBlock>
                        <div className="button-icon-container">
                            <img src={downArrowIcon} alt=""/>
                        </div>
                        <div className="button-text">MORE ACTIONS</div>
                    </ButtonBlock>
                    <ButtonBlock>
                        <div className="button-text">CREATE SECTION</div>
                    </ButtonBlock>
                    <div className="header-icon-container">
                        <div className="header-text">Sections</div>
                        <IconContainer theme="sections-header-icon" />
                    </div>
                </div>
                <div className="main-section">
                    <div className="section-navigation">
                        {
                            navigationInfo.map((item, index) => {
                                return (
                                    <OptionBlock
                                        icontheme={item.icon}
                                        name={item.name}
                                        isActive = {item.highlighted}
                                        key={item.name}
                                        />
                                )
                            })
                        }
                    </div>
                    <div className="section-active-container">
                        <div className="section-active">
                            <div className='section-active-header'>
                                <IconContainer theme='section-active-icon'/>
                                <div className="section-active-header-name">ACTIVE SECTIONS</div>
                                <input
                                    className="search-bar"
                                    src={roundMaginifierIcon}
                                    value="Search Sections"
                                    type="text"
                                 />
                                <div className="maginifier-icon-container">
                                    <img src={roundMaginifierIcon} alt=""/>
                                </div>
                            </div>
                            {
                                activeItemInfo.map( (item,index) => {
                                    return (
                                        <ActiveItem
                                            name={item.title}
                                            img={item.imgSrc}
                                            key={`${item.title}-${index}`}
                                            subItems={item.subItems}
                                            />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
