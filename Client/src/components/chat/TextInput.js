import React, { useState } from 'react'
import '../../assets/css/chat.css'
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid"
import MicIcon from '@mui/icons-material/Mic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export const TextInput = ({change}) => {

        const [message, setMessage] = useState("");
        
        function handleChange(event) {

           let value = event.target.value;
           setMessage(value);
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            change(message);
        }

    return (
        <>
            <form className="wrapForm" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <input type='text' placeholder='Type your message ...' value = {message} onChange = {handleChange}></input>
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