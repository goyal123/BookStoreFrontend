import React, { useState } from 'react'
//import Box from '@mui/material/Box';
//import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { createTheme } from '@mui/material/styles';
import { loginapi } from '../../services/Userservice';
import Card from '@mui/material/Card';
import { navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import { getuseridapi } from '../../services/Dataservice';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
        width: '22vw',
        marginRight: '10%',
        transition: theme.transitions.create([
          'border-color',
          'background-color',
          'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
            fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focu s ': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
    }, 
},
  })); 
    
const useStyle = makeStyles({
    Container:{
        display:'flex',
        flexDirection:'column',
        width:'120%',
        marginTop:'2%',
        marginLeft:'0%',
        height:'65vh', 
        backgroundColor:'white',
        border:'1px Solid black',
        borderRadius:'50px'
    },
    Note1:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'white',
        width:'65%' ,  
        marginTop:'10%',
        marginLeft:'14%',
        justifyContent:'space-between',
        marginBottom:' 10%',      
    },  
    row1:{ 
      marginTop:'-5%'
    },
    Container1:{
      display:'flex',
      flexDirection:'row',
      marginTop:'6%',
      marginLeft:'100px',
      width:'75vw',
      height:'80vh',
      backgroundColor:''
  },
  Container2:{
      display:'flex',
      flexDirection:'column',
      height:'60vh',
      marginTop:'6%',
      marginLeft:'250px',
      width:'25vw',
      height:'25vw',
      backgroundColor:'white',
      border:'1px solid',
      
  },
  imgset:{
      display:'flex',
      marginTop:'45px',
      marginLeft:'40px',
      width:'50vw',
      height:'40vh',
      position:'center',
      
  },
  paperset:{
    
  }
})  
     
export default function Loginpage() {
const  classes = useStyle()  
const navigate = useNavigate();
const [signinobj, setsigninobj] = useState({ email: '', password: '' })

const takeemail = (e) => {
  setsigninobj(prevstate => ({ ...prevstate, email: e.target.value }));
  console.log(e.target.value);
}
const takepass = (e) => {
  setsigninobj(prevstate => ({ ...prevstate, password: e.target.value }));
  console.log(e.target.value);
}

const submit = () => {
  loginapi(signinobj).then((response)=>{
    console.log(response);
    localStorage.setItem("token",response.data.data)
    // navigate('/dashboard')
  })
  getuseridapi().then((response) => {
    console.log(response);
    localStorage.setItem("UserId",response.data.data)
  })
  navigate('/dashboard')
}

const signupcall = () => {
  navigate('/signup')
}
  return (
<>
    <div className={classes.Container1}>
        <div className={classes.Container2}>
            <div className={classes.imgset}>
                <img src='book1.png' width='250px'/>
            </div>
        </div>
    
        <Paper elevation={5} className={classes.Container}>
            <div className={classes.Note1}>
                <span>
                    <Button variant="text" size="large"><b>Login</b></Button>
                </span>
                <span>
                    <Button variant="text" size="large" onClick={signupcall}>SignUp</Button>
                </span>
            </div>

            <div className={classes.row1}>
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">Email</InputLabel>
                    <BootstrapInput type="email" name="email" onChange={takeemail}/>
                </FormControl>

            </div>
                
            <div>
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">password</InputLabel>
                    <BootstrapInput type="password" name="password" onChange={takepass}/>
                </FormControl>
            </div>
            
            <div>
              <Button variant="text" sx={{width:'65%',marginRight:'25px',backgroundColor:'red',color:'white'}} onClick={submit}>Login</Button>
            </div>

            <br></br>
            <div>
              
              <span>
              <Button variant="text" sx={{width:'26%',marginLeft:'1px',marginRight:'30px',backgroundColor:'Blue',color:'white'}}>FaceBook</Button>
              </span>
              <span>
              <Button variant="text" sx={{width:'26%',marginLeft:'20px',marginRight:'25px',backgroundColor:'blue',color:'white'}}>Google</Button>
              </span>
            </div>
           
         
        </Paper>
      </div>
     
    </> 
  )  
}  
