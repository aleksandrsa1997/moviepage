import { END } from '@redux-saga/core';
import MainPage from 'src/components/MainPage';
import { wrapper } from 'src/store';
import { getMoviesRequest, getLanguages } from 'src/store/movie/action';

const IndexPage = () => <MainPage/>

export const getServerSideProps= wrapper.getServerSideProps(async ({ store }) => {
    await store.dispatch(getMoviesRequest())
    await store.dispatch(getLanguages())
    store.dispatch(END);
    // @ts-ignore
    await store.sagaTask.toPromise()
});

export default IndexPage;