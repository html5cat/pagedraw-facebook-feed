import Awsui_form_tooltip_triangle-top-omit from './awsui_form_tooltip_triangle-top-omit';
import Awsui_form_tooltip_triangle-side-omit from './awsui_form_tooltip_triangle-side-omit';
import React from 'react';
import './awsui_form_tooltip.css';

function render() {
    return <div className="awsui_form_tooltip-awsui_form_tooltip-1">
        <div className="awsui_form_tooltip-0">
            <div className="awsui_form_tooltip-0-0">
                <div className="awsui_form_tooltip-0-0-0">
                    <div className="awsui_form_tooltip-0-0-0-0">
                        <div className="awsui_form_tooltip-path-1">
                            <div className="awsui_form_tooltip-0-0-0-0-0-0">
                                <div className="awsui_form_tooltip-type_something-1">
                                    Type something
                                </div>
                            </div>
                        </div>
                        <div className="awsui_form_tooltip-top-8">
                            <Awsui_form_tooltip_triangle-top-omit /> 
                        </div>
                        <div className="awsui_form_tooltip-right-1">
                            <Awsui_form_tooltip_triangle-side-omit /> 
                        </div>
                        <div className="awsui_form_tooltip-left-1">
                            <Awsui_form_tooltip_triangle-side-omit /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="awsui_form_tooltip-1">
            <div className="awsui_form_tooltip-bottom-1">
                <Awsui_form_tooltip_triangle-top-omit /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}