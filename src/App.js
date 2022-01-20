// import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './Store';
import './App.css';
import AppRoutes from './Routes';
// import Login from './Pages/Login';


function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
