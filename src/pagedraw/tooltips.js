import Awsui_form_tooltip_triangle-top-omit from './awsui_form_tooltip_triangle-top-omit';
import Awsui_form_tooltip_triangle-side-omit from './awsui_form_tooltip_triangle-side-omit';
import React from 'react';
import './tooltips.css';

function render() {
    return <div className="tooltips-tooltips-1">
        <div className="tooltips-0">
            <div className="tooltips-0-0">
                <div className="tooltips-0-0-0">
                    <div className="tooltips-0-0-0-0">
                        <div className="tooltips-path-1">
                            <div className="tooltips-0-0-0-0-0-0">
                                <div className="tooltips-type_something-9">TOP</div>
                            </div>
                        </div>
                        <div className="tooltips-top-3">
                            <Awsui_form_tooltip_triangle-top-omit /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tooltips-1">
            <div className="tooltips-1-0">
                <div className="tooltips-1-0-0">
                    <div className="tooltips-1-0-0-0">
                        <div className="tooltips-path-5">
                            <div className="tooltips-1-0-0-0-0-0">
                                <div className="tooltips-type_something-8">LEFT</div>
                            </div>
                        </div>
                        <div className="tooltips-left-1">
                            <Awsui_form_tooltip_triangle-side-omit /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="tooltips-1-1">
                <div className="tooltips-1-1-0">
                    <div className="tooltips-1-1-0-0">
                        <div className="tooltips-path-15">
                            <div className="tooltips-1-1-0-0-0-0">
                                <div className="tooltips-type_something-1">RIGHT</div>
                            </div>
                        </div>
                        <div className="tooltips-right-9">
                            <Awsui_form_tooltip_triangle-side-omit /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tooltips-2">
            <div className="tooltips-path-14">
                <div className="tooltips-2-0-0">
                    <div className="tooltips-type_something-10">BOTTOM</div>
                </div>
            </div>
        </div>
        <div className="tooltips-3">
            <div className="tooltips-bottom-3">
                <Awsui_form_tooltip_triangle-top-omit /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}