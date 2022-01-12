import React, { useState} from 'react';  
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { registerAdmin}  from'./Actions/Actions';
import { useNavigate } from "react-router-dom";


import './css/Login.css';
import Icon from './svg/Icon.svg';


 export default function RegisterAdmin1(props){

  let navigate = useNavigate();


  
 const [username, setUsername] = useState('');  
 const [password, setPassword] = useState('');  


 const handleUsername = event => {
  setUsername(event.target.value);
 };
 
 const handlePassword = event => {
  setPassword(event.target.value);
 };

const submitHandler = async () =>{

  var data = {
    userName: username,
    passWord: password
  };
  let res = await registerAdmin(data);
  if(res.data.success)
  {

navigate('/admin/login')

  }

}




  return (

    <div class="flex-container1">





      <div backgroundColor="black" >

      <img src={Icon} alt="Icon" />

      </div>
    
     
      <div class="ab">
       
        <TextField
          id="outlined-textarea"
          label="Username"
          onChange={handleUsername}
          
          multiline
        />
      
      </div>

      <div class="bc">
        
        <TextField
          id="-textarea"
          label="Password"
          multiline
          onChange={handlePassword}
        />
        
      </div>

      <div class="cd">
      <Button variant="outlined" onClick={submitHandler} >submit</Button>
      </div>
      


    



    </div>

  );
}
