import { connect } from "react-redux";
import React from 'react';
import { Link } from "react-router-dom";
import { receiveErrors, signup,login} from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/login">Log in</Link>
})

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    demoLogin: user => dispatch(login(user))
})

export default connect(mSTP,mDTP)(SessionForm)
