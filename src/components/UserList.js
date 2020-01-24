import React, { Component } from 'react'
import { connect } from 'react-redux'
import forUserList from '../redux/users/UserActions'
import NewUser from './NewUser'
import editUser from '../redux/editUser/editUserActions'
import deleteUser from '../redux/deleteUser/deleteUserActions'

export class UserList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showModal : false
        }
        this.editUser = this.editUser.bind(this)
    }

    
    
    editUser(id){
        this.props.editUser(id)
        this.setState({
            showModal : true,
            message : ""
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.postState != this.props.postState){
            if(!this.props.postState.showModal) {
                this.setState({
                    showModal : false,
                    message :"user saved successfully"
                })
                this.props.fetchUser();
            }
        }
        if(prevProps.updateState != this.props.updateState) {
            if(!this.props.updateState.showModal) {
                this.setState({
                    showModal : false,
                    message: "user updated successfully"
                })
                this.props.fetchUser();
            }
        }
        if(prevProps.deleteState != this.props.deleteState) {
            let data = this.props.deleteState
            if(!data.isDeleting && data.deleteError === ""){
                this.setState({
                    ...this.state,
                    message : "user deleted successfully"
                })
                this.props.fetchUser();
            }
        }
    }

    componentDidMount(){
        this.props.fetchUser();
    }

    render() {
        return this.props.userState.isLoading ? (
            <div>
                <h3>Loading data</h3>
            </div>
        ) : this.props.userState.error !=="" ? (
            <div>{this.props.userState.error}</div>
        ) :(
            
            <div>
                <div>
                    <button onClick={() => {
                            this.setState({ showModal: true })
                        }}>Add New User
                    </button>
                </div>
                {this.state.showModal ? <NewUser/> : <div></div>}
                <div>{this.state.message}</div>
                <table >
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Department</td>
                            <td colSpan="2">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.userState.data.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.department}</td>
                                    <td><button onClick={() => this.editUser(user.id)}>edit</button></td>
                                    <td><button onClick={() => this.props.deleteUser(user.id)}>delete</button></td>
                                </tr>)
                            }) 
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userState : state.user,
        postState : state.postUser,
        updateState : state.updateUser,
        deleteState : state.deleteUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser : () => dispatch(forUserList()),
        editUser : (userId) => dispatch(editUser(userId)),
        deleteUser : (userId) => dispatch(deleteUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
