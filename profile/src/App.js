import React from 'react'; 
import Search from './Components/SearchUser/Search';
import Users from './Components/Users/Users';

function App() { 
  return ( 
    <div className="App"> 
      <center><h4>Github Profile Finder</h4></center> 
      <Search /> 

      <center><h4>Github Users</h4></center> 
      <Users /> 
    </div> 
  ); 
} 

export default App; 
