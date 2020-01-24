import deleteTypes from './deleteUserTypes'

const intialState = {
    isDeleting : false,
    deletedData : {},
    deleteError : "" 
}

const deleteReducer = (state = intialState, action) => {
    switch(action.type) {
        case deleteTypes.isDeleting : return {
            ...state,
            isDeleting : true
        }
        case deleteTypes.deleteSuccess : return {
            ...state,
            isDeleting : false,
            deletedData : action.payload
        }
        case deleteTypes.deleteError : return {
            ...state,
            isDeleting : false,
            deleteError : action.payload
        }
        default : return state
    }

}

export default deleteReducer