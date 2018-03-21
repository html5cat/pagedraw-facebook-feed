import Awsui_page_nav_open_list from './awsui_page_nav_open_list';
import Awsui_page_nav_open_section from './awsui_page_nav_open_section';
import React from 'react';
import './awsui_page_nav_open-omit.css';

function render() {
    return <div className="awsui_page_nav_open-omit-awsui_page_nav_open-omit-6">
        <div className="awsui_page_nav_open-omit-0">
            <div className="awsui_page_nav_open-omit-path-1">
                <div className="awsui_page_nav_open-omit-0-0-0">
                    <div className="awsui_page_nav_open-omit-0-0-0-0">
                        <div className="awsui_page_nav_open-omit-0-0-0-0-0">
                            <div className="awsui_page_nav_open-omit-0-0-0-0-0-0">
                                <div className="awsui_page_nav_open-omit-console_name-8">
                                    Console name
                                </div>
                                <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/2279402800574915-1521598430087-F80E4B5C-5346-417A-90BB-BD12FB58CA0E.png" className="awsui_page_nav_open-omit-icon_close-2" /> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="awsui_page_nav_open-omit-0-0-1">
                    <div className="awsui_page_nav_open-omit-page_nav_open_list-1">
                        <Awsui_page_nav_open_list /> 
                    </div>
                </div>
                <div className="awsui_page_nav_open-omit-0-0-2">
                    <div className="awsui_page_nav_open-omit-page_nav_open_section-1">
                        <Awsui_page_nav_open_section /> 
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}