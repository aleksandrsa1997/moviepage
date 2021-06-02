import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IMovies } from 'src/store/movie/reducer';
import * as actions from 'src/store/movie/action';
import * as selectors from 'src/store/movie/selectors';
import LanguageDropDown from './LanguageDropDown';
import { TDiscoverPayload } from 'src/store/movie/types';

const mapStateToProps = (state: IMovies) => ({
    languages: selectors.getLanguagesSelector(state),
    currentLanguage: selectors.getCurrentLanguage(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    sendFilterInfo: (payload: TDiscoverPayload) => dispatch(actions.sendFilterInfo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageDropDown);