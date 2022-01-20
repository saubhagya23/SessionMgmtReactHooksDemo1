import { ActionTypes } from "../../Utils/constants";

const initialState = {
    isAuthUser: !!localStorage.getItem('user'),
    user: JSON.parse(localStorage.getItem('user')),
    isLoading: false,
    error: null
};

const appAuthentication = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.API_SUCCESS: {
            const userInfo = action.payload.response.user;
            localStorage.setItem('user', JSON.stringify(userInfo));
            return {
                ...state,
                isAuthUser: true,
                user: userInfo
            };
        }

        case ActionTypes.API_ERROR: {
            return {
                ...state,
                error: action.payload
            };
        }

        case ActionTypes.SET_LOADER: {
            return {
                ...state,
                isLoading: action.payload
            };
        }

        case ActionTypes.LOGOUT:
            localStorage.removeItem("user");
            return {
                ...state,
                isAuthUser: false,
                user: {}
            };
        
        default:
            return state;
    }
}

export default appAuthentication;