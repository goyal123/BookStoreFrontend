import React from 'react'
import Header from './Header'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';

const useStyle = makeStyles({
    container: {
        display:'flex',
        flexDirection:'column', 
        width: '80vw',
        marginTop:'10px',
        border: '',
        position: 'relative',
        left: '150px',
        
    },
    header2: {
        width: '90%',
        height: '5vh',
        marginLeft:'20px',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'',
        
    },
    maincontainer:{
        display:'flex',
        flexDirection:'column',
        border:'',
        width:'40vw',
        marginLeft:'220px'
    },
    item1:{
        display:'flex',
        flexDirection:'row',
        marginTop:'0px',
        border:''
    },
    item2:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        width:'40vw'
    },
    row5:{
        marginLeft:'0px',
        marginRight:'14vw'
    },
    row7:{
        marginLeft:'0px',
        marginRight:'13.6px'
    },
    row8:{
        marginLeft:'0px'
    },
    row9:{
        display:'flex',
        flexDirection:'column',
        marginLeft:'0px',
        alignItems:'flex-start',
        border:'1px solid black'
    },
    row10:{
        marginLeft:'0px'
    },
    item4:{
        display:'flex',
        flexDirection:'row',
    },
    Container2:{
        display:'flex',
        flexDirection:'column',
        border:'',
        backgroundColor:'',
        width:'40vw',
        height:'60vh',
        marginLeft:'16vw',
        alignItems:'flex-start'
    },
    item5:{
        marginRight:'60px'
    }


})


export default function Profile() {
  const  classes = useStyle()
  return (
    <>
    <Header/>
    <Box className={classes.container}>
        <Box className={classes.header2}>
            Home/My Profile
        </Box>
        <br></br>
    </Box>
    <div className={classes.maincontainer}>
        <div className={classes.item1}>
            <h3>Personal Details</h3>
        </div>
        <div className={classes.item2}>
            <div>
            <b>Full Name</b>
            </div>
            <div>
            <TextField id="outlined-basic" label="" variant="outlined" size="large" sx={{width:'40vw',backgroundColor:'#E2E2E2'}} />
            </div>
        </div>
        <br></br>
        <div className={classes.item2}>
            <div>
            <b>Email Id</b>
            </div>
            <div>
            <TextField id="outlined-basic" label="" variant="outlined" size="large" sx={{width:'40vw',backgroundColor:'#E2E2E2'}} />
            </div>
        </div>
        <br></br>
        <div className={classes.item2}>
            <div>
            <b>Password</b>
            </div>
            <div>
            <TextField id="outlined-basic" label="" variant="outlined" size="large" sx={{width:'40vw',backgroundColor:'#E2E2E2'}} />
            </div>
        </div>
        <br></br>
        <div className={classes.item2}>
            <div>
            <b>Mobile</b>
            </div>
            <div>
            <TextField id="outlined-basic" label="" variant="outlined" size="large" sx={{width:'40vw',backgroundColor:'#E2E2E2'}} />
            </div>
        </div>
    </div>
    <br></br>
    <br></br>

    <div className={classes.Container2}>
        <div className={classes.item1}>
            <h3>Address Details</h3>
        </div>
        <div className={classes.row10}>
            <h3>1.Work</h3>
        </div>
        <div className={classes.row5}><b>Address</b></div>
        <br></br>
        <div className={classes.row9}>
            <textarea rows='4' cols='69' ></textarea>
        </div>
        <br></br>
        <div className={classes.item4}>
            <span className={classes.row5}><b>City/Town</b></span>
            <span className={classes.row6}><b>State</b></span>
        </div>
        <div className={classes.row7}>
            <span className={classes.row7}>
                <TextField id="outlined-basic" label="" variant="outlined" size="small" sx={{width:'19vw'}} />
            </span>
            <span className={classes.row8}>
                <TextField id="outlined-basic" label="" variant="outlined" size="small" sx={{width:'19vw'}} />
            </span>
                
        </div> 
        <br></br>
        
        <div>Type</div>
        <div>
        <FormControl>
      
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <span className={classes.item5}>
        <FormControlLabel value="home" control={<Radio />} label="Home" />
        </span>
        <span className={classes.item5}>
        <FormControlLabel value="work" control={<Radio />} label="Work" />
        </span>
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
    </FormControl>
    </div>
       
    </div>
    </>
  )
}
