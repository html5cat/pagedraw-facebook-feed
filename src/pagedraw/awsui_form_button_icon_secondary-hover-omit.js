import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_form_button_icon_secondary-hover-omit.css';

function render() {
    return <div className="awsui_form_button_icon_secondary-hover-omit-awsui_form_button_icon_secondary-hover-omit-3">
        <div className="awsui_form_button_icon_secondary-hover-omit-0">
            <div className="awsui_form_button_icon_secondary-hover-omit-0-0">
                <div className="awsui_form_button_icon_secondary-hover-omit-path-1">
                    <div className="awsui_form_button_icon_secondary-hover-omit-0-0-0-0">
                        <div className="awsui_form_button_icon_secondary-hover-omit-icons_actions_default-1">
                            <Awsui_icons_actions_default /> 
                        </div>
                    </div>
                </div>
                <div className="awsui_form_button_icon_secondary-hover-omit-second-h-6">
                    Second-h
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}