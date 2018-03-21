import React from 'react';
import './awsui_breadcrumb_default_2nd-level-omit.css';

function render() {
    return <div className="awsui_breadcrumb_default_2nd-level-omit-awsui_breadcrumb_default_2">
        <div className="awsui_breadcrumb_default_2nd-level-omit-0">
            <div className="awsui_breadcrumb_default_2nd-level-omit-1">
                Service
            </div>
            <div className="awsui_breadcrumb_default_2nd-level-omit-0-1">
                <div className="awsui_breadcrumb_default_2nd-level-omit-0-1-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/8614820056144372-1521598430508-7E28021F-8707-463E-8A69-AB91C64003D9.png" className="awsui_breadcrumb_default_2nd-level-omit-1-i" /> 
                </div>
            </div>
            <div className="awsui_breadcrumb_default_2nd-level-omit-2">
                Resource Type
            </div>
            <div className="awsui_breadcrumb_default_2nd-level-omit-0-3">
                <div className="awsui_breadcrumb_default_2nd-level-omit-0-3-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/4398533565357450-1521598430506-BB3534E1-2D42-4623-A7CA-4688078F1681.png" className="awsui_breadcrumb_default_2nd-level-omit-2-i" /> 
                </div>
            </div>
            <div className="awsui_breadcrumb_default_2nd-level-omit-3">
                Create ResourceType
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}