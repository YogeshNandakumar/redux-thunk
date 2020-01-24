import types from './UserTypes'

const intialState = {
    isLoading : false,
    data: [],
    error:''
}

const userReducer = (state = intialState, action) => {
    switch(action.type) {
        case types.userFetchLoading : return {
            ...state,
            isLoading : true
        }
        case types.userFetchSuccess : return {
            ...state,
            isLoading : false,
            data: action.payload
        }
        case types.userFetchError : return {
            ...state,
            isLoading:false,
            error : action.payload
        }
        default : return state
    }
}

export default userReducer