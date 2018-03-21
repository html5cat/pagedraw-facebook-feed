import Awsui_page_nav_collapsed from './awsui_page_nav_collapsed';
import React from 'react';
import './navigation-closed.css';

function render() {
    return <div className="navigation-closed-navigation-closed-1">
        <div className="navigation-closed-0">
            <div className="navigation-closed-page_nav_collapsed-2">
                <Awsui_page_nav_collapsed /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}