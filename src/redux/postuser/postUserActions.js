import postTypes from './PostUserTypes'
import axios from 'axios'

const postProcessing = () => {
    // console.log("in processing")
    return {
        type: postTypes.postUserProcessing
    }
}

const postSuccess = (successResp) => {
    // console.log("successResp", successResp);
    return {
        type: postTypes.postUserSuccess,
        payload: successResp
    }
}

const postFailure = (error) => {
    // console.log(
    //     "error", error
    // );
    
    // alert("error")
    return {
        type: postTypes.postUserFailure,
        payload: error
    }
}

const postUser = (inputObj) => {
    // console.log("in post user",inputObj)
    return (dispatch) => {
        dispatch(postProcessing())
        // const inputObj = JSON.stringify(userData)
        // const inputObj = {
        //     // id:"2",
        //     name:"eswar sai kumar",
        //     department:"mech",
        // }
        axios.post('http://localhost:8000/posts/', inputObj).then(response => {
            // console.log("response came", response);
            // console.log("response came", response.data.id);
            dispatch(postSuccess(response.data))
        }).catch(error => {
            // console.log("error came", error);
            dispatch(postFailure(error))
        })
    }   
}

export default postUser