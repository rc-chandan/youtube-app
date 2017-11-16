import * as constants from '../constants';
import API from 'simple-youtube-api';

const client = new API(constants.API_KEY);

export function fetchVideos(searchText) {
   return (dispatch) => {
       client.searchVideos(searchText, 5)
        .then(videos => {
            console.log(videos);
            dispatch(fetchVideosSuccess(videos));
        })
        .catch(error => {
            console.error(error);
            dispatch(fetchVideosError(error.message));
        });
   }
}

export function fetchVideosSuccess(videos) {
    return { type: constants.FETCH_VIDEOS_SUCCESS, videos };
}

export function fetchVideosError(error) {
    return { type: constants.FETCH_VIDEOS_ERROR, error };
}

export function changeCurrentPlayingVideo(video) {
    return { type: constants.CHANGE_CURRENT_PLAYING_VIDEO, video};
}