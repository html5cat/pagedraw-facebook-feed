import Awsui_form_button_text_primary-omit from './awsui_form_button_text_primary-omit';
import React from 'react';
import './awsui_form_button_text.css';

function render() {
    return <div className="awsui_form_button_text-awsui_form_button_text-5">
        <div className="awsui_form_button_text-0">
            <div className="awsui_form_button_text-button_text_primary-1">
                <Awsui_form_button_text_primary-omit /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}