import * as actionTypes from '../action/actionTypes';

const initialState={

    influencerRequests:[],
    advertiserRequests:[],
    getAllInteraction: [],

    review:false,
    dashbord:true,

    stopReview: false,
    stopDashbord: true,

    imageUrl: ''
};

const reducer=(state=initialState,action)=>{
    switch(action.type){

        case actionTypes.INFLUENCER_HANDLER:
            return {
                ...state,
                influencerRequests:action.value
            };
        case actionTypes.ADVERTISER_HANDLER:
            return {
                ...state,
                advertiserRequests:action.value
            };

        case actionTypes.ADMIN_DASHBORD_HANDLER:
            return {
                ...state,
                dashbord:true,
                review: false,

                stopReview:false,
                stopDashbord: true
            };
        case actionTypes.ADMIN_REVIEW_HANDLER:
            return {
                ...state,
                review:true,
                dashbord:false,

                stopReview:true,
                stopDashbord: false
            };

        case actionTypes.GET_ALL_INTERACTION:

            return {
                ...state,
                getAllInteraction:action.value
            };
        case actionTypes.ADMIN_REVIEW_IMAGE:

            return {
                ...state,
                imageUrl:action.value
            };

        default:
            return state;
    }
};

export default reducer;

