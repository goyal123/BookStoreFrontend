import React, { useEffect, useState } from 'react'
import Loginpage from '../Login/Loginpage'
import { makeStyles } from '@mui/styles';
import { backdropClasses } from '@mui/material';
import Signup from '../Signup/Signup';
import Header from '../../Components/Header';
import Bookmenu from '../../Components/Bookmenu';
import { getBookListApi } from '../../services/Dataservice';
import Box from '@mui/material/Box';

const useStyle = makeStyles({
    container: {
        display:'flex',
        flexDirection:'column', 
        width: '80vw',
        marginTop:'20px',
        border: '0px solid red',
        position: 'relative',
        left: '150px',
        backgroundColor:''
        
    },
    header2: {
        width: '100%',
        height: '12vh',
        border: '0px solid green',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:''
    },
    booktextitem: {
        width: '14%',
        display: 'flex',
        border: '0px solid blue',
        alignItems: 'center',
        position: 'relative',
        left: '70px',
    },
    bookstxt: {
        fontSize: '24px',
        fontWeight: '550',
        letterSpacing: '0px',
        position: 'relative',
        bottom: '3px',
        border: '0px solid green',
        left:'60px'
    },
    totalitems: {
        fontSize: '14px',
        opacity: '0.7',
        position: 'relative',
        left: '70px',
        border: '0px solid yellow',
    },
    header2btn: {
        position: 'relative',
        left: '100px',
    }
    
    
})

export default function Dashboard() {
    const  classes = useStyle()
    const [bookList, setBookList] = useState([])
    
    useEffect(() => {
        getBookListApi().then((response) => {
            console.log(response)
            setBookList(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    },[])

    // const getbook = () => {
    //     getBookListApi().then((response) => {
    //         console.log(response)
    //         //let filterNote = response.data.data
    //         setNote3List(response.data.data)
    //         console.log(setNote3List) 
    //     })}
    // useEffect(() => {
    //     getbook()
    //     },[note3List])bookList.map((book) => (<Bookmenu book={book}/>))

    
  return (
    <>
    <div>
            <Box>
                <Header/>
                <Box className={classes.container}>
                    <Box className={classes.header2}>
                            <Box className={classes.bookstxt}>Books</Box>
                            <Box className={classes.totalitems}>(5 items)</Box>
                        
                    </Box>
                </Box>
                    <Box  sx={{ display: 'flex',width:'80vw',height:'auto',marginLeft:'150px',backgroundColor:''}}>
                        {
                           bookList.map((book) => (<Bookmenu book={book}/>))
                        }
                    </Box>
                
            </Box>
        </div>
    </>
    
  )
}
