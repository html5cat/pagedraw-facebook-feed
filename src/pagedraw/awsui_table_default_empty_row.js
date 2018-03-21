import Awsui_table_default_empty_row_unselected-omit from './awsui_table_default_empty_row_unselected-omit';
import React from 'react';
import './awsui_table_default_empty_row.css';

function render() {
    return <div className="awsui_table_default_empty_row-awsui_table_default_empty_row-1">
        <div className="awsui_table_default_empty_row-0">
            <div className="awsui_table_default_empty_row-table_default_empty_row_unselected-1">
                <Awsui_table_default_empty_row_unselected-omit /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}