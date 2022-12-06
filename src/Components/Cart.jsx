import React, { useEffect, useState } from 'react'
import { getBookbyid, getcart } from '../services/Dataservice'
import { makeStyles } from '@mui/styles';
import Header from './Header';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';


const useStyle = makeStyles({
    header2:{
        display:'flex',
        flexDirection:'row',
        width:'80vw',
        height:'5vh',
        marginTop:'10px',
        marginLeft:'160px',
        backgroundColor:'',
    },
    Container:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'',
        width:'60vw',
        height:'40vh',
        marginLeft:'12vw',
        border:'1px solid black'
    },
    row1:{
        display:'flex',
        flexDirection:'row',
        width:'50vw',
        fontSize:'20px',
        marginLeft:'40px',
        marginTop:'20px',
        backgroundColor:'',
        border:''
    },
    row2:{
        display:'flex',
        flexDirection:'row',
        marginLeft:'40px',
        marginTop:'20px',
        border:''
    },
    item2:{
        display:'flex',
        flexDirection:'column',
        marginLeft:'30px',
        border:' '
    },
    row3:{
        marginTop:'10px',
        display:'flex',
        alignItems:'flex-start'
    },
    bookcost: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '14px',
        marginLeft:'10px',
        marginTop:'1px'
    },
    row4:{
        display:'flex',
        flexDirection:'row',
        marginLeft:'45vw',
        marginTop:'10px',
        height:'30px'
    },
    Container2:{
        display:'flex',
        flexDirection:'column',
        border:'1px solid black',
        backgroundColor:'',
        width:'60vw',
        height:'95vh',
        marginLeft:'12vw',
        alignItems:'flex-start'
    },
    item3:{
        marginLeft:'20px',
        fontSize:'20px'
    },
    item4:{
        display:'flex',
        flexDirection:'row'
    },
    row5:{
        marginLeft:'60px',
        marginRight:'13vw'
    },
    row7:{
        marginLeft:'30px',
    },
    row8:{
        marginLeft:'20px'
    },
    row9:{
        display:'flex',
        flexDirection:'column',
        marginLeft:'55px',
        alignItems:'flex-start',
        border:'1px solid black'
    },
    row10:{
        marginLeft:'-10px'
    }
    
})

export default function Cart() {
  const  classes = useStyle()  
  const [bookobj,setbookObj] = useState({title:'' , description:'',author:'',actualPrice:0,discountedPrice:0,rating:0})
    
  useEffect(() => {
    getcart().then((response) => {
        console.log(response)
        const bookid = response.data.data[0].bookId
        getBookbyid(bookid).then((response) => {
            console.log(response)
            setbookObj({
                title:response.data.data.title,
                description:response.data.data.description,
                author:response.data.data.author,
                actualPrice:response.data.data.actualPrice,
                discountedPrice:response.data.data.discountedPrice,
                rating:response.data.data.rating
            })
        }).catch((error) => {
            console.log(error)
        })
        
      }).catch((response) => {
        console.log(response)
      })
    
      
  },[])

  return (
    <>
    <Header/>
    
    <div className={classes.header2}>
            Home/<b>Mycart</b>
    </div>
    
    <div className={classes.Container}>
        <div className={classes.row1}>
            MyCart(1)
        </div>
        <div className={classes.row2}>
            <div>
                <img src="bookitem1.png" width="100px"/>
            </div>
            <div className={classes.item2}>
                <b>{bookobj.title}</b>
                <div className={classes.row3}>
                    by{bookobj.author}
                </div>
                <div className={classes.row3}>
                        Rs {bookobj.discountedPrice}
                        <span className={classes.bookcost}>Rs{bookobj.actualPrice}</span>

                    </div>
                
            </div>
            
        </div>
        <div className={classes.row4}>
           <Button variant="contained" >Place Order</Button> 
        </div>
            
        </div>
        <div className={classes.Container2}>
                <div className={classes.item3}>
                    Customer Details
                    <Button variant="outlined" sx={{backgroundColor:'white',color:'red',marginLeft:'30vw',height:'40px'}} >Add New address</Button> 
                </div>
                <br></br>
                <div className={classes.item4}>
                    <span className={classes.row5}>Full Name</span>
                    <span className={classes.row6}>Mobile Number</span>
                </div>
                <div className={classes.row7}>
                    <span className={classes.row7}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
                    </span>
                    <span className={classes.row8}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
                    </span>
                
                  </div>
                  <div className={classes.row10}>
                    <ul><h3><FormControlLabel value="1" control={<Radio />} label="1.Work" /></h3></ul>
                  </div>
                  <div className={classes.row5}>Address
                    </div>
                   <br></br>
                    <div className={classes.row9}>
                    <textarea rows='4' cols='61' placeholder=' Write your review' ></textarea>
                  </div>
                  <br></br>
                  <div className={classes.item4}>
                    <span className={classes.row5}>City/Town</span>
                    <span className={classes.row6}>State</span>
                </div>
                <div className={classes.row7}>
                    <span className={classes.row7}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
                    </span>
                    <span className={classes.row8}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
                    </span>
                
                  </div>
                  <div className={classes.row10}>
                    <ul><h3><FormControlLabel value="2" control={<Radio />} label="2.Home" /></h3></ul>
                  </div>
                  <div className={classes.row5}>Address</div>
                    <div className={classes.row9}>
                    <textarea rows='4' cols='61' placeholder=' Write your review' ></textarea>
                  </div>
                  <div className={classes.row4}>
                        <Button variant="contained" size="medium" sx={{backgroundColor:'',color:'',marginLeft:'',height:'40px'}}>Continue</Button> 
                  </div>
        </div>
    </>
    
  )
}
