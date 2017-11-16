import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = props => (
    <div>
        {props.videos.map(video => <VideoListItem key={video.id} video={video} onClick={props.onItemClick} />)}
    </div>
);

export default VideoList;