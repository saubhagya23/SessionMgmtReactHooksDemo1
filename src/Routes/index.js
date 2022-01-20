import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from "react-redux";
import NavBar from "../Components/NavBar";
import AuthRoute from '../Pages/AuthRoute';
import LoginPage from '../Pages/Login';
import IndexPage from '../Pages/IndexPage';
import HomePage from '../Pages/HomePage';
import MyAccount from '../Pages/MyAccount';

const AppRoutes = (props) => {
    return (
        <Router>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path="/home" element={<AuthRoute />} type="private">
                        <Route path="/home" element={<HomePage />} type="private" />
                    </Route>
                    <Route path="/login" element={<AuthRoute />} type="guest">
                        <Route path="/login" element={<LoginPage />} type="guest" />
                    </Route>
                    <Route path="/my-account" element={<AuthRoute />} type="private">
                        <Route path="/my-account" element={<MyAccount />} type="private" />
                    </Route>
                    {/* <AuthRoute path="/home" render={HomePage} type="private" />
                    <AuthRoute path="/login" type="guest">
                        <LoginPage />
                    </AuthRoute>
                    <AuthRoute path="/my-account" type="private">
                        <MyAccount />
                    </AuthRoute> */}
                    <Route path="/" render={IndexPage} />
                </Routes>
            </div>
        </Router>
    );
}

const mapStateToProps = ({ isAuthUser }) => ({ isAuthUser });

export default connect(mapStateToProps)(AppRoutes);