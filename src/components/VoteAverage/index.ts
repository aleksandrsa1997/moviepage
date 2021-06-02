import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import VoteAverage from './VoteAverage';
import * as actions from 'src/store/movie/action';
import { IMovies } from 'src/store/movie/reducer';
import * as selectors from 'src/store/movie/selectors';
import { TDiscoverPayload } from 'src/store/movie/types';

const mapStateToProps = (state: IMovies) => ({
    voteAverage: selectors.getVoteAverageNumber(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    sendFilterInfo: (payload: TDiscoverPayload) => dispatch(actions.sendFilterInfo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VoteAverage);