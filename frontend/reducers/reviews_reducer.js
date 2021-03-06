import {
    RECEIVE_REVIEWS, RECEIVE_REVIEW, DELETE_REVIEW, CLEAR_ERRORS_REVIEW
} from '../actions/review_actions'

const reviewsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch(action.type){
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review;
            return nextState;
        case DELETE_REVIEW:
            delete nextState[action.reviewId]
            return nextState;
        case CLEAR_ERRORS_REVIEW:
            return [];
        default:
            return oldState;
    }
};
export default reviewsReducer;