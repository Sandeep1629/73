import React ,{useState} from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './Register.css';
import { Card } from '@mui/material';
const Register=()=>
{
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''

    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>
    {
        e.preventDefault();
        axios.post("http://localhost:5000/register",data).then(
            res => alert(res.data)
        )
    }
    return(
        <div>
            <center>
            <Card sx={{ maxWidth:525 }}>
            
                <div className='reg'>
            <form onSubmit={submitHandler}>
                <h3>Register</h3>
                <input type ="text" onChange={changeHandler} name="username" placeholder='User Name'/><br/>
                <input type ="email" onChange={changeHandler} name="email" placeholder='Email'/><br/>
                <input type ="password" onChange={changeHandler} name="password" placeholder='Password'/><br/>
                <input type ="password" onChange={changeHandler}  name="confirmpassword" placeholder='Confirm password'/><br/>
                <input type ="Submit"  value="Register"/><br/>
                <Link to="/Logi"><Button variant="h7">Login</Button></Link>
            </form>
            </div>
            
            </Card>
            </center>
           
        </div>
      
    ) 
}
export default Register