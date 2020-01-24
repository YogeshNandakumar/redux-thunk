import updateTypes from './updateUserTypes'

const intialState = {
    isUpdating : false,
    updatedData : [],
    updateError : '',
    showModal : true
} 

const updateReducer = (state = intialState, action) => {
    switch(action.type) {
        case updateTypes.isUpdating : return {
            ...state,
            isUpdating : true
        }
        case updateTypes.updateSuccess : return {
            ...state,
            isUpdating : false,
            updatedData : action.payload,
            showModal : false
        }
        case updateTypes.updateFailure : return {
            ...state,
            isUpdating: false,
            updateError : action.payload
        }
        default : return state
    }

}

export default updateReducer