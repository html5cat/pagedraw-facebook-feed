import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_page_nav_collapsed.css';

function render() {
    return <div className="awsui_page_nav_collapsed-awsui_page_nav_collapsed-1">
        <div className="awsui_page_nav_collapsed-0">
            <div className="awsui_page_nav_collapsed-path-8">
                <div className="awsui_page_nav_collapsed-0-0-0">
                    <div className="awsui_page_nav_collapsed-icons_actions_default-3">
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