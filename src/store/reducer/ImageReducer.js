import * as actionTypes from '../action/actionTypes';

const initialState = {
    image:[]
};

const reducer=(state=initialState,action)=>{
    switch(action.type){


        case actionTypes.IMAGE_HANDLER:
            return {
                ...state,
                image:action.value
            };


        default:
            return state;
    }
};

export default reducer;