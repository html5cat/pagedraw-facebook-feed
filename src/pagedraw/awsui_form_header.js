import React from 'react';
import './awsui_form_header.css';

function render() {
    return <div className="awsui_form_header-awsui_form_header-1">
        <div className="awsui_form_header-0">
            <div className="awsui_form_header-specify_db_details-6">
                Specify DB details
            </div>
            <div className="awsui_form_header-0-1">
                <div className="awsui_form_header-0-1-0">
                    <div className="awsui_form_header-info-1">info</div>
                </div>
            </div>
        </div>
        <div className="awsui_form_header-1">
            <div className="awsui_form_header-license_type_associa-4">
                License type associated with the database engine
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}