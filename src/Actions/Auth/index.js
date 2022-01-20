import { ActionTypes } from '../../Utils/constants'

export const login = user => {
    return {
      type: ActionTypes.LOGIN,
      payload: user
    };
};

export const logout = () => {
    return {
      type: ActionTypes.LOGOUT
    };
};