import React from 'react';
import './awsui_form_section-expanded.css';

function render() {
    return <div className="awsui_form_section-expanded-awsui_form_section-expanded-1">
        <div className="awsui_form_section-expanded-0">
            <div className="awsui_form_section-expanded-0-0">
                <div className="awsui_form_section-expanded-0-0-0">
                    <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/3385038522820884-1521598430060-6B562552-E4E5-4E04-AD77-3A6B184D0D60.png" className="awsui_form_section-expanded-fill_1" /> 
                </div>
            </div>
            <div className="awsui_form_section-expanded-section_name-1">
                Section name
            </div>
        </div>
        <div className="awsui_form_section-expanded-1">
            <img src="https://pagedraw-images.s3-us-west-1.amazonaws.com/1509600663140596-1521598430057-3C774468-D090-4DF1-B0BF-C9D373A684F6.png" className="awsui_form_section-expanded-section-borderline-1" /> 
        </div>
        <div className="awsui_form_section-expanded-2">
            <div className="awsui_form_section-expanded-section_text_-_in_ad-1">
                {"Section text - In addition, something something something something at a lower cost."}
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}