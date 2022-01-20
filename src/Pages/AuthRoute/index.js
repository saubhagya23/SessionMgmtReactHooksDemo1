import React from 'react';
import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router';

// HOC created to monitor routes and navigate accordingly.
const AuthRoute = props => {
    const { isAuthUser, type } = props;
    if(type === 'guest' && isAuthUser)
        return <Navigate exact to='/home' />
    else if(type === "private" && !isAuthUser)
        return <Navigate exact to='/' />
    return <Outlet {...props} />;
}

const mapStateToProps = (state) => {
    return{
        isAuthUser: state.appAuthentication.isAuthUser
    }
};

export default connect(mapStateToProps)(AuthRoute);