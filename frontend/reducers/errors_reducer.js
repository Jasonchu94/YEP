import { combineReducers } from "redux";
import reviewErrorsReducer from "./reviews_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    reviews: reviewErrorsReducer 
})

export default errorsReducer;