import Awsui_icons_actions_default-inverted from './awsui_icons_actions_default-inverted';
import React from 'react';
import './icons-inverted-biggest.css';

function render() {
    return <div className="icons-inverted-biggest-icons-inverted-biggest-1">
        <div className="icons-inverted-biggest-0">
            <div className="icons-inverted-biggest-icons_actions_default-inverted-2">
                <Awsui_icons_actions_default-inverted /> 
            </div>
            <div className="icons-inverted-biggest-0-1">
                <div className="icons-inverted-biggest-0-1-0">
                    <div className="icons-inverted-biggest-resize_normal_icons-1">
                        resize normal icons to 64x64
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}