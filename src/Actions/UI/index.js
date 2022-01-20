import { ActionTypes } from '../../Utils/constants'

export const setLoader = payload => {
    return {
      type: ActionTypes.SET_LOADER,
      payload
    };
};
