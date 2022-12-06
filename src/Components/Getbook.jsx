import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import Header from './Header';
import { addtocart, getBookbyid } from '../services/Dataservice';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

const useStyle = makeStyles({
    Container:{
        display:'flex',
        flexDirection:'row',
        width: '80vw',
        marginTop:'5px',
        border:'',
        marginLeft:'200px',
        height:'52vh'
    },
    Container2:{
        width:'40vw',
        marginTop:'0px',
        marginLeft:'1px',
        border:'1px solid black'
    },
    header2:{
        display:'flex',
        flexDirection:'row',
        width:'80vw',
        height:'5vh',
        marginTop:'10px',
        marginLeft:'200px',
        backgroundColor:''
    },
    imgset:{
        width:'250px',
        marginTop:'10px',
        marginLeft:'25px',

    },
    Container3:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'',
        marginLeft:'28px',
        height:'50vh',
        width:'100vw',
        borderBottom:''

    },
    Container4:{
        backgroundColor:'',
        display:'flex',
        marginTop:'20px',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        height:'22vh',
        borderBottom:'1px solid black'
        
        
    },
    row1:{
        display:'flex',
        flexWrap:'wrap',
        marginTop:'-20px'
    },
    bookratings: {
        width: '5%',
        backgroundColor: '#388E3C',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
        marginTop:'10px'
    },
    row2:{
        marginRight:'120px',
        marginTop:'-10px'
    },
    bookprice: {
        width: '24%',
        height: '10%',
        display: 'flex',
        flexWrap:'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginTop:'5px',
        backgroundColor:'' 
    },
    bookdiscount: {
        fontWeight: '500',
        fontSize: '20px',

    },
    bookcost: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '14px',
        marginRight:'50px'
    },
    row3:{
        display:'flex',
        flexWrap:'wrap',
        marginTop:'-30px',
        fontSize:'20px'
    },
    row4:{
        marginTop:'-20px',
        marginLeft:'10px'
    },
    row5:{
        display:'flex',
        flexDirection:'row',
        marginLeft:'200px',
        marginTop:'10px',
    },
    row6:{
        marginRight:'18px'
    },
    row7:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        fontSize:'20px',
        marginTop:'10px',
        border:'1px solid black',
        height:'100vh',
        backgroundColor:'#F5F5F5'
    },
    row8:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        marginTop:'10px',
        marginLeft:'10px',
        border:'',
        width:'55vw',
        height:'20vh',
        backgroundColor:'#F5F5F5',
        fontSize:'15px'
    },
    row9:{
        marginTop:'5px'
    },
    row10:{
        display:'flex',
        alignItems:'flex-start',
    },
    row11:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-end',
        backgroundColor:'red'
    }

})


export default function Getbook(props) {
    const bookid = localStorage.getItem("bookid");
    const [bookobj,setbookObj] = useState({title:'' , description:'',author:'',actualPrice:0,discountedPrice:0,rating:0})
    useEffect(() => {
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
    },[])

    const cartobj = {"quantity":0,"bookid":0}
    
    const addcart = () => {
        cartobj.quantity=1
        cartobj.bookid=Number(localStorage.getItem("bookid"))
        // setcartObj({
        //     quantity:1,
        //     bookid:localStorage.getItem("bookid")
        // })
        
        addtocart(cartobj).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    
  const  classes = useStyle()  
  return (
    <>
        <Header/>
        <div className={classes.header2}>
            Home/Book
        </div>
        <br></br>
        <div className={classes.Container}>
            <div className={classes.Container2}>
                <div className={classes.imgset}>
                    <img src="bookitem1.png" width="250px"/>
                </div>
            </div>
            
            <div className={classes.Container3}>
                <div className={classes.row3}>
                    <h3>{bookobj.title}</h3>
                </div>
                
                <div className={classes.row1}>
                    by{bookobj.author}
                </div>
                <Box className={classes.bookratings}>
                                <Box sx={{ fontSize: '10px' }}>{bookobj.rating}</Box>
                                <StarIcon fontSize="16px" sx={{ color: 'white' }} />
                </Box>
                <Box className={classes.bookprice}>
                            <Box className={classes.bookdiscount}>Rs. {bookobj.discountedPrice}</Box>
                            <Box className={classes.bookcost}>Rs{bookobj.actualPrice}</Box>
                
                __________________________________________________________________________________________________________________
                </Box>
                <div className={classes.Container4}>
                    <br></br>
                    <li>Book Details</li>
                    <br></br>
                    <div className={classes.row4}>
                        {bookobj.description}
                    </div>
                    <br></br>
                </div>
                
                <div className={classes.row10}>
                    <h4>Customer Feedback</h4>
                </div>
                        
                <div className={classes.row7}>
                    
                    <div className={classes.row8}>
                        Overall Rating
                        <br></br>
                        <div className={classes.row9}>
                        <StarIcon size='medium' sx={{ color: 'lightgrey' }} />
                        <StarIcon size='medium' sx={{ color: 'lightgrey' }} />
                        <StarIcon size='medium' sx={{ color: 'lightgrey' }} />
                        <StarIcon size='medium' sx={{ color: 'lightgrey' }} />
                        <StarIcon size='medium' sx={{ color: 'lightgrey' }} />
                        <br></br>
                        </div>
                        
                        <textarea rows='4' cols='95' placeholder=' Write your review' ></textarea>
                    </div>
                        <Button variant="contained" sx={{width:'6vw',height:'4vh',marginLeft:'47.5vw',marginBottom:'10px'}}>Submit</Button>
                    
                    
                    
                </div>
            </div>
            
        </div>
        <div className={classes.row5}>
            <div className={classes.row6}>
                <Button variant="contained" sx={{width:'10.5vw',backgroundColor:'brown'}} onClick={addcart}>ADD To BAG</Button>  
            </div>
                
                <Button variant="contained" sx={{width:'10.5vw',backgroundColor:'#333333'}}>WISHLIST</Button>
        </div>
        
    
    </>
        
        
        
  )
}
