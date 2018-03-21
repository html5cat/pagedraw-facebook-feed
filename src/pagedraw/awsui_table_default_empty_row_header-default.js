import Awsui_table_selection from './awsui_table_selection';
import Awsui_table_default_empty_header-column-omit from './awsui_table_default_empty_header-column-omit';
import React from 'react';
import './awsui_table_default_empty_row_header-default.css';

function render() {
    return <div className="awsui_table_default_empty_row_header-default-awsui_table_default_empty_row_header-default-6">
        <div className="awsui_table_default_empty_row_header-default-0">
            <div className="awsui_table_default_empty_row_header-default-path-1">
                <div className="awsui_table_default_empty_row_header-default-0-0-0">
                    <div className="awsui_table_default_empty_row_header-default-path-2" /> 
                </div>
                <div className="awsui_table_default_empty_row_header-default-0-0-1">
                    <div className="awsui_table_default_empty_row_header-default-0-r">
                        <Awsui_table_selection /> 
                    </div>
                    <div className="awsui_table_default_empty_row_header-default-1">
                        <Awsui_table_default_empty_header-column-omit /> 
                    </div>
                    <div className="awsui_table_default_empty_row_header-default-2">
                        <Awsui_table_default_empty_header-column-omit /> 
                    </div>
                    <div className="awsui_table_default_empty_row_header-default-3">
                        <Awsui_table_default_empty_header-column-omit /> 
                    </div>
                    <div className="awsui_table_default_empty_row_header-default-4">
                        <Awsui_table_default_empty_header-column-omit /> 
                    </div>
                    <div className="awsui_table_default_empty_row_header-default-5">
                        <Awsui_table_default_empty_header-column-omit /> 
                    </div>
                    <div className="awsui_table_default_empty_row_header-default-6">
                        <Awsui_table_default_empty_header-column-omit /> 
                    </div>
                    <div className="awsui_table_default_empty_row_header-default-7">
                        <Awsui_table_default_empty_header-column-omit /> 
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}