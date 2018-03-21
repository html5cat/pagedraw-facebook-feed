import React from 'react';
import './ic_settings_black_24px.css';

function render() {
    return <div className="ic_settings_black_24px-ic_settings_black_2">
        <div className="ic_settings_black_24px-0">
            <div className="ic_settings_black_24px-ellipse_5" /> 
            <div className="ic_settings_black_24px-ellipse_5-0" /> 
            <div className="ic_settings_black_24px-ellipse_5-00" /> 
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}