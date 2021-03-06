// Generated by https://pagedraw.io/pages/8671
import Newsfeed_comment from './NewsfeedComment';
import React from 'react';
import './newsfeed_comments_list.css';

function render() {
    return <div className="newsfeed_comments_list-newsfeed_comments_list-4">
        <div className="newsfeed_comments_list-0">
            <div className="newsfeed_comments_list-0-0">
                { this.props.comments.map((comment, i) => {
                    return <div key={i} className="newsfeed_comments_list-rectangle_3">
                        <div className="newsfeed_comments_list-0-0-0-0-0">
                            <div className="newsfeed_comments_list-newsfeed_comment_instance-6">
                                <Newsfeed_comment comment={comment} /> 
                            </div>
                        </div>
                    </div>;
                }) }
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}