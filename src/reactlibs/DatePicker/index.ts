import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import DatePicker from './DatePicker';
import * as selectors from 'src/store/movie/selectors';
import * as actions from 'src/store/movie/action';
import { IMovies } from 'src/store/movie/reducer';
import { TDiscoverPayload } from 'src/store/movie/types';

const mapStateToProps = (state: IMovies) => ({
    movies: selectors.getMovies(state),
    firstDate: selectors.getFirstDate(state),
    secondDate: selectors.getSecondDate(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    sendFilterInfo: (payload: TDiscoverPayload) => dispatch(actions.sendFilterInfo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);