import * as React from 'react';

import { BrowserRouter as Routes, Route} from 'react-router-dom';
import './App.css';
// import Login from "./com/Login";
import LoginUser from "./com/LoginUser";
import LoginAdmin1 from "./com/LoginAdmin";
import RegisterUser from "./com/RegisterUser";
import RegisterAdmin1 from "./com/RegisterAdmin";
import User from "./com/User"
import Admin from "./com/Admin"
import Home from './com/Home';
import {connect} from 'react-redux';
import Nav from './Nav';

class App extends React.Component{

  constructor(props){
    super(props);
    this.check = this.check.bind(this);
  }
  check = () =>{
    console.log("hello")
    var auth = localStorage.getItem('auth');
    if(auth && !this.props.state.auth){
      this.props.dispatch({type:'LOGIN'});
    }
  }

 

render(){
  this.check();
  return (

<>
<Nav/>

<Routes>

<Route exact path='/'  element={<Home />}/>
		<Route exact path='/admin/register' element={<RegisterAdmin1/>} />
		<Route exact path='/users/register' element={<RegisterUser/>} />
		<Route exact path='/admin/login' element={<LoginAdmin1/>} />
		<Route exact path='/users/login' element={<LoginUser/>} />
    <Route exact path='/user' element={<User/>} />
    <Route exact path='/admin' element={<Admin/>} />
    
				</Routes>
       </>

  );
}
}

const m = state =>{
  return {
    state:state
  };
};

export default connect(m) (App);
