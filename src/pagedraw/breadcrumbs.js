import Awsui_breadcrumb_default from './awsui_breadcrumb_default';
import React from 'react';
import './breadcrumbs.css';

function render() {
    return <div className="breadcrumbs-breadcrumbs-8">
        <div className="breadcrumbs-0">
            <div className="breadcrumbs-breadcrumb_default-1">
                <Awsui_breadcrumb_default /> 
            </div>
        </div>
        <div className="breadcrumbs-1">
            <div className="breadcrumbs-breadcrumb_default-5">
                <Awsui_breadcrumb_default /> 
            </div>
        </div>
        <div className="breadcrumbs-2">
            <div className="breadcrumbs-breadcrumb_default-9">
                <Awsui_breadcrumb_default /> 
            </div>
        </div>
        <div className="breadcrumbs-3">
            <div className="breadcrumbs-breadcrumb_default-92">
                <Awsui_breadcrumb_default /> 
            </div>
        </div>
        <div className="breadcrumbs-4">
            <div className="breadcrumbs-1-t">GROUP</div>
            <div className="breadcrumbs-4-1">
                <div className="breadcrumbs-4-1-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/5458951800368504-1521598431605-CED63306-D76A-4E6A-A355-D8C7B6610618.png" className="breadcrumbs-1-i" /> 
                </div>
            </div>
            <div className="breadcrumbs-2-t">Service</div>
            <div className="breadcrumbs-4-3">
                <div className="breadcrumbs-4-3-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/1566616952564258-1521598431604-401A8E17-3B9E-4594-81B5-1F537C4E2DEB.png" className="breadcrumbs-2-i" /> 
                </div>
            </div>
            <div className="breadcrumbs-5">current-place</div>
            <div className="breadcrumbs-4-5">
                <div className="breadcrumbs-4-5-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/1732807276911006-1521598431603-1C722F90-2093-49DC-8322-409F76D8A1A9.png" className="breadcrumbs-3-i" /> 
                </div>
            </div>
            <div className="breadcrumbs-4-t">current-place</div>
            <div className="breadcrumbs-4-7">
                <div className="breadcrumbs-4-7-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/1136435634635542-1521598431592-ADEA22FB-8787-44D7-9F6D-A4C353DCA620.png" className="breadcrumbs-4-i" /> 
                </div>
            </div>
            <div className="breadcrumbs-3-t">current-place</div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}