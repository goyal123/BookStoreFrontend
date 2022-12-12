import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';

const useStyle = makeStyles({
    Container:{
        display:'flex',
        flexDirection:'row',
        width:'80vw',
        height:'30vh',
        marginLeft:'150px',
        marginTop:'0px',
        border:'1px solid black'
    },
    Container2:{
        display:'flex',
        flexDirection:'row',
        marginTop:'40px'
    },

    item1:{
        marginLeft:'40px'
    },
    item2:{
        display:'flex',
        flexDirection:'column',
        marginLeft:'30px',
        border:'',
        alignItems:'flex-start'
    },
    row3:{
        marginTop:'10px',
        display:'flex',
        alignItems:'flex-start',
        marginBottom:'15px'
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
        marginRight:'10px'
    },
    bookcost: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '14px',
        marginRight:'5px'
    },
})

export default function Bookdetails(props) {
    const  classes = useStyle()
  return (
    <>
    <div className={classes.Container}>
        <div className={classes.Container2}>
            <div className={classes.item1}>
                <img src="bookitem1.png" width="100px"/>
            </div>
            <div className={classes.item2}>
                <b>{props.wish.bookName}</b>
                <div className={classes.row3}>
                    by{props.wish.author}
                </div>
                <Box className={classes.bookprice}>
                            <Box className={classes.bookdiscount}><b>Rs{props.wish.discountedPrice}</b></Box>
                            <Box className={classes.bookcost}>Rs{props.wish.actualPrice}</Box>
                </Box>
                
                
            </div>
            </div>
            
    </div>
    
    </>
  )
}
