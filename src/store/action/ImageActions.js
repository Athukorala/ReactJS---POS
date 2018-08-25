import * as actionTypes from "./actionTypes";

export const imageHandler = (data) => {

    return {
        type: actionTypes.IMAGE_HANDLER,
        value: data
    }
};

