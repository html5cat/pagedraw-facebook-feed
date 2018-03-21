import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_form_button_icon-only_disabled-omit.css';

function render() {
    return <div className="awsui_form_button_icon-only_disabled-omit-awsui_form_button_icon-only_disabled-omit-1">
        <div className="awsui_form_button_icon-only_disabled-omit-0">
            <div className="awsui_form_button_icon-only_disabled-omit-path-5">
                <div className="awsui_form_button_icon-only_disabled-omit-0-0-0">
                    <div className="awsui_form_button_icon-only_disabled-omit-icons_actions_default-1">
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