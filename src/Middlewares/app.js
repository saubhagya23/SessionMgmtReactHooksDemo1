import { ActionTypes } from '../Utils/constants';
import { apiRequest } from '../Actions/API';

const SERVER_URL = `http://localhost:8080`; // `https://61m46.sse.codesandbox.io`;

// middleware created to handle login api request.
const appMiddleware = () => next => action => {
    next(action);

    switch(action.type) {
        case ActionTypes.LOGIN: {
            next(
                apiRequest({
                    url: `${SERVER_URL}/login`,
                    method: "POST",
                    data: action.payload
                })
            );
            break;
        }

        default:
            break;
    }
}

export default appMiddleware;