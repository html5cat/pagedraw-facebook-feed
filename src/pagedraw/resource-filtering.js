import Awsui_elements_inputfield_default from './awsui_elements_inputfield_default';
import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './resource-filtering.css';

function render() {
    return <div className="resource-filtering-resource-filtering-9">
        <div className="resource-filtering-0">
            <div className="resource-filtering-0-0">
                <div className="resource-filtering-elements_inputfield_default-1">
                    <Awsui_elements_inputfield_default /> 
                </div>
                <div className="resource-filtering-search-1">Search</div>
                <div className="resource-filtering-icons_actions_default-4">
                    <Awsui_icons_actions_default /> 
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}