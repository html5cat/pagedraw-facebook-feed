import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './icons-biggest.css';

function render() {
    return <div className="icons-biggest-icons-biggest-1">
        <div className="icons-biggest-0">
            <div className="icons-biggest-icons_actions_default-1">
                <Awsui_icons_actions_default /> 
            </div>
            <div className="icons-biggest-0-1">
                <div className="icons-biggest-0-1-0">
                    <div className="icons-biggest-resize_normal_icons-1">
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