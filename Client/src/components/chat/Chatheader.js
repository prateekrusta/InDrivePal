import React from 'react'
import '../../assets/css/chat.css'
import Grid from "@material-ui/core/Grid"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Chatheader = () => {

    return (
      <div className="chat-header">
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <ArrowBackIosNewIcon className='chat-back-arrow' />
                </Grid>
                <Grid item xs={3}>
                    <AccountCircleIcon className='chat-header-avatar' />
                </Grid>
                <Grid item xs={8}>
                    <span className='chat-header-name'>Prateek Rustagi</span>
                </Grid>
            </Grid>
      </div>
    );
  };
  
  export default Chatheader;