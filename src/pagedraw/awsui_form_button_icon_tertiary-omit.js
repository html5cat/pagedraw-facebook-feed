import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_form_button_icon_tertiary-omit.css';

function render() {
    return <div className="awsui_form_button_icon_tertiary-omit-awsui_form_button_icon_tertiary-omit-1">
        <div className="awsui_form_button_icon_tertiary-omit-0">
            <div className="awsui_form_button_icon_tertiary-omit-path-8">
                <div className="awsui_form_button_icon_tertiary-omit-0-0-0">
                    <div className="awsui_form_button_icon_tertiary-omit-icons_actions_default-1">
                        <Awsui_icons_actions_default /> 
                    </div>
                    <div className="awsui_form_button_icon_tertiary-omit-tertiary-4">
                        Tertiary
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}