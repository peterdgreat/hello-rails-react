const url = 'http://localhost:3000/api/v1/greetings/index';
const MESSAGE_SUCESS = 'MESSAGE_SUCESS';

import axios from 'axios';

export const greetingSuccess = (payload) => {
    return {
        type: MESSAGE_SUCESS,
        payload
    }
    }
const initialState = [
 

]

    export const fetchGreeting = () => async (dispatch) => {
        try {
            const response = await axios.get(url);
            dispatch(greetingSuccess(response.data));
        } catch (error) {
            console.log(error);
        }
    }

    const reducerMessage = (state = initialState, action) => {
        switch (action.type) {
            case MESSAGE_SUCESS:
                return action.payload;
            default:
                return state;
        }
    }

    export default reducerMessage;
