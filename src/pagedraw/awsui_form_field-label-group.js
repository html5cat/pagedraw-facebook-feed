import React from 'react';
import './awsui_form_field-label-group.css';

function render() {
    return <div className="awsui_form_field-label-group-awsui_form_field-label-group-3">
        <div className="awsui_form_field-label-group-0">
            <div className="awsui_form_field-label-group-0-0">
                <div className="awsui_form_field-label-group-description-8">
                    Input description here or helpful guidance for users
                </div>
                <div className="awsui_form_field-label-group-label-4">
                    {"Label : SYMBOL"}
                </div>
                <div className="awsui_form_field-label-group-optional-5">
                    {"– optional"}
                </div>
                <div className="awsui_form_field-label-group-info-8">
                    Info
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}