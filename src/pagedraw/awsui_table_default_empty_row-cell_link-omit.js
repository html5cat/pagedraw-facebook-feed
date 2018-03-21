import React from 'react';
import './awsui_table_default_empty_row-cell_link-omit.css';

function render() {
    return <div className="awsui_table_default_empty_row-cell_link-omit-awsui_table_default_empty_row-cell_link-omit-1">
        <div className="awsui_table_default_empty_row-cell_link-omit-0">
            <div className="awsui_table_default_empty_row-cell_link-omit-row-name-1">
                row-name
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}