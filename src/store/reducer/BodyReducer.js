import * as actionTypes from '../action/actionTypes';

const initialState = {


    customerDashbord: true,
    itemDashbord: false,
    placeorderDashbord: false,
    orderDashbord: false
};

const reducer=(state=initialState,action)=>{
    switch(action.type){


        case actionTypes.CUSTOMER_MANGAGE:
            return {
                ...state,
                customerDashbord: true,
                itemDashbord: false,
                placeorderDashbord: false,
                orderDashbord: false
            };
        case actionTypes.ITEM_MANAGE:
            return {
                ...state,
                customerDashbord: false,
                itemDashbord: true,
                placeorderDashbord: false,
                orderDashbord: false
            };

        case actionTypes.PLACEORDER_MANAGE:
            return {
                ...state,
                customerDashbord: false,
                itemDashbord: false,
                placeorderDashbord: true,
                orderDashbord: false
            };

        case actionTypes.ORDER_MANAGE:
            return {
                ...state,
                customerDashbord: false,
                itemDashbord: false,
                placeorderDashbord: false,
                orderDashbord: true
            };


        default:
            return state;
    }
};

export default reducer;