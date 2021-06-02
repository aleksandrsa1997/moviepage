import ActionTypes from './actionTypes';
import { TDiscoverPayload, IMovieResponse } from './types';

export const sortBy = (payload: string) => ({ type: ActionTypes.SORT_BY, payload});
export const getLanguages = () => ({ type: ActionTypes.GET_LANGUAGES });
export const getMovieInfoById = (payload: string)=> ({ type: ActionTypes.GET_MOVIE_INFO_BY_ID, payload });
export const setMovieInfoToStore = (payload: object) => ({ type: ActionTypes.SET_MOVIE_INFO_TO_STORE, payload});
export const setIdToStore = (payload: string) => ({ type: ActionTypes.SET_ID_TO_STORE, payload});
export const setFilterInfo = (payload: TDiscoverPayload) => ({ type: ActionTypes.SET_FILTER_INFO, payload });
export const sendFilterInfo = (payload: TDiscoverPayload) => ({ type: ActionTypes.SEND_FILTER_INFO, payload });
export const setMoviesStore = (payload: IMovieResponse) => ({ type: ActionTypes.SET_MOVIES_STORE, payload });
export const setSortByToStore = (payload: string) => ({ type: ActionTypes.SET_SORT_BY_TO_STORE, payload })
export const getSortedMovies = (payload: string) => ({ type: ActionTypes.GET_SORTED_MOVIES, payload });
export const searchMovieName = (payload: string) => ({ type: ActionTypes.SEARCH_MOVIE_NAME, payload });
export const getInitialState = () => ({ type: ActionTypes.GET_INITIAL_STATE });
export const getMoviesRequest = () => ({ type: ActionTypes.GET_MOVIES_REQUEST });
export const getDiscoverMovies = () => ({ type: ActionTypes.GET_DISCOVER_MOVIES });
export const setLanguagesToStore = (payload: Array<string>) => ({ type: ActionTypes.SET_LANGUAGES_TO_STORE, payload });
export const getNowPlayingMovies = () => ({ type: ActionTypes.GET_NOW_PLAYING_MOVIES });
export const setRiview = (payload: string) => ({ type: ActionTypes.SET_REVIEW, payload });
export const getReview = (payload: string) => ({ type: ActionTypes.GET_REVIEW, payload });

