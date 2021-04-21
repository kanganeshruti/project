
import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }


    }
    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center" style={{color: "red"}}>  Emp Details </h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>Emp Details</td>
                            <td>Emp First Name</td>
                            <td>EmpLast Name</td>
                            <td>Emp Email Id</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.users.map(
                            user =>
                            <tr key = {user.id}>
                                <td> {user.id}</td>
                                <td> {user.firstname}</td>
                                <td> {user.lastname}</td>
                                <td> {user.emailId}</td>
                                
                                </tr>
                        )
    }
                    </tbody>
                </table>
            </div>
        )
    }
    }
      

export default UserComponent