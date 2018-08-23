import * as actionTypes from "./actionTypes";

export const startLoading = (data) => {

    return {
        type: actionTypes.LOADING_BAR_START,
        value: data
    }
};

export const stopLoading = (data) => {

    return {
        type: actionTypes.LOADING_BAR_STOP,
        value: data
    }
};
