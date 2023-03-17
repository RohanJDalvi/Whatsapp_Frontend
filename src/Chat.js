
import { AttachFile, InsertEmoticon, MoreVert} from '@mui/icons-material';
import {SearchOutlined} from "@mui/icons-material";
import {Avatar, IconButton} from "@mui/material"
import React from 'react'
import { InsertEmoticonRounded } from '@mui/icons-material';
import "./Chat.css";
import {Mic} from "@mui/icons-material"

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar/>

        <div className="chat__headerInfo">
          <h3>First Name</h3>
          <p>Last seen at ....</p>
          </div>

          <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
          </div>
        </div>

        <div className="chat__body">
        <p className="chat__message">
          
          <span className="chat__name">Rohan</span>
          This is a message
          <span className="chat__timespan">
           {new Date().toUTCString()}
          </span>
          </p>

          <p className="chat__message chat__receiver">
          
          <span className="chat__name">Sanika</span>
          This is a message
          <span className="chat__timespan">
           {new Date().toUTCString()}
          </span>
          </p>
          </div>

          <div className="chat__footer">
            <InsertEmoticonRounded/>
            <form>
              <input placeholder="Type a message" type="text"></input>
              <button type="submit">Send a message</button>
            </form>
            <Mic/>
          </div>
    </div>
     
  

      
  );
}

export default Chat
