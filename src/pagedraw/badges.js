import React from 'react';
import './badges.css';

function render() {
    return <div className="badges-badges-1">
        <div className="badges-0">
            <div className="badges-path-8">
                <div className="badges-0-0-0">
                    <div className="badges-2_">value-here</div>
                </div>
            </div>
        </div>
        <div className="badges-1">
            <div className="badges-path-1">
                <div className="badges-1-0-0">
                    <div className="badges-2_9">value-here</div>
                </div>
            </div>
        </div>
        <div className="badges-2">
            <div className="badges-path-15">
                <div className="badges-2-0-0">
                    <div className="badges-2_9_">value-here</div>
                </div>
            </div>
        </div>
        <div className="badges-3">
            <div className="badges-path-3">
                <div className="badges-3-0-0">
                    <div className="badges-2_9_3">value-here</div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}