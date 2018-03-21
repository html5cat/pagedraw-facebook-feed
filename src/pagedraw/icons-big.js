import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './icons-big.css';

function render() {
    return <div className="icons-big-icons-big-1">
        <div className="icons-big-0">
            <div className="icons-big-icons_actions_default-1">
                <Awsui_icons_actions_default /> 
            </div>
            <div className="icons-big-0-1">
                <div className="icons-big-0-1-0">
                    <div className="icons-big-resize_normal_icons-1">
                        resize normal icons to 32x32
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}