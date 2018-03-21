import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_form_button_icon_disabled-omit.css';

function render() {
    return <div className="awsui_form_button_icon_disabled-omit-awsui_form_button_icon_disabled-omit-2">
        <div className="awsui_form_button_icon_disabled-omit-0">
            <div className="awsui_form_button_icon_disabled-omit-path-3">
                <div className="awsui_form_button_icon_disabled-omit-0-0-0">
                    <div className="awsui_form_button_icon_disabled-omit-icons_actions_default-1">
                        <Awsui_icons_actions_default /> 
                    </div>
                    <div className="awsui_form_button_icon_disabled-omit-disabled-6">
                        Disabled
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}