import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_table_default_empty_header-column_sortable-omit.css';

function render() {
    return <div className="awsui_table_default_empty_header-column_sortable-omit-awsui_table_default_empty_header-column_sortable-omit-1">
        <div className="awsui_table_default_empty_header-column_sortable-omit-0">
            <div className="awsui_table_default_empty_header-column_sortable-omit-0-0">
                <div className="awsui_table_default_empty_header-column_sortable-omit-0-0-0">
                    <div className="awsui_table_default_empty_header-column_sortable-omit-line-9" /> 
                </div>
            </div>
            <div className="awsui_table_default_empty_header-column_sortable-omit-unsel-value-9">
                value
            </div>
            <div className="awsui_table_default_empty_header-column_sortable-omit-sort-4">
                <Awsui_icons_actions_default /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}