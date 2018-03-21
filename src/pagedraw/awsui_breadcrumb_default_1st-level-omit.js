import React from 'react';
import './awsui_breadcrumb_default_1st-level-omit.css';

function render() {
    return <div className="awsui_breadcrumb_default_1st-level-omit-awsui_breadcrumb_default_1">
        <div className="awsui_breadcrumb_default_1st-level-omit-0">
            <div className="awsui_breadcrumb_default_1st-level-omit-1">
                Service
            </div>
            <div className="awsui_breadcrumb_default_1st-level-omit-0-1">
                <div className="awsui_breadcrumb_default_1st-level-omit-0-1-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/1379405227658302-1521598430505-2BA084CA-6FB2-44B6-895B-5E1BFEDD0345.png" className="awsui_breadcrumb_default_1st-level-omit-1-i" /> 
                </div>
            </div>
            <div className="awsui_breadcrumb_default_1st-level-omit-2">
                ResourceType-s
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}