import React from 'react';

const VideoListItem = props => (
    <div onClick={props.onClick.bind(null, props.video)}>
        {props.video.title}
    </div>
);

export default VideoListItem;