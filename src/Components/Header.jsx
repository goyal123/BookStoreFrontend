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
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import MoreIcon from '@mui/icons-material/MoreVert';

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
        marginTop:'5px',
        marginLeft:'190px',
        backgroundColor:'',
        height:'40px',
        width:'50px',
        marginRight:'40px',
        color:'white',
        border:''
      },
      row2:{
        display:'flex',
        flexDirection:'column',
        marginLeft:'20px',
        marginTop:'15px',
        color:'white'
      },
      
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };

    const handleMenuClosewishlist = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
      navigate('/wishlist')
    };

    const handleMenuCloseprofile = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
      navigate('/profile')
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuCloseprofile}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My Orders</MenuItem>
        <MenuItem onClick={handleMenuClosewishlist}>Wishlist</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
        <AccountCircle />
        </MenuItem>
        </Menu>
    );

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
        <Box sx={{marginTop:'5px' }}>
        <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
          </IconButton>
          </Box>
          <div className={classes.labelitem}>profile</div>
        <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        
     
      {renderMobileMenu}
      {renderMenu}
    
          {/* <PermIdentityIcon sx={{color:'white',marginRight:'50px'}}/> */}
            
        </div>
        <div className={classes.row2}>
          <ShoppingCartOutlinedIcon sx={{color:'white',marginBottom:'5px'}} onClick={gotocart}/>
          Cart
        </div>
    </div>
    
    </>
  )
}
