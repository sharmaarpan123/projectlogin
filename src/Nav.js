import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends React.Component{


    render() {
      console.log(this.props.state.auth);
        if(!this.props.state.auth){
          return(


    <Box  sx={{ flexGrow: 1,  }}>
      <AppBar position="static" >
        <Toolbar >

<div className='link3'>
         <Link to={'/'} className='link' style={{ textDecoration: 'none' }} >Home</Link> 
         </div>
         <div className='link4'>
        <Link to={'/users/login'} className='link1'  style={{ textDecoration: 'none' }}>Login</Link>
        </div>

        </Toolbar>
      </AppBar>
    </Box>
          )
}



else {
    return(

    <Box  sx={{ flexGrow: 1,  }}>
      <AppBar position="static"
      >
        <Toolbar >

<div className='link3'>
         <Link to={'/'} className='link' style={{ textDecoration: 'none' }} >Home</Link> 
         </div>
        

        <div className='link5'>
          <Link to={'/user'} className='link2'  style={{ textDecoration: 'none' }}>User</Link>
          </div>

          <div className='link5'>
          <Link to={'/logout'} className='link2'  style={{ textDecoration: 'none' }}>LOGOUT</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    )
  }

    }
}

const m = state =>{
    return {
      state:state
    };
  };



export default connect(m)(Nav)