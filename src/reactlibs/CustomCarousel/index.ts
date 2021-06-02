import CustomCarousel from './CustomCarousel';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as selectors from 'src/store/movie/selectors';
import { IMovies } from 'src/store/movie/reducer';
import * as actions from 'src/store/movie/action';

const mapStateToProps = (state: IMovies) => ({
    movies: selectors.getMovies(state),
    sortedMovies: selectors.sortedMoviesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getMovieInfoById: (payload: string) => dispatch(actions.getMovieInfoById(payload)),
    setIdToStore: (payload: string) => dispatch(actions.setIdToStore(payload)),
});
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(CustomCarousel);