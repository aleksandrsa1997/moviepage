import { put, select, takeLatest, call } from 'redux-saga/effects';
import { urls } from 'src/constants/url';
import ActionTypes from './actionTypes';
import * as actions from './action';
import { requestData } from 'src/api';
import  { getFilters } from 'src/store/movie/selectors';
// @ts-ignore
import { Console } from 'node:console';

export function* watchMovies(): Generator {
    yield takeLatest(ActionTypes.GET_MOVIES_REQUEST, getMoviesRequest),
    yield takeLatest(ActionTypes.SEND_FILTER_INFO, setFilterInfo),
    yield takeLatest(ActionTypes.GET_DISCOVER_MOVIES, getDiscoverMovies),
    yield takeLatest(ActionTypes.GET_LANGUAGES, getLanguages),
    yield takeLatest(ActionTypes.GET_NOW_PLAYING_MOVIES, getNowPlayingMovies),
    yield takeLatest(ActionTypes.GET_MOVIE_INFO_BY_ID, getMovieInfoById)
}

function* getMoviesRequest(){
    try {
        const { results } = yield requestData(urls.MOVIE_POPULAR);
        yield put(actions.setMoviesStore(results));
    } catch (err) {
        yield put(actions.getInitialState());
    }
}

function* setFilterInfo(action: ReturnType<typeof actions.setFilterInfo>){
    try {
        yield put(actions.setFilterInfo(action.payload));
        yield put(actions.getDiscoverMovies())
    } catch (err) {
        yield put(actions.getInitialState());
    }
}

function* getMovieInfoById(action: ReturnType<typeof actions.getMovieInfoById>){
    try {
        const data = yield requestData(`movie/${action.payload}`);
        yield put(actions.setMovieInfoToStore(data));
         const { results }  = yield requestData(`movie/${action.payload}/reviews`);
        yield put(actions.setRiview(results))
    } catch (err) {
        yield put(actions.getInitialState());
    }
}

function* getDiscoverMovies(){
    try {
        const filters = yield select(getFilters) as any;
        const { results } = yield call(requestData, urls.DISCOVER_MOVIE, filters);
         yield put(actions.setMoviesStore(results));
    } catch (err) {
        yield put(actions.getInitialState());
    }
}

function* getLanguages(){
    try {
        const results  = yield requestData(urls.PRIMARY_TRANSLATIONS);
        yield put(actions.setLanguagesToStore(results));
    } catch (err) {
        yield put(actions.getInitialState());
    }
}

function* getNowPlayingMovies() {
    try {
        const { results } = yield requestData(urls.MOVIE_NOW_PLAYING);
        yield put(actions.setMoviesStore(results));
    } catch (err) {
        yield put(actions.getInitialState());
    }
}


