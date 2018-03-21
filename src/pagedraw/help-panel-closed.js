import Awsui_page_nav_collapsed from './awsui_page_nav_collapsed';
import React from 'react';
import './help-panel-closed.css';

function render() {
    return <div className="help-panel-closed-help-panel-closed-4">
        <div className="help-panel-closed-0">
            <div className="help-panel-closed-page_nav_collapsed-1">
                <Awsui_page_nav_collapsed /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}