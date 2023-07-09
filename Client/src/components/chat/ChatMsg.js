import React from "react";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Message";
import Chatheader from './Chatheader.js';
import '../../assets/css/chat.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ramSharma from "../../assets/images/driver.jpeg"


const ChatMsg = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="chat-outside">
    <Chatheader label="Ram Sharma" />
    <div className="container">
      <div className="paper" zDepth={2}>

        <div id="style-1" className="messagesBody">

        <a id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>

          <MessageLeft
            message="Sir, I have reached the given Location."
            photoURL={ramSharma}
            avatarDisp={true}
            timestamp="10:00 A.M."
          />
          
          </a>

          <a id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>

          <MessageLeft
            message="Please Come Quickly. "
            photoURL={ramSharma}
            avatarDisp={true}
            timestamp="10:00 A.M."
          />
          
          </a>

          <MessageRight
            message="I will be there in 10 mins "
            photoURL=""
            avatarDisp={true}
            timestamp="10:10 A.M."
          />



        </div>

      </div>
    </div>
    <TextInput />

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

export default ChatMsg