import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_form_button_icon-only_secondary-omit.css';

function render() {
    return <div className="awsui_form_button_icon-only_secondary-omit-awsui_form_button_icon-only_secondary-omit-6">
        <div className="awsui_form_button_icon-only_secondary-omit-0">
            <div className="awsui_form_button_icon-only_secondary-omit-path-1">
                <div className="awsui_form_button_icon-only_secondary-omit-0-0-0">
                    <div className="awsui_form_button_icon-only_secondary-omit-icons_actions_default-1">
                        <Awsui_icons_actions_default /> 
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}