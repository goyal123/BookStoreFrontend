import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import { SpaceBar } from '@mui/icons-material';
import { getBookListApi } from '../services/Dataservice';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Paper from '@mui/material/Paper';
import { navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Getbook from './Getbook';

const useStyle = makeStyles({

    main2: {
        width: '80vw',
        height: '45vh',
        border: '2px solid #D3D3D3',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:'',
        marginRight:'20px'
    },
    bookimage: {
        width: '100%',
        height: '60%',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        border: '0px solid red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    bookimage2: {
        width: '45%',
        height: '80%',
        border: '0px solid red',
        

    },
    bookdetail: {
        width: '100%',
        height: '40%',
        display: 'flex',
        border: '0px solid red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    booktext: {
        width: '85%',
        height: '80%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
        lineHeight: '1.5'
    },
    booktitle: {
        height: '22%',
        fontWeight: '500',
        fontFamily: 'normal normal normal 14px/19px Roboto',
        color: '#0A0102',
    },
    bookauthor: {
        height: '22%',
        color: '#878787',
        fontFamily: 'normal normal normal 10px/13px Roboto',
    },
    bookdetail1: {
        width: '30%',
        height: '22%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    mark: {
        width: '30%',
        color: '#878787',
        fontFamily: 'normal normal normal Roboto',
        fontSize: '14px',
    },
    bookprice: {
        width: '50%',
        height: '22%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bookdiscount: {
        fontWeight: '500',
        fontSize: '15px',
    },
    bookcost: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '14px',
        marginRight:'5px'
    },
})



export default function Bookmenu(props) {
    console.log("props = ",props)
    const navigate = useNavigate();
    const [id,setid] = useState(0);

    const bookdetails = () => {
        const id = props.book.bookId;
        //setid(props.book.bookId);
        //<Getbook id={id}/>
        console.log(props.book.bookId)
        localStorage.setItem("bookid",props.book.bookId)
        navigate('/book')
      }
    //props.getnotenew()
    const  classes = useStyle()  
    
    // const getbook = () => {
    //     getBookListApi().then((response) => {
    //         console.log(response)
    //     })}
    // useEffect(() => {
    //     getbook()
    //     },[])<img src="bookitem1.png"></img>{props.book.title}{props.book.author}

  return (
    <>
        <Paper elevation={1} className={classes.main2}>
                <Box className={classes.bookimage} onClick={bookdetails}>
                    <Box className={classes.bookimage2}>
                        <img src="bookitem1.png"/>
                    </Box>
                </Box>
                <Box className={classes.bookdetail}>
                    <Box className={classes.booktext}>
                        <Box className={classes.booktitle}>{props.book.title}</Box>
                        <Box className={classes.bookauthor}>{props.book.author}</Box>
                        <Box className={classes.bookdetail1}>
                            <Box className={classes.bookratings}>
                                <Box sx={{ fontSize: '10px' }}>{props.book.rating}</Box>
                                <StarIcon fontSize="16px" sx={{ color: 'white' }} />
                            </Box>
                            <Box className={classes.mark}>{props.book.customerRatedcount}</Box>
                        </Box>
                        <Box className={classes.bookprice}>
                            <Box className={classes.bookdiscount}>{props.book.discountedPrice}</Box>
                            <Box className={classes.bookcost}>Rs{props.book.actualPrice}</Box>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        
    
    </>
  )
}
