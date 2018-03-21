import React from 'react';
import './home.css';

function render() {
    return <div className="home-home-0">
        <div className="home-0">
            <div className="home-navigation_bar-0">
                <div className="home-0-0-0">
                    <div className="home-the_art_museum-0">
                        <div>THE </div>
                        <div>ART</div>
                        <div>MUSEUM</div>
                    </div>
                    <div className="home-0-0-0-1">
                        <div className="home-0-0-0-1-0">
                            <div className="home-bounds-0">
                                <div className="home-0-0-0-1-0-0-0">
                                    <div className="home-path-0" /> 
                                </div>
                                <div className="home-0-0-0-1-0-0-1">
                                    <div className="home-path-00" /> 
                                </div>
                                <div className="home-0-0-0-1-0-0-2">
                                    <div className="home-path-000" /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-1">
            <div className="home-image-0">
                <div className="home-1-0-0">
                    <div className="home-image_thumbnail-0" /> 
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}