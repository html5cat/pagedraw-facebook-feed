import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_page_nav_help-panel-collapsed.css';

function render() {
    return <div className="awsui_page_nav_help-panel-collapsed-awsui_page_nav_help-panel-collapsed-6">
        <div className="awsui_page_nav_help-panel-collapsed-0">
            <div className="awsui_page_nav_help-panel-collapsed-path-6">
                <div className="awsui_page_nav_help-panel-collapsed-0-0-0">
                    <div className="awsui_page_nav_help-panel-collapsed-icons_actions_default-1">
                        <Awsui_icons_actions_default /> 
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}