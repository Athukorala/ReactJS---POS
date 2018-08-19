import * as actionTypes from './actionTypes';
import axiosAdmin from "../../axios/axios-admin";
import axiosAdminProfile from "../../axios/axios-adminProfile";


export const setInfluencerRequestHandler = (influencers) => {
    return {
        type: actionTypes.INFLUENCER_HANDLER,
        value: influencers
    }
};

export const setAdvertiserRequestHandler = (advertisers) => {
    return {
        type: actionTypes.ADVERTISER_HANDLER,
        value: advertisers
    }
};

export const onInfluencerRequestHandler = () => {
    return dispatch => {

        // get request influencers ------- (register influencers)

        axiosAdmin.get(`GetRequestInfluencers`)
            .then(response => {

                const influArray = [];

                if (response.data.length >= 0) {
                    const array = response.data;
                    array.map((mail, index) => {


                        let split = mail.Date;

                        //split it...............
                        // /Date(1528223400000)/
                        let res = split.split('/Date(');
                        let onlyKey = res[1].split(')/');

                        // dateCreate

                        let time = new Date(parseInt(onlyKey[0]));

                         index = time.getFullYear() + "-" + (1+time.getMonth()) + "-" + time.getDate();
                        // console.log(onlyKey[0]);
                        // let a=onlyKey[0]
                        // console.log(new Date(parseInt(a)))
                        // let result = new Date(onlyKey[0]).toDateString().split(' ');
                        // index = result[1]+" "+result[2]+" "+result[3];
                        const obj = {
                            email: mail.Email,
                            date: index,
                        }

                        influArray.push(obj);

                    });

                }
                dispatch(setInfluencerRequestHandler(influArray))
            })

            .catch(error => {
                const previewError = "Can't load...Network Error!";
                const arr = [];
                arr.push(previewError);
                dispatch(setInfluencerRequestHandler(arr))
                console.log("error occured : " + error);

            });
    }
};

export const onAdvertiserRequestHandler = () => {
    return dispatch => {
        // get request advertiser ------- (register advertiser)

        axiosAdmin.get(`GetRequestAdvertisers`)
            .then(response => {

                const adverArray = [];

                if (response.data.length >= 0) {
                    const array = response.data;
                    array.map((mail, index) => {

                        let split = mail.Date;

                        //split it...............
                        // /Date(1528223400000)/
                        let res = split.split('/Date(');
                        let onlyKey = res[1].split(')/');

                        // dateCreate
                        let time = new Date(parseInt(onlyKey[0]));

                        index = time.getFullYear() + "-" + (1+time.getMonth()) + "-" + time.getDate();

                        const obj = {
                            email: mail.Email,
                            date: index,
                        };

                        adverArray.push(obj);


                    });

                }
                dispatch(setAdvertiserRequestHandler(adverArray))
            })

            .catch(error => {
                const previewError = "Can't load...Network Error!";
                const arr = [];
                arr.push(previewError);
                dispatch(setAdvertiserRequestHandler(arr))
                console.log("error occured : " + error);

            });
    }
};

export const adminDashbordHandler = (data) => {

    return {
        type: actionTypes.ADMIN_DASHBORD_HANDLER,
        value: data
    }
};

export const adminReviewHandler = (data) => {

    return {
        type: actionTypes.ADMIN_REVIEW_HANDLER,
        value: data
    }
};

export const getAllInteraction = (data) => {
    return {
        type: actionTypes.GET_ALL_INTERACTION,
        value: data
    }
};

export const getAllInteractionHandler = () => {
    return dispatch => {

        // get all interaction ---> (list)

        axiosAdminProfile.get(`GetAllInteractions`)
            .then(response => {

                if (response.data.length > 0) {

                    const Array = [];

                    response.data.map(data => {

                        let dateNow = data.DueDate;
                        let res = dateNow.split('T');

                        let dateNow2 = data.CreatedDate;
                        let res1 = dateNow2.split('T');

                        const obj = {
                            advertiserName: data["AdvertiserName"],
                            influencerName: data["InfluencerName"],
                            dueDate: res[0],
                            CreateDate: res1[0],
                            state: data["State"],
                            id: data["InteractionID"]
                        };

                        Array.push(obj);
                    });

                    dispatch(getAllInteraction(Array))

                }
            })

            .catch(error => {
                const previewError = "Can't load...Network Error!";
                const arr = [];
                arr.push(previewError);
                dispatch(getAllInteraction(arr));
                console.log("error occured : " + error);

            });
    }
};

export const stopReviewForm = (data) => {
    return {
        type: actionTypes.ADMIN_REVIEW_STOP_REFRESH,
        value: data
    }
};

export const stopDashbordForm = (data) => {
    return {
        type: actionTypes.ADMIN_DASHBORD_STOP_REFRESH,
        value: data
    }
};
export const onAdminImagePreview = (data) => {
    return {
        type: actionTypes.ADMIN_REVIEW_IMAGE,
        value: data
    }
};

