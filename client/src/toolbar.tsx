import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import { IconButton } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import './toolbar.css'
// import { Outlet, Link } from "react-router-dom";


import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import { Menu } from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import { Login } from '@mui/icons-material';
import { Link, Outlet, NavLink } from 'react-router-dom';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const home = (event: React.MouseEvent<HTMLElement>) => {
    <Link to="/home"></Link>
    // <Login />
    // setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };
  // const admin = () => {
  //   // <Link to="/admin"></Link>
  //   <Login />
  // };

  const menuId = 'primary-search-account-menu';
  // const renderMenu = (
    // <Menu
    //   anchorEl={anchorEl}
    //   anchorOrigin={{
    //     vertical: 'top',
    //     horizontal: 'right',
    //   }}
    //   id={menuId}
    //   keepMounted
    //   transformOrigin={{
    //     vertical: 'top',
    //     horizontal: 'right',
    //   }}
    //   open={isMenuOpen}
    //   onClose={handleMenuClose}
    // >
    //   {/* <Link to="/admin">yhyterhterhrthterh</Link> */}
    //   <MenuItem onClick={() => {
    //     handleMenuClose();
    //     admin();
    //   }}>
    //     הכנס כמנהל
    //   </MenuItem>
    //   <MenuItem onClick={handleMenuClose}> לקוח </MenuItem>
    //   {/* <Link to="/admin" >grt</Link> */}
    // </Menu>
  // );

  return (
    <div className='tools'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
           <h1> צילום ומולטימדיה</h1>
            {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton style={{ cursor: 'pointer' }}
                className='cursor'
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle className='iconButton' />
              </IconButton>
            </Box>
            {/* <Link to="/home"> */}
            {/* <IconButton style={{ cursor: 'pointer', color: 'white' }}
              onClick={home}>
              <Box
                sx={{
                  '& > :not(style)': {
                    m: 2,
                  },
                }}
              >
                <HomeIcon />
              </Box> 
            </IconButton> */}
            {/* </Link> */}
          </Toolbar>
        </AppBar>
        {/* {renderMenu} */}
      </Box >
      {/* <Link to="/admin" >grt</Link> */}
    </div>
  );
}