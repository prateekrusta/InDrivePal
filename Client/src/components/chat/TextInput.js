import React from 'react'
import '../../assets/css/chat.css'
import Grid from "@material-ui/core/Grid"
import MicIcon from '@mui/icons-material/Mic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export const TextInput = () => {
    return (
        <>
            <form className="wrapForm" noValidate autoComplete="off">
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <input type='text' placeholder='Type your message ...'></input>
                </Grid>
                <Grid item xs={2}>
                    <button className='btn-chat'><CameraAltIcon /></button>
                </Grid>
                <Grid item xs={2}>
                    <button className='btn-chat'><MicIcon /></button>
                </Grid>
            </Grid>
            </form>
        </>
    )
}



