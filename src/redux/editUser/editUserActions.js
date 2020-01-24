import editTypes from './editUserTypes'
import axios from 'axios'

const fetchingData = () => {
    return {
        type : editTypes.isFetching
    }
}

const gotUserData = (userdata) => {
    return {
        type : editTypes.gotUserData,
        payload : userdata
    }
}

const userfetchError = (error) => {
    return {
        type : editTypes.userFetchError,
        payload: error
    }
}

const editUser = (userId) => {
    return (dispatch) => {
        // console.log("have to fetch this user", userId);
        // const url = "http://localhost:8000/posts/"+`${userId}`
        // console.log( "it is url", url);
        dispatch(fetchingData())
        axios.get("http://localhost:8000/posts/"+`${userId}`).then(response => {
            // console.log(
            //     "it is response for selected user", response.data
            // );
            dispatch(gotUserData(response.data))
        }).catch(error => {
            // console.log(
            //     "it is error for selected user", error
            // );
            dispatch(userfetchError(error))
        })
    }
}

export default editUser