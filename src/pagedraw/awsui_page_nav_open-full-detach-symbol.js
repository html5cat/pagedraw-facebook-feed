import Awsui_page_nav_open-omit from './awsui_page_nav_open-omit';
import Awsui_page_nav_open_highlighted-row from './awsui_page_nav_open_highlighted-row';
import React from 'react';
import './awsui_page_nav_open-full-detach-symbol.css';

function render() {
    return <div className="awsui_page_nav_open-full-detach-symbol-awsui_page_nav_open-full-detach-symbol-6">
        <div className="awsui_page_nav_open-full-detach-symbol-0">
            <div className="awsui_page_nav_open-full-detach-symbol-0-0">
                <div className="awsui_page_nav_open-full-detach-symbol-page_navigation_default_open-1">
                    <Awsui_page_nav_open-omit /> 
                </div>
                <div className="awsui_page_nav_open-full-detach-symbol-page_navigation_default_open_highlighted-row-1">
                    <Awsui_page_nav_open_highlighted-row /> 
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}