import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import NowPlayButton from './NowPlayButton';
import * as actions from 'src/store/movie/action'

const mapDispatchToProps = (dispatch: Dispatch ) => ({
    getNowPlayingMovies: () => dispatch(actions.getNowPlayingMovies())
});
export default connect(null, mapDispatchToProps)(NowPlayButton);