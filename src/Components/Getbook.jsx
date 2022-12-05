import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import Header from './Header';
import { getBookbyid } from '../services/Dataservice';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const useStyle = makeStyles({
    Container:{
        display:'flex',
        flexDirection:'row',
        width: '80vw',
        marginTop:'20px',
        border:'1px solid black',
        marginLeft:'200px',
    },
    Container2:{
        width:'300px',
        marginTop:'0px',
        marginLeft:'1px',
        border:'1px solid red'
    },
    header2:{
        display:'flex',
        flexDirection:'row',
        width:'80vw',
        height:'5vh',
        marginTop:'10px',
        marginLeft:'200px',
        backgroundColor:'green'
    },
    imgset:{
        width:'250px',
        marginTop:'10px',
        marginLeft:'20px',

    },
    Container3:{
        backgroundColor:'red',
        marginLeft:'40px'
    },
    row1:{
        marginRight:'90px',
        marginTop:'-10px'
    },
    bookratings: {
        width: '60%',
        backgroundColor: '#388E3C',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
    },

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
                <h3>{bookobj.description}</h3>
                <div className={classes.row1}>
                    by{bookobj.author}
                </div>
                <Box className={classes.bookratings}>
                                <Box sx={{ fontSize: '10px' }}>{bookobj.rating}</Box>
                                <StarIcon fontSize="16px" sx={{ color: 'white' }} />
                </Box>
            </div>
        
        <div>
            
        </div>
        </div>
    
    </>
        
        
        
  )
}
