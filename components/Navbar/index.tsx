import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import NavLink from './NavLink';
import ava from "../../public/mani.jpg"
import avalogo from '../../public/avalogo.jpg'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
 
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

 
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor:'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> 
          <img src={avalogo.src} style={{width:'40px' , height:'40px' , borderRadius:'5%' , marginRight:'30px'}}/>
          <Box style={{ display: 'flex', flexDirection: 'row' , height:'10%' , color:'black' , fontWeight:'bold' , marginLeft:'20%'}}>
           
                <NavLink route = "/">
              <Button
                style={{ color: 'black' , display: 'block'  , height: '100%' , innerWidth:"40%"  , width:'40%' , fontWeight:'bold'}}
                // sx={{ my: 2, color: 'black' , width:'200%' }}
              >
               home
              </Button>
              </NavLink>
          
           
             
             
              <NavLink route = "/eqiq">
              <Button
                style={{ color: 'black' , display: 'block' , height: '100%'  , fontWeight:'bold'}}
                // sx={{ my: 2, color: 'black' , width:'200%'}}
              >
               Eqiq
              </Button>
              </NavLink>
              <NavLink route = "/manifesto">
              <Button
                style={{ color: 'black' , display: 'block' , height: '100%'  , fontWeight:'bold'}}
                // sx={{ my: 2, color: 'black' , width:'200%'}}
              >
                Manifesto
              </Button>
              </NavLink>
              <NavLink route = "/task">
              <Button
                style={{ color: 'black' , display: 'block' , height: '100%' , fontWeight:'bold' }}
                // sx={{ my: 2, color: 'black' , width:'200%'}}
              >
                Task
              </Button>
              </NavLink>
              <NavLink route = "/about">
              <Button
                style={{ color: 'black' , display: 'block' , height: '100%'  , fontWeight:'bold'}}
                // sx={{ my: 2, color: 'black' , width:'200%'}}
              >
               About
              </Button>
              </NavLink>
              <NavLink route = "/emotions">
              <Button
                style={{ color: 'black' , display: 'block' , height: '100%'  , fontWeight:'bold'}}
                // sx={{ my: 2, color: 'black' , width:'200%'}}
              >
               Emotion
              </Button>
              </NavLink>
          </Box>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              fontSize: "16px",
              cursor: "pointer",
              marginLeft: "20%",
              
            }}
          >
            Download
          </button>
        

          <Box sx={{ flexGrow: 0  , marginLeft:'5%'}}>
            <Tooltip title="Open settings"  >
              <IconButton  onClick={handleOpenUserMenu} sx={{ p: 0  }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;