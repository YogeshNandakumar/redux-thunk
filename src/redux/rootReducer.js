import {combineReducers} from 'redux'
import userReducer from './users/UserReducer'
import postReducer from './postuser/postUserReducer'
import editReducer from './editUser/editUserReducer'
import updateReducer from './updateUser/updateUserReducer'
import deleteReducer from './deleteUser/deleteUserReducer'

const rootReducer = combineReducers({
    user : userReducer,
    postUser : postReducer,
    editUser : editReducer,
    updateUser : updateReducer,
    deleteUser : deleteReducer
})

export default rootReducer