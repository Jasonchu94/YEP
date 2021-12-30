import { connect } from "react-redux";
import React from 'react';
import { Link } from "react-router-dom";
import { signup} from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/login">Already have an account?</Link>
})

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
})

export default connect(mSTP,mDTP)(SessionForm)
