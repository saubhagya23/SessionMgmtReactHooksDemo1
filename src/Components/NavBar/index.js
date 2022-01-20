import React, { Component } from "react";
import { compose } from 'redux';
import { withRouter } from "../../Routes/withRouter";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";

import { logout } from "../../Actions/Auth";

class NavBar extends Component {
    onLogoutClick = () => {
        this.props.logout();
        this.props.navigate('/');
    }

    render() {
        return (
            <AppBar position="static" style={{ display: "flex" }}>
                <Toolbar>
                    <Typography variant="h6">My App</Typography>
                    <div style={{ marginLeft: "auto" }}>
                        {
                            this.props.isAuthUser ? (
                                <>
                                    <Link to="/home">
                                    <Button color="inherit">Home</Button>
                                    </Link>
                                    <Link to="/my-account">
                                    <Button color="inherit">My Account</Button>
                                    </Link>
                                    <Button color="inherit" onClick={() => this.onLogoutClick()}>
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <Link to="/login">
                                    <Button color="inherit">Login</Button>
                                </Link>
                            )
                        }
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        isAuthUser: state.appAuthentication.isAuthUser
    }
};

const mapDispatchToProps = { logout };

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(NavBar);