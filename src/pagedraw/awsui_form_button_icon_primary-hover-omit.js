import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_form_button_icon_primary-hover-omit.css';

function render() {
    return <div className="awsui_form_button_icon_primary-hover-omit-awsui_form_button_icon_primary-hover-omit-1">
        <div className="awsui_form_button_icon_primary-hover-omit-0">
            <div className="awsui_form_button_icon_primary-hover-omit-path-1">
                <div className="awsui_form_button_icon_primary-hover-omit-0-0-0">
                    <div className="awsui_form_button_icon_primary-hover-omit-icons_actions_default-1">
                        <Awsui_icons_actions_default /> 
                    </div>
                    <div className="awsui_form_button_icon_primary-hover-omit-primary-h-4">
                        Primary-h
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}