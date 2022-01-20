import { ActionTypes } from '../../Utils/constants'

export const apiRequest = payload => {
    return {
        type: ActionTypes.API_REQUEST,
        payload
    };
};

export const apiSuccess = payload => {
    return {
        type: ActionTypes.API_SUCCESS,
        payload
    };
};

export const apiError = payload => {
    return {
        type: ActionTypes.API_ERROR,
        payload
    };
};