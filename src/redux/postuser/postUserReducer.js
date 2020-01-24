import postTypes from './PostUserTypes'

const intialState = {
    isProcessing : false,
    postSuccess : [],
    postError : '',
    showModal : true
}

const postReducer = (state = intialState, action) => {
    switch(action.type) {
        case postTypes.postUserProcessing : 
        // alert("hi processing")
        return {
            ...state,
            isProcessing : true
        }
        case postTypes.postUserSuccess : 
        // alert("hi success")
         return {
            ...state,
            isProcessing : false,
            postSuccess : action.payload,
            showModal: false
        }
        case postTypes.postUserFailure : 
        // alert("hi error")
        return {
            ...state,
            isProcessing : false,
            postError : action.payload
        }
        default : return state
    }
}

export default postReducer