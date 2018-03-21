import Awsui_elements_inputfield_default from './awsui_elements_inputfield_default';
import React from 'react';
import './tag-editor.css';

function render() {
    return <div className="tag-editor-tag-editor-2">
        <div className="tag-editor-0">
            <div className="tag-editor-0-0">
                <div className="tag-editor-0-0-0">
                    <div className="tag-editor-0-0-0-0">
                        <div className="tag-editor-elements_inputfield_default-1">
                            <Awsui_elements_inputfield_default /> 
                        </div>
                        <div className="tag-editor-my-tag-1">my-tag</div>
                    </div>
                </div>
            </div>
            <div className="tag-editor-0-1">
                <div className="tag-editor-0-1-0">
                    <div className="tag-editor-0-1-0-0">
                        <div className="tag-editor-elements_inputfield_default-12">
                            <Awsui_elements_inputfield_default /> 
                        </div>
                        <div className="tag-editor-my-value-2">my-value</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tag-editor-1">
            <div className="tag-editor-1-0">
                <div className="tag-editor-1-0-0">
                    <div className="tag-editor-1-0-0-0">
                        <div className="tag-editor-elements_inputfield_default-13">
                            <Awsui_elements_inputfield_default /> 
                        </div>
                        <div className="tag-editor-my-tag-2">my-tag-2</div>
                    </div>
                </div>
            </div>
            <div className="tag-editor-elements_inputfield_default-7">
                <Awsui_elements_inputfield_default /> 
            </div>
            <div className="tag-editor-path-3">
                <div className="tag-editor-1-2-0">
                    <div className="tag-editor-6">Remove</div>
                </div>
            </div>
        </div>
        <div className="tag-editor-2">
            <div className="tag-editor-add_another_row-1">
                Add another row
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}