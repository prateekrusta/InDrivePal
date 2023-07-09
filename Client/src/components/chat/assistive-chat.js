import React from "react";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Message";
import Chatheader from './Chatheader.js';
import '../../assets/css/chat.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const AssistChat = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [messages, setMessages] = React.useState(null);
  const [response, setResponse] = React.useState(null);


  const fireGpt = async (question) => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({
          'question':question
      }),  
      credentials: "include"
      };

      fetch(`http://localhost:5000/chat/driver`, requestOptions )
      .then(async response => {
          if(response.ok){
              response.json().then(data => {
                console.log(data);
                setResponse(data.content);
                });
            
           }
          else{
              throw response.json();
          }
        })
        .catch(async (error) => {
          const errorMessage = await error;
     
        })
  }

  const handleDetails = (value) => {
    setMessages(value);
    fireGpt(value);
  }




  return (
    <div className="chat-outside">
    <Chatheader label="Help" />
    <div className="container">
      <div className="paper" zDepth={2}>

        <div id="style-1" className="messagesBody">

        <a id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>

          {messages ? <MessageRight
            message= {messages}
            photoURL=""
            displayName="Prateek"
            avatarDisp={true}
          /> : null}
          
          </a>

          <a id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>

          {response ?  <MessageLeft
            message= {response}
            photoURL=""
            avatarDisp={true}
          /> : null }
          
          </a>

        </div>

      </div>
    </div>
    <TextInput change={handleDetails} />

    <Menu
        className="menu-chat"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Copy</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Text To Audio</MenuItem>
        <MenuItem onClick={handleClose}>Report</MenuItem>
      </Menu>

    </div>
  );
}

export default AssistChat