


import {GET_INITIAL_DATA, UPDATE_BUDGET} from "../types";


const DEFAULT_STATE = {"salary": 62000};
const DEFAULT_ACTION = { };

export default (state= DEFAULT_STATE, action = DEFAULT_ACTION) => {
    switch (action.type) {
        case GET_INITIAL_DATA:
            return action.payload;
        case UPDATE_BUDGET:
            return action.payload;
        default:
            return state;
    }

};