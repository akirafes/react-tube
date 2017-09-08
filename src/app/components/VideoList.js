import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    if(videos.length === 0) {
        return (
            <div className="video-list col-3">
                <div className="animationload">
                    <div className="osahanloading" />
                </div>
            </div>
        )
    }

    const renderVideo = () => {
        return videos.map( video => {
                return (
                   <VideoItem onVideoSelect={onVideoSelect} video={ video } key={video.etag}/>
                )
            });
    };

    return (
        <ul className="video-list col-3 list-unstyled">
            { renderVideo() }
        </ul>
    )
};

export default  VideoList;