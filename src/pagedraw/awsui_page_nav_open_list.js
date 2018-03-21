import React from 'react';
import './awsui_page_nav_open_list.css';

function render() {
    return <div className="awsui_page_nav_open_list-awsui_page_nav_open_list-1">
        <div className="awsui_page_nav_open_list-0">
            <div className="awsui_page_nav_open_list-dashboard-1">
                Dashboard
            </div>
        </div>
        <div className="awsui_page_nav_open_list-1">
            <div className="awsui_page_nav_open_list-item_1">
                item 1
            </div>
        </div>
        <div className="awsui_page_nav_open_list-2">
            <div className="awsui_page_nav_open_list-item_2">
                item 2
            </div>
        </div>
        <div className="awsui_page_nav_open_list-3">
            <div className="awsui_page_nav_open_list-item_3">
                item 3
            </div>
        </div>
        <div className="awsui_page_nav_open_list-4">
            <div className="awsui_page_nav_open_list-item_4">
                item 4
            </div>
        </div>
        <div className="awsui_page_nav_open_list-5">
            <div className="awsui_page_nav_open_list-item_5">
                item 5
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}