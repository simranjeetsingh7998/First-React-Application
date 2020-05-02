import * as ActionTypes from './ActionTypes';

export const Feedback=(state= {
    errMess: null,
    feedback: [],
    id: null
    },action) => {
    switch(action.type) {
        case ActionTypes.ADD_FEEDBACK:
            return {...state, isLoading:false,errMess:null,feedback:action.payload, id = state.feedback.length };

        case ActionTypes.FEEDBACK_FAILED:
        return {...state, isLoading:false,errMess:action.payload,feedback:[]};

        case ActionTypes.ADD_FEEDBACK:
            var feed = action.payload;
            return {...state,feedback: state.feedback.concat(feed)};
        default:
            return state; 
    }
}

