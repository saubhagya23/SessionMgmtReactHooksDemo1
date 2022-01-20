import React, { useEffect, useState } from "react";
import { compose } from 'redux';
import { withRouter } from '../../Routes/withRouter';
import { TextField, Typography, Button } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { login } from "../../Actions/Auth";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = props => {
    const loginProps = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitForm = () => {
        if (email === "" || password === "") {
        setError("Fields are required");
        return;
        }
        props.login({ email, password });
    };

    useEffect(() => {
        if(loginProps.isAuthUser) {
            loginProps.navigate('/home');
        }
    }, [loginProps]);

    return (
        <>
            <form>
                <Typography variant="h5" style={{ marginBottom: 8 }}>
                    Login
                </Typography>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    className="form-input"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    className="form-input"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="form-input"
                    size="large"
                    onClick={submitForm}
                >
                    Login
                </Button>
                {error && (
                    <Alert severity="error" onClick={() => setError(null)}>
                        {props.error || error}
                    </Alert>
                )}
            </form>
        </>
    );
}

const mapStateToProps = (state) => {
    return{
        isLoading: state.appAuthentication.isLoading,
        isAuthUser: state.appAuthentication.isAuthUser
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, { login })
)(Login);