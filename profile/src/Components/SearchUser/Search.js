import React, { Component } from 'react' 
import axios from 'axios'
import UserList from '../Users/UserList';

class Search extends Component { 
    state = { 
        name: '', 
        user: {}, 
        search: false, 
        noUser: false 
    } 
    
    changeHandler = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value 
        }) 
    } 

    submitHandler = (e) => { 
        e.preventDefault() 
        this.setState({ 
            search: false, 
            noUser: false  
        }) 

        let { name } = this.state 
        try {
            axios.get(`https://api.github.com/users/${name}`) 
                .then(result => { 
                    this.setState({ 
                        user: result.data, 
                        search: true 
                    }) 
                }) 
                .catch(err => { 
                    this.setState({ 
                        noUser: true 
                    }) 
                }) 
        } catch (error) {
            this.setState({ 
                noUser: true 
            }) 
        }
    } 

    render() { 
        return ( 
            <div className="container"> 
                <form onSubmit={this.submitHandler}> 
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Search your profile by username only" 
                        value={this.state.name} 
                        onChange={this.changeHandler} 
                    /> 
                    <button className="waves-effect waves-dark btn blue darken-3"> 
                        Search 
                    </button> 

                    { 
                        this.state.search && 
                        <div className="collection"> 
                        {
                            this.state.noUser 
                            ? 
                            <h4>No user found</h4>
                            : 
                            <UserList 
                                user={this.state.user} /> 
                        }
                        </div> 
                    } 
                </form> 
            </div> 
        ) 
    } 
} 

export default Search 