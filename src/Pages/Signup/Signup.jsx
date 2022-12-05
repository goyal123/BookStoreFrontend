import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { color } from '@mui/system';
import TextField from '@mui/material/TextField';
import { registerapi } from '../../services/Userservice';
import { Navigate, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';

const fullnameRegex = /^[A-Za-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileRegex = /^[1-9]{1}[0-9]{9}$/


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
      width: '20vw',
      marginRight:'30px',
      padding:'5px',
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
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  

const useStyle = makeStyles({
    Container:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        marginTop:'0%',
        marginLeft:'0%',   
        backgroundColor:'',
        border:'1px Solid black',
        height:'70vh'
    },
    Note1:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'',
        width:'72%' ,  
        marginTop:'5%',
        marginLeft:'10%',
        marginRight:'35%',
        justifyContent:'space-between',
        marginBottom:' 10%',
    },
    row1:{
        marginTop:"-10%",
        marginBottom:'2%'
    },
    row2:{
        marginBottom:'2%',
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
        height:'26vw',
        backgroundColor:'white',
        border:'1px solid'
    },
    imgset:{
        display:'flex',
        marginTop:'45px',
        marginLeft:'40px',
        width:'50vw',
        height:'40vh',
        position:'center'
    }
})

export default function Signup() {
  const navigate=useNavigate()
  const [signupobj, setsignupobj] = useState({ name: "", email: "", password: "",mobile:0,service: "advance" });
  const  classes = useStyle();
  const [regexobj, setregexobj] = useState({fnameBorder:false,fnameHelper:"",emailBorder: false, emailHelper: "", passswordBorder: false, passwordHelper: "",mobileBorder:false,mobileHelper:""});
  
  const takename = (e) => {
    setsignupobj(prevstate => ({ ...prevstate, name: e.target.value }));
    console.log(e.target.value);
  }

  const takeemail = (e) => {
    setsignupobj(prevstate => ({ ...prevstate, email: e.target.value }));
    console.log(e.target.value);
  }

  const takepass = (e) => {
    setsignupobj(prevstate => ({ ...prevstate, password: e.target.value }));
    console.log(e.target.value);
  }

  const takemobile = (e) => {
    setsignupobj(prevstate => ({ ...prevstate, mobile: Number(e.target.value) }));
    console.log(e.target.value);
  }

  const logincall = () => {
    navigate('/')
  }

const submit = () => {
    let fullnameTest = fullnameRegex.test(signupobj.name);
    let emailTest = emailRegex.test(signupobj.email);
    let passwordTest = passwordRegex.test(signupobj.password);
    let mobileTest = mobileRegex.test(signupobj.mobile);

    if (fullnameTest === false) {
        setregexobj(prevstate => ({ ...prevstate, fnameBorder: true, fnameHelper: "Enter valid firstname" }));
    }
    else if (fullnameTest === true) {
        setregexobj(prevstate => ({ ...prevstate, fnameBorder: false, fnameHelper: "" }));
    }


    if (emailTest === false) {
        setregexobj((prevstate) => ({
            ...prevstate,
            emailBorder: true,
            emailHelper: "Enter valid email"
        }));
    }
    else if (emailTest === true) {
        setregexobj((prevstate) => ({
            ...prevstate,
            emailBorder: false,
            emailHelper: ""
        }));

    }

    if (mobileTest === false) {
        setregexobj((prevstate) => ({
            ...prevstate,
            mobileBorder: true,
            mobileHelper: "Enter valid password"
        }));
    }
    else if (mobileTest === true) {
        setregexobj((prevstate) => ({
            ...prevstate,
            mobileBorder: false,
            mobileHelper: ""
        }));

    }

    if (passwordTest === false) {
        setregexobj((prevstate) => ({
            ...prevstate,
            passwordBorder: true,
            passwordHelper: "Enter valid password"
        }));
    }
    else if (passwordTest === true) {
        setregexobj((prevstate) => ({
            ...prevstate,
            passwordBorder: false,
            passwordHelper: ""
        }));

    }
    // console.log(signupobj);

    // registerapi(signupobj).then((response) => {
    //     console.log(response)
    //     //navigate('/')
    // }).catch((error) => {
    //     console.log(error)
    // })

    if (fullnameTest === true && emailTest === true && passwordTest === true && mobileTest==true) {
        console.log("hello")
        registerapi(signupobj).then((response) => {
            console.log(response)
            //navigate('/')
        }).catch((error) => {
            console.log(error)
        })

    }
    console.log(signupobj);

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
                    <Button variant="text" onClick={logincall}>Login</Button>
                </span>
                <span>
                    <Button variant="text">SignUp</Button>
                </span>
            </div>
            <div className={classes.row1}>
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">FullName</InputLabel>
                    <BootstrapInput type={'text'} name='name' onChange={takename} error={regexobj.fnameBorder} helperText={regexobj.fnameHelper}/>
                        
                </FormControl>

            </div>
            
            <div className={classes.row2}>
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">Email</InputLabel>
                    <BootstrapInput type={'email'} name='email' onChange={takeemail} />
                </FormControl>

            </div>
            
            <div className={classes.row2}>
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">Password</InputLabel>
                    <BootstrapInput type={'password'} name='password' onChange={takepass} />
                </FormControl>

            </div>
            
            <div className={classes.row2}>
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">Mobile</InputLabel>
                    <BootstrapInput name='mobile' onChange={takemobile} />
                </FormControl>
            </div>
            <br></br>
            <div>
              <Button variant="contained" sx={{width:'68%',marginRight:'30px',border:'1px Solid',backgroundColor:'red',color:'white'}} onClick={submit}>Submit</Button>
            </div>
            <br></br>
    </Paper>
    </div>
    </>
  )
}
