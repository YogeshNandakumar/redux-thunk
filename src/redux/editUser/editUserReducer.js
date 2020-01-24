import editTypes from './editUserTypes'

const intialState = {
    isFetching : false,
    selectedUserData : {},
    fetchError : '' 
}

const editReducer = (state=intialState,action) => {
    switch(action.type) {
        case editTypes.isFetching : return {
            ...state,
            isFetching : true
        }
        case editTypes.gotUserData : return {
            ...state,
            isFetching: false,
            selectedUserData : action.payload
        }
        case editTypes.userFetchError : return {
            ...state,
            isFetching : false,
            fetchError : action.payload
        }
        default : return state
    }
}

export default editReducer