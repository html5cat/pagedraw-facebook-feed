import Awsui_elements_inputfield_default from './awsui_elements_inputfield_default';
import React from 'react';
import './textarea.css';

function render() {
    return <div className="textarea-textarea-4">
        <div className="textarea-0">
            <div className="textarea-path-1" /> 
        </div>
        <div className="textarea-1">
            <div className="textarea-path-12">
                <div className="textarea-1-0-0">
                    <div className="textarea-combined-label-5">
                        {"Label : GROUP – optional Info"}
                    </div>
                </div>
                <div className="textarea-1-0-1">
                    <div className="textarea-description-9">
                        Definition of label
                    </div>
                </div>
            </div>
        </div>
        <div className="textarea-2">
            <div className="textarea-path-128">
                <div className="textarea-2-0-0">
                    <div className="textarea-2-0-0-0">
                        <div className="textarea-2-0-0-0-0">
                            <div className="textarea-2-0-0-0-0-0">
                                <div className="textarea-elements_inputfield_default-5">
                                    <Awsui_elements_inputfield_default /> 
                                </div>
                                <div className="textarea-value-1">Type something</div>
                                <div className="textarea-path-4" /> 
                                <div className="textarea-path-2" /> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="textarea-2-0-1">
                    <div className="textarea-constraint-1">
                        Constraint text here
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}