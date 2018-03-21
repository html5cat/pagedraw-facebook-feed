import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_form_button_icon_secondary-omit.css';

function render() {
    return <div className="awsui_form_button_icon_secondary-omit-awsui_form_button_icon_secondary-omit-7">
        <div className="awsui_form_button_icon_secondary-omit-0">
            <div className="awsui_form_button_icon_secondary-omit-0-0">
                <div className="awsui_form_button_icon_secondary-omit-path-6">
                    <div className="awsui_form_button_icon_secondary-omit-0-0-0-0">
                        <div className="awsui_form_button_icon_secondary-omit-icons_actions_default-7">
                            <Awsui_icons_actions_default /> 
                        </div>
                    </div>
                </div>
                <div className="awsui_form_button_icon_secondary-omit-secondary-9">
                    Secondary
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}