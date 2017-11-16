import * as ActionTypes from '../constants';

const initialState = {
    isLoading: true,
    videos: [],
    currentSelectedVideo: {},
};

export default function youtubeReducer(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.FETCH_VIDEOS: 
            return {...state, isLoading: true};
        case ActionTypes.FETCH_VIDEOS_SUCCESS: 
            return {
                isLoading: false,
                videos: action.videos,
                currentSelectedVideo: action.videos[0]
            };
        case ActionTypes.FETCH_VIDEOS_ERROR: 
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case ActionTypes.CHANGE_CURRENT_PLAYING_VIDEO:
            return {
                videos: [...state.videos], 
                currentSelectedVideo: action.video
            };
        default:
            return state;
    }
}