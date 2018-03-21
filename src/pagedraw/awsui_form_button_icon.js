import Awsui_form_button_icon_primary-omit from './awsui_form_button_icon_primary-omit';
import React from 'react';
import './awsui_form_button_icon.css';

function render() {
    return <div className="awsui_form_button_icon-awsui_form_button_icon-1">
        <div className="awsui_form_button_icon-0">
            <div className="awsui_form_button_icon-button_icon_secondary-1">
                <Awsui_form_button_icon_primary-omit /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}