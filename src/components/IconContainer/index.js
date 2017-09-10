import React, { Component } from 'react';
import './index.css';

import IconSectionsHeader from '../../images/section-header-icon.svg';
import IconDashboard from '../../images/dashboard-icon.svg';
import IconChecker from '../../images/checker-icon.svg';
import IconSpeaker from '../../images/speaker-icon.svg';
import IconPerson from '../../images/person-icon.svg';
import IconSectionActive from '../../images/section-active-icon.svg';

class IconContainer extends Component {
    render(){
        const iconImages = {
            'sections-header-icon' :  IconSectionsHeader,
            'dashboard-icon' : IconDashboard ,
            'checker-icon' : IconChecker,
            'speaker-icon' : IconSpeaker,
            'person-icon' : IconPerson,
            'section-active-icon' : IconSectionActive
        }

        const iconThemeName = this.props.theme;
        const iconImage = iconImages[iconThemeName];

        return (
            <div className="icon-container">
                <div className="container-wrap">
                    <img src={iconImage} alt=""/>    
                </div>
            </div>
        );
    }
}

export default IconContainer;
