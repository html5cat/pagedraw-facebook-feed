import React from 'react';
import './awsui_table_default_empty_row-cell_text-omit.css';

function render() {
    return <div className="awsui_table_default_empty_row-cell_text-omit-awsui_table_default_empty_row-cell_text-omit-1">
        <div className="awsui_table_default_empty_row-cell_text-omit-0">
            <div className="awsui_table_default_empty_row-cell_text-omit-cell-value-3">
                cell-value
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}