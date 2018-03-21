import Awsui_table_default_empty_pagination-small-omit from './awsui_table_default_empty_pagination-small-omit';
import Awsui_table_default_empty_pagination-omit from './awsui_table_default_empty_pagination-omit';
import React from 'react';
import './resource-pagination.css';

function render() {
    return <div className="resource-pagination-resource-pagination-7">
        <div className="resource-pagination-0">
            <div className="resource-pagination-awsui_table_default_empty_pagination-small-omit-1">
                <Awsui_table_default_empty_pagination-small-omit /> 
            </div>
        </div>
        <div className="resource-pagination-1">
            <div className="resource-pagination-table_default_empty_pagination-1">
                <Awsui_table_default_empty_pagination-omit /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}