import Awsui_form-section_default-omit from './awsui_form-section_default-omit';
import React from 'react';
import './awsui_form-section.css';

function render() {
    return <div className="awsui_form-section-awsui_form-section-4">
        <div className="awsui_form-section-0">
            <div className="awsui_form-section-form-section_default-1">
                <Awsui_form-section_default-omit /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}