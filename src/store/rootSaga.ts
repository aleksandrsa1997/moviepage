import { all } from 'redux-saga/effects';
import { watchMovies } from './movie/saga';

export function* rootSaga() {
    yield all([
        watchMovies(),
    ]);
};