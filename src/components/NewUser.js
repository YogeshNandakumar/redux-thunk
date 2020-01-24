import React, { Component } from 'react'
import {connect} from 'react-redux'
import postUser from '../redux/postuser/postUserActions'
import updateUser from '../redux/updateUser/updateUserActions'

export class NewUser extends Component {

    constructor (props) {
        super(props)
        this.state = {
            userId : undefined,
            name : '',
            department : '',
            buttonName : 'submit'
        }
        this.changeName = this.changeName.bind(this)
    }

    changeName(event){
        event.preventDefault();
        if(this.state.buttonName === 'submit'){
            this.props.saveUser(this.state)
        }
        if(this.state.buttonName === 'update'){
            this.props.updateUser(this.state)
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.editState != this.props.editState) {
            if(!this.props.editState.isFetching && this.props.editState.fetchError == ""){
                let data = this.props.editState.selectedUserData
                this.setState({
                    userId : data.id,
                    name:data.name,
                    department:data.department,
                    buttonName:'update'
                })
            }
        }
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>user Name</label>
                        <input type="text" value={this.state.name} onChange={(event) => {
                            this.setState({name : event.target.value})
                        }}></input>
                    </div>
                    <div>
                        <label>user department</label>
                        <input type="text" value={this.state.department} onChange={(event) => {
                            this.setState({department : event.target.value})
                        }}></input>
                    </div>
                    <div>
                        <button onClick={this.changeName}>{this.state.buttonName}</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        pstate : state.postUser,
        editState : state.editUser
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveUser :(userData) => dispatch(postUser(userData)),
        updateUser : (userData) => dispatch(updateUser(userData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)
