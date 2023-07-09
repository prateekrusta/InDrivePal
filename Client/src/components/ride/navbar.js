import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from "@material-ui/core/Grid"
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MessageIcon from '@mui/icons-material/Message';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../assets/css/navbar.css';

const drawerWidth = 380;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open} className='appbar'>
        <Toolbar>
          <IconButton
            className='toolbar'
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer className="outer-navbar"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >

        <DrawerHeader className='drawheader'>
        <Grid container spacing={1}>
            <Grid item xs={10}>
                <div className='user-handle'>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <AccountCircleIcon className='userAvatar' />
                        </Grid>
                        <Grid item xs={9}>
                            <div className='main-name'>
                                Shivam Dargan
                            </div>
                            <div className='name-title'>
                                Newbie
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item xs={2}>
                <IconButton onClick={handleDrawerClose} className='closerbutton'>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </Grid>
        </Grid>
        </DrawerHeader>

        <Divider />

        <List>
          {['City', 'Request History', 'Outstation', 'Freight', 'Safety', 'Settings', 'FAQ', 'Support', 'Emergency Contacts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    {index === 0 ? <DirectionsCarIcon /> : <></>}
                    {index === 1 ? <AccessTimeIcon /> : <></>}
                    {index === 2 ? <LanguageIcon /> : <></>}
                    {index === 3 ? <LocalShippingIcon /> : <></>}
                    {index === 4 ? <GppGoodIcon /> : <></>}
                    {index === 5 ? <SettingsIcon /> : <></>}
                    {index === 6 ? <InfoIcon /> : <></>}
                    {index === 7 ? <MessageIcon /> : <></>}
                    {index === 8 ? <NewReleasesIcon /> : <></>}
                </ListItemIcon>
                <ListItemText primary={text} className='text-link' />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <div className='bottom-divider' >
            <Divider/>
            <button className='btn-driver-mode'>Driver Mode</button>
        </div>
      </Drawer>
        <DrawerHeader />
    </Box>
  );
}