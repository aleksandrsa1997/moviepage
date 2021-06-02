import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SortBy from './SortBy';
import * as actions from 'src/store/movie/action';
import { IMovies } from 'src/store/movie/reducer';
import { TDiscoverPayload } from 'src/store/movie/types';

// @ts-ignore
const mapStateToProps = (state: IMovies) => ({

})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    sendFilterInfo: (payload: TDiscoverPayload) => dispatch(actions.sendFilterInfo(payload)),
    setSortByToStore: (payload: string) => dispatch(actions.setSortByToStore(payload)),
});

export default connect(mapStateToProps,mapDispatchToProps)(SortBy);