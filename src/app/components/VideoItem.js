import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <li onClick={() => onVideoSelect( video )} className="video-item media row align-items-center pt-2 pb-2" style={{ borderBottom: '1px', borderBottomColor:'#eaeaea', borderBottomStyle: 'solid'}}>
            <img className="d-flex align-self-center mr-3 ml-3"  src={ video.snippet.thumbnails.default.url } alt=""/>
            <div className="media-body">
                <h5 className="mt-0">{ video.snippet.title }</h5>
                <p  style={{ lineHeight: 1.2, fontSize: '14px' }}>{ video.snippet.description }</p>
            </div>
        </li>
    )
};

export default VideoItem