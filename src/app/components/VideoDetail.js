import React from 'react';

const VideoDetail = ({ video }) => {

    if(!video) {
        return (
            <div className="video-detail col-9">
                <div className="animationload">
                    <div className="osahanloading" />
                </div>
            </div>
        )
    }

    const url = `http://www.youtube.com/embed/${video.id.videoId}` ;

    return(
        <div className="video-detail col-md-9 border-left-0 border-top-0 border-bottom-0">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={ url } />
            </div>
            <div className="details mt-4">
                <h3> {video.snippet.title} </h3>
                <div> {video.snippet.description} </div>
            </div>
        </div>
    )
};

export default VideoDetail