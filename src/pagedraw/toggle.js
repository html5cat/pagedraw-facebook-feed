import Awsui_form_switch_default from './awsui_form_switch_default';
import Awsui_form_switch_default_off-enabled-omit from './awsui_form_switch_default_off-enabled-omit';
import React from 'react';
import './toggle.css';

function render() {
    return <div className="toggle-toggle-10">
        <div className="toggle-0">
            <div className="toggle-toggle-1">Toggle</div>
        </div>
        <div className="toggle-1">
            <div className="toggle-switch-1">
                <Awsui_form_switch_default /> 
            </div>
            <div className="toggle-1-1">
                <div className="toggle-1-1-0">
                    <div className="toggle-switch_turned_on-8">
                        Switch turned on
                    </div>
                </div>
            </div>
        </div>
        <div className="toggle-2">
            <div className="toggle-switch-7">
                <Awsui_form_switch_default_off-enabled-omit /> 
            </div>
            <div className="toggle-2-1">
                <div className="toggle-2-1-0">
                    <div className="toggle-switch_turned_o_-6">
                        {"Switch turned oﬀ"}
                    </div>
                </div>
            </div>
        </div>
        <div className="toggle-3">
            <div className="toggle-switch-4">
                <Awsui_form_switch_default /> 
            </div>
            <div className="toggle-3-1">
                <div className="toggle-3-1-0">
                    <div className="toggle-switch_disabled_turned_on-1">
                        {"Switch disabled & turned on"}
                    </div>
                </div>
            </div>
        </div>
        <div className="toggle-4">
            <div className="toggle-switch-3">
                <Awsui_form_switch_default /> 
            </div>
            <div className="toggle-4-1">
                <div className="toggle-4-1-0">
                    <div className="toggle-switch_disabled_turned_o_-1">
                        {"Switch disabled & turned oﬀ"}
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}