import Awsui_icons_actions_default from './awsui_icons_actions_default';
import React from 'react';
import './awsui_table_default_empty_row-cell_icon-text-omit.css';

function render() {
    return <div className="awsui_table_default_empty_row-cell_icon-text-omit-awsui_table_default_empty_row-cell_icon-text-omit-8">
        <div className="awsui_table_default_empty_row-cell_icon-text-omit-0">
            <div className="awsui_table_default_empty_row-cell_icon-text-omit-icons_actions_default-3">
                <Awsui_icons_actions_default /> 
            </div>
            <div className="awsui_table_default_empty_row-cell_icon-text-omit-cell-value-1">
                cell-value
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}