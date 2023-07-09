import React from "react";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Message";
import Chatheader from './Chatheader.js';
import '../../assets/css/chat.css'



export default function App() {
  return (
    <div className="chat-outside">
    <Chatheader />
    <div className="container">
      <div className="paper" zDepth={2}>

        <div id="style-1" className="messagesBody">

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
    </div>
  );
}
