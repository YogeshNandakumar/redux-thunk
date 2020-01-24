import deleteTypes from './deleteUserTypes'
import axios from 'axios'

const isDeleting = () => {
    return {
        type:deleteTypes.isDeleting
    }
}

const deleteSuccess = (deletedData) => {
    return {
        type : deleteTypes.deleteSuccess,
        payload : deletedData
    }
}

const deleteFailure = (error) => {
    return {
        type : deleteTypes.deleteFailure,
        payload:error
    }
}

const deleteUser = (userId) => {
    return (dispatch) => {
        // console.log("this is for user deleting", userId);
        dispatch(isDeleting())
        axios.delete("http://localhost:8000/posts/"+`${userId}`).then(response => {
            // console.log("it is deleted response", response);
            dispatch(deleteSuccess(response))
        }).catch(error => {
            // console.log("it is deleted error", error);
            dispatch(deleteFailure(error))
        })
    }
    // return (dispatch) => {
    //     console.log("this is for multiple delete");
    //     const ids = [5,6,8]
    //     // dispatch(isDeleting())
    //     Promise.all(
    //         ids.map(id => {
    //             let url = "http://localhost:8000/posts/"+`${id}`
    //             console.log("this is url", url);
    //             axios.delete("http://localhost:8000/posts/"+`${id}`).then(response => {
    //                 console.log("it is response for deleted items", response);
    //                 // Success.push(response)
    //             }).catch(error => {
    //                 console.log("it is for error delete", error);
    //                 // ERror.push(error) 
    //             })
    //         }) 
    //     )
    //     console.log("it is after for loop");
        
    // }
}

export default deleteUser