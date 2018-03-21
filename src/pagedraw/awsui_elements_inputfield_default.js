import Awsui_elements_inputfield_default_normal from './awsui_elements_inputfield_default_normal';
import React from 'react';
import './awsui_elements_inputfield_default.css';

function render() {
    return <div className="awsui_elements_inputfield_default-awsui_elements_inputfield_default-9">
        <div className="awsui_elements_inputfield_default-0">
            <div className="awsui_elements_inputfield_default-elements_inputfield_default_normal-6">
                <Awsui_elements_inputfield_default_normal /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}