import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@material-ui/core"
import React, { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';

//scss
import '../../scss/navbar.scss' 
import { ForkLeft } from "@mui/icons-material";
import { DownloadCSVButton } from "./DownloadCSVButton";


export const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = useState( null );
  const [anchorElUser, setAnchorElUser] = useState( null );
  const [comingSoon, setComingSoon] = useState( false )
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

  const handleDisplayComingSoon = () => {
    setComingSoon( true )
    setTimeout( () => setComingSoon( false ), 2500 )
  }

    
const pages = ['Dev', 'Photography', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
   
   return (
   <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters className>

        {/* Displayed when above medium */}
   
        {/* Displayed when below medium */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>


        {/* displayed when below medium */}
          <div className='navbar-logo'></div>

          
        {/* displayed when above medium */}
           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
             <Button
               key={'dev'}
               onClick={handleCloseNavMenu}
               sx={{ my: 2, color: 'white', display: 'block' }}
               className='nav-button'
             >
               Dev
             </Button>
             <Button
               key={'photography'}
               onClick={handleDisplayComingSoon}
               sx={{ my: 2, color: 'white', display: 'block' }}
               className={`nav-button ${comingSoon && 'coming-soon'}`}
             >
               <span className={comingSoon && 'squeeze'}>photography</span>
               <span className={!comingSoon && 'squeeze'}>Coming Soon...</span>
             </Button>
             <Button
               key={'blog'}
               onClick={handleDisplayComingSoon}
               sx={{ my: 2, color: 'white', display: 'block' }}
               className={`nav-button ${comingSoon && 'coming-soon'}`}
             >
               <span className={comingSoon && 'squeeze'}>blog</span>
               <span className={!comingSoon && 'squeeze'}>Coming Soon...</span>
             </Button>
             <a href='/files/tristan_schwichow_resume.pdf' download target="_blank" className='nav-button nav-download' style={{textAlign:'baseline'}}>
               <span className='nav-download-text'>RESUME</span>
             </a>
        </Box>

        {/* right side  */}
        {/* <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box> */}
      </Toolbar>
    </Container>
  </AppBar>
  )
}