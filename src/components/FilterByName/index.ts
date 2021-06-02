import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import FilterByName from './FilterByName';
import { IMovies } from 'src/store/movie/reducer';
import { sortedMoviesSelector } from 'src/store/movie/selectors';
import * as actions from 'src/store/movie/action';

const mapStateToProps = (state: IMovies) => ({
    sortedMovies: sortedMoviesSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    searchMovieName: (payload: string) => dispatch(actions.searchMovieName(payload))
});

export default connect(mapStateToProps,mapDispatchToProps)(FilterByName);