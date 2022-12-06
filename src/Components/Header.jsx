import React from 'react'
import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { getcart } from '../services/Dataservice';
import { navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles({
    Header:{
        display: 'flex',
        flexDirection: 'row',
        width:'99.7vw',
        height: '10.5vh',
        marginTop: '0%',
        backgroundColor:'#8F2B2F'
      },
      item1:{
        marginLeft:'150px',
        marginTop:'22px',
        
      },
      item2:{
        marginTop:'20px',
        marginLeft:'10px',
        color:'white',
        fontSize:'20px',
      },
      item3:{
        marginLeft:'30px'
      },
      row1:{
        display:'flex',
        flexDirection:'column',
        marginTop:'15px',
        marginLeft:'200px',
        backgroundColor:'',
        height:'50px',
        width:'50px',
        marginRight:'20px',
        color:'white'
      },
      row2:{
        display:'flex',
        flexDirection:'column',
        marginLeft:'20px',
        marginTop:'15px',
        color:'white'
      }
})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: 40,
    borderRadius: 3,
    marginTop: 15,
    border: '0px solid black',
    backgroundColor:'lightgray'
  }));


  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '50%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '10%',
      [theme.breakpoints.up('md')]: {
        width: '60ch',
      },
    },
  }));

export default function Header() {
    const classes = useStyle()   
    const navigate = useNavigate();
    const gotocart = () => {
      navigate('/cart')
    }

  return (
    <>
    <div className={classes.Header}>
        <div className={classes.item1}>
            <img src="bookicon.png"></img>
        </div>
        <div className={classes.item2}>BookStore</div>
        <div className={classes.item3}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        </div>
        <div className={classes.row1}>
          <PermIdentityIcon sx={{color:'white',marginRight:'50px'}}/>
            Profile 
        </div>
        <div className={classes.row2}>
          <ShoppingCartOutlinedIcon sx={{color:'white'}} onClick={gotocart}/>
        Cart
        </div>
    </div>
    
    </>
  )
}
