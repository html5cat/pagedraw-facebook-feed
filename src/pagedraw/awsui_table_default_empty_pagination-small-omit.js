import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_table_default_empty_pagination-small-omit.css';

function render() {
    return <div className="awsui_table_default_empty_pagination-small-omit-awsui_table_default_empty_pagination-small-omit-3">
        <div className="awsui_table_default_empty_pagination-small-omit-0">
            <div className="awsui_table_default_empty_pagination-small-omit-awsui_icons_actions_default-1">
                <Awsui_icons_actions_default /> 
            </div>
            <div className="awsui_table_default_empty_pagination-small-omit-0-1">
                <div className="awsui_table_default_empty_pagination-small-omit-0-1-0">
                    <div className="awsui_table_default_empty_pagination-small-omit-1">
                        1
                    </div>
                </div>
            </div>
            <div className="awsui_table_default_empty_pagination-small-omit-awsui_icons_actions_default-16">
                <Awsui_icons_actions_default /> 
            </div>
            <div className="awsui_table_default_empty_pagination-small-omit-path-2" /> 
            <div className="awsui_table_default_empty_pagination-small-omit-icons_actions_default-4">
                <Awsui_icons_actions_default /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}