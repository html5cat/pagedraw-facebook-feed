import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_table_default_empty_header-column_selected-omit.css';

function render() {
    return <div className="awsui_table_default_empty_header-column_selected-omit-awsui_table_default_empty_header-column_selected-omit-8">
        <div className="awsui_table_default_empty_header-column_selected-omit-0">
            <div className="awsui_table_default_empty_header-column_selected-omit-0-0">
                <div className="awsui_table_default_empty_header-column_selected-omit-0-0-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/1258583098097894-1521598430092-D748D724-B757-46F3-9929-A73AC8EFB6E3.png" className="awsui_table_default_empty_header-column_selected-omit-line-1" /> 
                </div>
            </div>
            <div className="awsui_table_default_empty_header-column_selected-omit-unsel-value-1">
                value
            </div>
            <div className="awsui_table_default_empty_header-column_selected-omit-sorted-7">
                <Awsui_icons_actions_default /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}