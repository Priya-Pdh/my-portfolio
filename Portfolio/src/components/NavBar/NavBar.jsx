import React from 'react'; 
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', icon: <HomeIcon />, label: 'Home' },
  { to: '/project', icon: <WorkIcon />, label: 'Project' },
  { to: '/education', icon: <SchoolIcon />, label: 'Education' },
  { to: '/skills', icon: <EmojiObjectsIcon />, label: 'Skills' },
  { to: '/contact', icon: <ContactMailIcon />, label: 'Contact' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent',  borderRadius: "15px"}}>
      <Toolbar >
        <Typography variant="h6" component="div"  sx={{
            flexGrow: 1,
            background: 'linear-gradient(45deg, #ff199f, #cd8cdd, #5be288, #bef146, #7e6ed8)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 600,
            fontSize: '25px',
            
            
          }}> Welcome to Priya's Portfolio
        </Typography>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{ width: '100vw' }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  style={{ textDecoration: 'none', color: 'black' }}
                  onClick={toggleDrawer(false)}
                >
                  <ListItem button selected={location.pathname === item.to}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex', gap: '10px' },
            marginRight: '2rem', 
          }}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              style={{ textDecoration: 'none', color: 'white', marginLeft: '15px' }}
            >
              <IconButton
                size="large"
                edge="start"
                color="black"
                aria-label={item.label}
                sx={{color: location.pathname === item.to? '#1976d2' : 'rgba(0, 0, 0, 0.54)'}}
              >
                {item.icon}
              </IconButton>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
