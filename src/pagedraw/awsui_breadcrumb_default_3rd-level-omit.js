import React from 'react';
import './awsui_breadcrumb_default_3rd-level-omit.css';

function render() {
    return <div className="awsui_breadcrumb_default_3rd-level-omit-awsui_breadcrumb_default_3">
        <div className="awsui_breadcrumb_default_3rd-level-omit-0">
            <div className="awsui_breadcrumb_default_3rd-level-omit-1">
                Service
            </div>
            <div className="awsui_breadcrumb_default_3rd-level-omit-0-1">
                <div className="awsui_breadcrumb_default_3rd-level-omit-0-1-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/1930241545399060-1521598430514-C71AF1C1-F2A3-4DBA-BE81-782A3EA20939.png" className="awsui_breadcrumb_default_3rd-level-omit-1-i" /> 
                </div>
            </div>
            <div className="awsui_breadcrumb_default_3rd-level-omit-2">
                Resource Type
            </div>
            <div className="awsui_breadcrumb_default_3rd-level-omit-0-3">
                <div className="awsui_breadcrumb_default_3rd-level-omit-0-3-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/1362114584178207-1521598430511-23C3A358-ACE7-4EBA-83DF-F39C5A913DEA.png" className="awsui_breadcrumb_default_3rd-level-omit-2-i" /> 
                </div>
            </div>
            <div className="awsui_breadcrumb_default_3rd-level-omit-3">
                Nested Resource
            </div>
            <div className="awsui_breadcrumb_default_3rd-level-omit-0-5">
                <div className="awsui_breadcrumb_default_3rd-level-omit-0-5-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/5308856969694612-1521598430512-D500FF9E-55B3-4312-B789-DBE4F0A86399.png" className="awsui_breadcrumb_default_3rd-level-omit-2-ic" /> 
                </div>
            </div>
            <div className="awsui_breadcrumb_default_3rd-level-omit-4">
                CurrentPage
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}