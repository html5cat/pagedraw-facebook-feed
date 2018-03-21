import React from 'react';
import './actionstripe.css';

function render() {
    return <div className="actionstripe-actionstripe-1">
        <div className="actionstripe-0">
            <div className="actionstripe-path-7">
                <div className="actionstripe-0-0-0">
                    <div className="actionstripe-6">View details</div>
                </div>
            </div>
            <div className="actionstripe-path-8">
                <div className="actionstripe-0-1-0">
                    <div className="actionstripe-6_">Edit</div>
                </div>
            </div>
            <div className="actionstripe-path-1">
                <div className="actionstripe-0-2-0">
                    <div className="actionstripe-6_2">Delete</div>
                </div>
            </div>
            <div className="actionstripe-path-5">
                <div className="actionstripe-0-3-0">
                    <div className="actionstripe-6_3">Actions</div>
                    <div className="actionstripe-0-3-0-1">
                        <div className="actionstripe-0-3-0-1-0">
                            <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/1189626697433493-1521598431548-BE994BB7-8144-4B36-B2A7-410CF5B9A3CC.png" className="actionstripe-fill_1" /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="actionstripe-path-18">
                <div className="actionstripe-0-4-0">
                    <div className="actionstripe-6_20">
                        Create ResourceType
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}