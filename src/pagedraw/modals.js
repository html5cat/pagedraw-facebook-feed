import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './modals.css';

function render() {
    return <div className="modals-modals-1">
        <div className="modals-0">
            <div className="modals-path-159">
                <div className="modals-0-0-0">
                    <div className="modals-0-0-0-0">
                        <div className="modals-path-136">
                            <div className="modals-0-0-0-0-0-0">
                                <div className="modals-body-text-3">
                                    Amazon RDS makes it easy to control network access to your database and lets you run
                                </div>
                            </div>
                            <div className="modals-0-0-0-0-0-1">
                                <div className="modals-path-11">
                                    <div className="modals-0-0-0-0-0-1-0-0">
                                        <div className="modals-path-1" /> 
                                    </div>
                                    <div className="modals-0-0-0-0-0-1-0-1">
                                        <div className="modals-path-2">
                                            <div className="modals-0-0-0-0-0-1-0-1-0-0">
                                                <div className="modals-6">Cancel</div>
                                            </div>
                                        </div>
                                        <div className="modals-path-13">
                                            <div className="modals-0-0-0-0-0-1-0-1-1-0">
                                                <div className="modals-6_">Restart</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modals-path-17">
                            <div className="modals-0-0-0-0-1-0">
                                <div className="modals-title-4">Modal title</div>
                                <div className="modals-close-8">
                                    <Awsui_icons_actions_default /> 
                                </div>
                            </div>
                            <div className="modals-0-0-0-0-1-1">
                                <div className="modals-subtext-1">
                                    Sometimes there is subcontext here
                                </div>
                            </div>
                            <div className="modals-0-0-0-0-1-2">
                                <div className="modals-path-6" /> 
                            </div>
                        </div>
                        <div className="modals-path-14" /> 
                        <div className="modals-path-16" /> 
                        <div className="modals-path-15" /> 
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}