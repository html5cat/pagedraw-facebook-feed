import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './help-panel-open.css';

function render() {
    return <div className="help-panel-open-help-panel-open-1">
        <div className="help-panel-open-0">
            <div className="help-panel-open-path-15">
                <div className="help-panel-open-0-0-0">
                    <div className="help-panel-open-headline-1">
                        Help panel title
                    </div>
                    <div className="help-panel-open-icons_actions_default-1">
                        <Awsui_icons_actions_default /> 
                    </div>
                </div>
                <div className="help-panel-open-0-0-1">
                    <div className="help-panel-open-path-1" /> 
                </div>
                <div className="help-panel-open-0-0-2">
                    <div className="help-panel-open-description-5">
                        {"Description of item that continues on the next line."}
                    </div>
                </div>
                <div className="help-panel-open-0-0-3">
                    <div className="help-panel-open-link-3">External link</div>
                    <div className="help-panel-open-awsui_icons_actions_default-1">
                        <Awsui_icons_actions_default /> 
                    </div>
                </div>
                <div className="help-panel-open-0-0-4">
                    <div className="help-panel-open-path-12" /> 
                </div>
                <div className="help-panel-open-0-0-5">
                    <div className="help-panel-open-section-1">
                        Section header
                    </div>
                </div>
                <div className="help-panel-open-0-0-6">
                    <div className="help-panel-open-description-1">
                        {"Description of item that continues on the next line."}
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}