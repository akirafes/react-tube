import React from 'react';
import {render} from 'react-dom';
import youtubeSearch from './libs/youtubeSearch';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

import style from './style/app.scss';


const API_KEY = 'AIzaSyDif37sb8_MppC5Lk2uMhsZ_pC8y8jU9HQ';



class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo : null,
            term: 'cars'
        };

        this.videoSearch('cars');

    }

    videoSearch(term) {
        youtubeSearch({ key: API_KEY, term: term, maxResults: 7},
            videos => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            }
        );
    }


    render () {
        return(
        <div className="container-fluid">
            <div className="search row justify-content-center  mb-4 pt-4 pb-4" >
                <div className="col-6"  >
                    <SearchBar term={this.state.term} goSearch={ term => this.videoSearch(term)} />
                </div>
            </div>
            <div className="row">
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo})} videos={ this.state.videos }/>
            </div>
        </div>
        )
    }
}

render(<App/>, document.getElementById('app'));