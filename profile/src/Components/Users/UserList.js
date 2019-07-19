import React, {Component} from 'react' 
import axios from 'axios' 

class UserList extends Component { 
    state = { 
        user: {}, 
        name: this.props.user.login 
    } 

    componentDidMount() { 
        axios.get(`https://api.github.com/users/${this.state.name}`) 
            .then(result => { 
                this.setState({ 
                    user: result.data 
                }) 
            }) 
            .catch(() => { 
                console.log('Error Occured'); 
            }) 
    } 

    render() { 
        let {user} = this.state 
        return ( 
            <div className="collection-item"> 
                <div 
                    className="hide-on-small-only"
                    style={{display: 'flex'}}> 
                    <div style={{width: '125px'}}> 
                        <img 
                            src={user.avatar_url} 
                            width="125px" 
                            className="circle responsive-img" 
                            alt="user picture"/> 
                        <center><h5>{user.login}</h5></center> 
                    </div> 
                    <div style={{ paddingLeft: '100px'}}> 
                        <h6>Name: {user.name}</h6> 
                        {user.bio && <h6>Bio: {user.bio}</h6>} 
                        {user.location && <h6>Location: {user.location}</h6>} 
                        <h6>Profile: {user.html_url}</h6> 
                    </div> 
                </div> 

                <div className="hide-on-med-and-up"> 
                    <center>
                        <div> 
                            <img 
                                src={user.avatar_url} 
                                width="125px" 
                                className="circle responsive-img" 
                                alt="user picture"/> 
                            <center><h5>{user.login}</h5></center> 
                        </div> 
                        <div> 
                            <h6>Name: {user.name}</h6> 
                            {user.bio && <h6>Bio: {user.bio}</h6>} 
                            {user.location && <h6>Location: {user.location}</h6>} 
                            <h6>Profile: {user.html_url}</h6> 
                        </div> 
                    </center> 
                </div> 
            </div> 
        ) 
    } 
} 

export default UserList 

