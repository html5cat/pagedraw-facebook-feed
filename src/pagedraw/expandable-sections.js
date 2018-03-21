import React from 'react';
import './expandable-sections.css';

function render() {
    return <div className="expandable-sections-expandable-sections-4">
        <div className="expandable-sections-0">
            <div className="expandable-sections-section-rectangle-7">
                <div className="expandable-sections-0-0-0">
                    <div className="expandable-sections-0-0-0-0">
                        <div className="expandable-sections-0-0-0-0-0">
                            <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/4842196289475254-1521598431537-AED787CF-C9C0-4700-8984-0122A6CE7162.png" className="expandable-sections-down-arrow-4" /> 
                        </div>
                    </div>
                    <div className="expandable-sections-section_name-7">
                        Section name
                    </div>
                </div>
            </div>
        </div>
        <div className="expandable-sections-1">
            <div className="expandable-sections-1-0">
                <div className="expandable-sections-1-0-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/1519216232396308-1521598430756-765DF8B5-4228-4733-B804-905F246B32FE.png" className="expandable-sections-down-arrow-1" /> 
                </div>
            </div>
            <div className="expandable-sections-section_name-hovered-1">
                Section name-hovered
            </div>
        </div>
        <div className="expandable-sections-2">
            <div className="expandable-sections-2-0">
                <div className="expandable-sections-2-0-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/1734167973849422-1521598431539-88184AB9-8781-49DE-826D-D5B6C3B1F1C6.png" className="expandable-sections-fill_1" /> 
                </div>
            </div>
            <div className="expandable-sections-section_name-1">
                Section name
            </div>
        </div>
        <div className="expandable-sections-3">
            <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/5721137913794954-1521598431538-82556F2F-2180-4328-B578-A625CD509E58.png" className="expandable-sections-section-borderline-5" /> 
        </div>
        <div className="expandable-sections-4">
            <div className="expandable-sections-section_text_-_in_ad-8">
                {"Section text - In addition, something something something something at a lower cost."}
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}