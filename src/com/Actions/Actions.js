
import Axios from "axios";

const URL = 'http://127.0.0.1:3000'

 export const loginUser= async (data)=>{
    try{
    let res = await Axios.post(`${URL}/users/login`,data);
    if(res.data.success){
        return res;
    }
    else {
        console.log("err");
    }
 }
 catch(e){
 
}
}


export const loginAdmin= async (data)=>{
    try{
   let res = await Axios.post(`${URL}/admin/login`,data);
if  (res.data.success){
     return res;
}
       else {
          console.log("err")
      }  
}
catch(e){
}
}


export const registerAdmin= async (data)=>{
    try{
   let res = await Axios.post(`${URL}/admin/register`,data);
        console.log(res.data)
if  (res.data.success){
      console.log(res.data)
      return res;
   }
       else {
          console.log("err")
      }  
}
catch(e){

}
}


export const registerUser= async (data)=>{
    try{
     let res = await Axios.post(`${URL}/users/register`,data);
     console.log(res.data)
     if (res.data.success){
        console.log(res.data)
     return res;
}
       else {
          console.log('err');
      }  
}
catch(e){
   
}
}










