import React from "react";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Message";
import Chatheader from './Chatheader.js';
import '../../assets/css/chat.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


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
    <Chatheader />
    <div className="container">
      <div className="paper" zDepth={2}>

        <div id="style-1" className="messagesBody">

        <a id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>

          <MessageLeft
            message="Hey Hey Hey Hey HeyHey Hey Hey Hey HeyHey Hey Hey Hey HeyHey Hey Hey Hey Hey"
            photoURL=""
            displayName="Prateek"
            avatarDisp={true}
          />
          
          </a>

          <a id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>

          <MessageLeft
            message="Hey"
            photoURL=""
            displayName="Prateek"
            avatarDisp={true}
          />
          
          </a>

          <MessageRight
            message="Hey"
            photoURL=""
            displayName="Shivam"
            avatarDisp={true}
            timestamp="11:00 A.M."
          />

          <MessageRight
            message="Hi"
            photoURL=""
            displayName="Shivam"
            avatarDisp={false}
          />

        <MessageLeft
            message="Hey"
            photoURL=""
            displayName="Prateek"
            avatarDisp={true}
          />

          <MessageLeft
            message="Hi"
            photoURL=""
            displayName="Prateek"
            avatarDisp={false}
          />

          <MessageRight
            message="Hey"
            photoURL=""
            displayName="Shivam"
            avatarDisp={true}
          />

          <MessageRight
            message="Hi"
            photoURL=""
            displayName="Shivam"
            avatarDisp={false}
          />

        <MessageLeft
            message="Hey"
            photoURL=""
            displayName="Prateek"
            avatarDisp={true}
          />

          <MessageLeft
            message="Hi"
            photoURL=""
            displayName=""
            avatarDisp={false}
          />

          <MessageRight
            message="Hey"
            photoURL=""
            displayName="Shivam"
            avatarDisp={true}
          />

          <MessageRight
            message="Hi"
            photoURL=""
            displayName="Shivam"
            avatarDisp={false}
          />

        <MessageLeft
            message="Hey"
            photoURL=""
            displayName="Prateek"
            avatarDisp={true}
          />

          <MessageLeft
            message="Hi"
            photoURL=""
            displayName="Prateek"
            avatarDisp={false}
          />

          <MessageRight
            message="Hey"
            photoURL=""
            displayName="Shivam"
            avatarDisp={true}
          />

          <MessageRight
            message="Hi"
            photoURL=""
            displayName="Shivam"
            avatarDisp={false}
          />

        <MessageLeft
            message="Hey"
            photoURL=""
            displayName="Prateek"
            avatarDisp={true}
          />

          <MessageLeft
            message="Hi"
            photoURL=""
            displayName=""
            avatarDisp={false}
          />

          <MessageRight
            message="Hey"
            photoURL=""
            displayName="Shivam"
            avatarDisp={true}
          />

          <MessageRight
            message="Hi"
            photoURL=""
            displayName="Shivam"
            avatarDisp={false}
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