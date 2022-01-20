import axios from 'axios';
import { ActionTypes } from '../Utils/constants';
import { apiError, apiSuccess } from '../Actions/API';
import { setLoader } from "../Actions/UI";

// middleware created to handle login api request with axios.
const apiMiddleware = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === ActionTypes.API_REQUEST) {
        dispatch(setLoader(true));

        const { url, method, data } = action.payload;
        axios({
            method,
            url,
            data
        })
            .then(({ data }) => {
                dispatch(apiSuccess({ response: data }));
            })
            .catch(error => {
                dispatch(apiError({ error: error.response.data }));
            });
    }
}

export default apiMiddleware;