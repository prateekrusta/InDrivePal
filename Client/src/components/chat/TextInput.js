import React, { useState } from 'react'
import '../../assets/css/chat.css'
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid"
import MicIcon from '@mui/icons-material/Mic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export const TextInput = () => {
    const [message, setMessage]=useState("");
    const [list, setList]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const messages={message}
        if (message){
            setList((ls)=>[...ls,messages])
            setMessage("")
        }
        console.log(message)
    }
    return (
        <>
            <form className="wrapForm" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <input type='text' placeholder='Type your message ...' value={message} onChange={(e)=>setMessage(e.target.value)}></input>
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



