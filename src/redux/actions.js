


import {GET_INITIAL_DATA, UPDATE_BUDGET} from "./types";
import data from '../../data/default.json';

export const getInitialData = () => {
    return {
        type: GET_INITIAL_DATA,
        payload: data
    };
};

export const updateBudget = (budgetState) => {
    return {
        type: UPDATE_BUDGET,
        payload: budgetState
    };
};