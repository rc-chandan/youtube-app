import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBar from '../components/SearchBar';
import VideoPlayer from '../components/VideoPlayer';
import VideoList from '../components/VideoList';

import { fetchVideos, changeCurrentPlayingVideo } from '../actions';

class YoutubeApp extends Component {
  componentWillMount() {
    this.props.fetchVideos('MKBHD');
  }

  render() {
    return !this.props.isLoading && (
      <div>
        <SearchBar searchHandler={this.props.fetchVideos} />
        <VideoPlayer video={this.props.currentSelectedVideo} />
        <VideoList videos={this.props.videos} onItemClick={this.props.changeCurrentPlayingVideo} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    isLoading: state.isLoading,
    videos: state.videos,
    currentSelectedVideo: state.currentSelectedVideo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchVideos, 
    changeCurrentPlayingVideo
  },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeApp);
