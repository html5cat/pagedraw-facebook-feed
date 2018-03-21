import Awsui_icons_actions_default-inverted from './awsui_icons_actions_default-inverted';
import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './spinners.css';

function render() {
    return <div className="spinners-spinners-8">
        <div className="spinners-0">
            <div className="spinners-icons_actions_default-inverted-4">
                <Awsui_icons_actions_default-inverted /> 
            </div>
            <div className="spinners-icons_actions_default-1">
                <Awsui_icons_actions_default /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}