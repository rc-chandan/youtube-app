import React from 'react';

const VideoPlayer = props => {
    const url = `https://www.youtube.com/embed/${props.video.id}`;
    return (
        <div>
        <iframe title="Video Player" src={url} allowFullScreen></iframe>
        </div>
    );
};

export default VideoPlayer;