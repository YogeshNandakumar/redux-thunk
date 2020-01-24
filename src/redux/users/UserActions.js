import types from './UserTypes'
import axios from 'axios'

const userLoading = () => {
    return {
        type : types.userFetchLoading
    }
}

const userRequestSuccess = (userData) => {
    return {
        type : types.userFetchSuccess,
        payload : userData
    }
}

const userRequestFailure = (error) => {
    return {
        type : types.userFetchError,
        payload : error
    }
}

const forUserList = () => {
    return (dispatch) => {
        dispatch(userLoading())
        axios.get('http://localhost:8000/posts/').then(response => {
            // console.log("all users", response.data);
            const user = response.data
            dispatch(userRequestSuccess(user))
        }).catch(error => {
            const errorMsg = error.message
            dispatch(userRequestFailure(errorMsg))
        })
    }
}
export default forUserList