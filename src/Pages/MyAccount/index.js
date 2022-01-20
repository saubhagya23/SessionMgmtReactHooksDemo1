import { connect } from 'react-redux';
import { Typography, Divider } from "@material-ui/core";

const MyAccount = props => (
    <>
        <Typography variant="h3">Welcome to the My Account</Typography>
        <Divider style={{ marginTop: 10, marginBottom: 10 }} />
        <Typography variant="h6">Feel free to take a look around</Typography>
    </>
);

const mapStateToProps = (state) => {
    return{
        isAuthUser: state.appAuthentication.isAuthUser
    }
};

export default connect(mapStateToProps)(MyAccount);