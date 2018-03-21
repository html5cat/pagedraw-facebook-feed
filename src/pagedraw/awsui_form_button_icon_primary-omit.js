import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_form_button_icon_primary-omit.css';

function render() {
    return <div className="awsui_form_button_icon_primary-omit-awsui_form_button_icon_primary-omit-2">
        <div className="awsui_form_button_icon_primary-omit-0">
            <div className="awsui_form_button_icon_primary-omit-path-1">
                <div className="awsui_form_button_icon_primary-omit-0-0-0">
                    <div className="awsui_form_button_icon_primary-omit-icons_actions_default-1">
                        <Awsui_icons_actions_default /> 
                    </div>
                    <div className="awsui_form_button_icon_primary-omit-primary-1">
                        Primary
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}