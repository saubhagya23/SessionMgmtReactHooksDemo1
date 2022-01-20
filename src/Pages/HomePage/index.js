import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from '../../Routes/withRouter';
import { Typography, Divider } from "@material-ui/core";
import { useEffect } from 'react';

const HomePage = props => {
    useEffect(() => {
        // console.log('props in home page->', props);
        if(props.isAuthUser) {
            // history.pushState(null, null, location.href);
            window.onpopstate = function(event) {
              props.navigate('/home', {replace: true});
            };
        }
    });
    return (
    <>
        <Typography variant="h3">Welcome to the App Home</Typography>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <Typography variant="h6">Feel free to take a look around</Typography>
    </>
)};

const mapStateToProps = (state) => {
    return{
        isAuthUser: state.appAuthentication.isAuthUser
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps)
)(HomePage);