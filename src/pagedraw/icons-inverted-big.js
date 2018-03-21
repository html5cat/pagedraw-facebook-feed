import Awsui_icons_actions_default-inverted from './awsui_icons_actions_default-inverted';
import React from 'react';
import './icons-inverted-big.css';

function render() {
    return <div className="icons-inverted-big-icons-inverted-big-2">
        <div className="icons-inverted-big-0">
            <div className="icons-inverted-big-icons_actions_default-inverted-1">
                <Awsui_icons_actions_default-inverted /> 
            </div>
            <div className="icons-inverted-big-0-1">
                <div className="icons-inverted-big-0-1-0">
                    <div className="icons-inverted-big-resize_normal_icons-4">
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