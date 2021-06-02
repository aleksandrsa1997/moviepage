import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as selectors from 'src/store/movie/selectors'
import * as actions from 'src/store/movie/action';
import ReviewCard from "./ReviewCard";

const mapStateToProps = (state: any) => ({
    review : selectors.getReviewSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
getReview: (payload: string) => dispatch(actions.getReview(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCard);