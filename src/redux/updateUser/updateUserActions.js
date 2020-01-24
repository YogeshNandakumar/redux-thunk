import updateTypes from './updateUserTypes'
import axios from 'axios'

const isUpdating = () => {
    return {
        type : updateTypes.isUpdating
    }
}

const updateSuccess = (updatedData) => {
    return {
        type : updateTypes.updateSuccess,
        payload : updatedData
    }
}

const updateFailure = (error) => {
    return {
        type : updateTypes.updateFailure,
        payload: error
    }
}

const updateUser = (userData) => {
    return (dispatch) => {
        // console.log("it is for update", userData);
        // const inputObj = {
        //     name : "jayaSurya",
        //     department : "chemical"
        // }
        const userId = Number(userData.userId)
        // console.log("it is user id", userId);
        const inputObj = {
            name: userData.name,
            department : userData.department
        }
        // console.log("it is obj", inputObj);
        const url = "http://localhost:8000/posts/" +`${userId}`
        // console.log("it is url", url)
        dispatch(isUpdating())
        axios.put("http://localhost:8000/posts/" +`${userId}`,inputObj).then(response => {
            // console.log("it is update response", response);
            dispatch(updateSuccess(response.data))
        }).catch(error => {
            // console.log("it is update error", error);
            dispatch(updateFailure(error))
        })
    }
}

export default updateUser