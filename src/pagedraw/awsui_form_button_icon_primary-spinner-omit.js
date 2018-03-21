import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_form_button_icon_primary-spinner-omit.css';

function render() {
    return <div className="awsui_form_button_icon_primary-spinner-omit-awsui_form_button_icon_primary-spinner-omit-3">
        <div className="awsui_form_button_icon_primary-spinner-omit-0">
            <div className="awsui_form_button_icon_primary-spinner-omit-path-1">
                <div className="awsui_form_button_icon_primary-spinner-omit-0-0-0">
                    <div className="awsui_form_button_icon_primary-spinner-omit-icons_actions_default-5">
                        <Awsui_icons_actions_default /> 
                    </div>
                    <div className="awsui_form_button_icon_primary-spinner-omit-loading-1">
                        Loading
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}