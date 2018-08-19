import * as actionTypes from "./actionTypes";

export const customerHandler = (data) => {

    return {
        type: actionTypes.CUSTOMER_MANGAGE,
        value: data
    }
};

export const itemHandler = (data) => {

    return {
        type: actionTypes.ITEM_MANAGE,
        value: data
    }
};

export const placeorderHandler = (data) => {
    return {
        type: actionTypes.PLACEORDER_MANAGE,
        value: data
    }
};