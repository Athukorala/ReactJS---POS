import * as actionTypes from '../action/actionTypes';

const initialState = {
    stop:false,
    start:false
};

const reducer=(state=initialState,action)=>{
    switch(action.type){


        case actionTypes.LOADING_BAR_START:
            return {
                ...state,
                stop:false,
                start:true
            };

        case actionTypes.LOADING_BAR_STOP:
            return {
                ...state,
                stop:true,
                start:false
            };

        default:
            return state;
    }
};

export default reducer;