import React, { Component } from 'react'
import axios from 'axios' 
import UserList from './UserList'
import Loader from './Loader';

class Users extends Component { 
    state = { 
        loading: true, 
        users: [], 
        error: false  
    } 

    componentDidMount() { 
        axios.get('https://api.github.com/users') 
            .then(result => { 
                this.setState({ 
                    users: result.data, 
                    loading: false 
                }) 
            }) 
            .catch(() => { 
                this.setState({ 
                    error: true 
                }) 
            }) 
    } 

    render() { 
        let { users } = this.state 
        return ( 
            <div className="container"> 
                {
                    this.state.loading 
                    ?
                    <center><Loader /></center>
                    :
                    <div className="collection"> 
                    { 
                        users.map((user, i) => { 
                            return ( 
                                <UserList 
                                    key={i} 
                                    user={user} 
                                /> 
                            ) 
                        }) 
                    } 
                    </div> 
                }

                {
                    this.state.error && 
                    <h1>Server Error</h1> 
                }
            </div> 
        ) 
    } 
} 

export default Users 
