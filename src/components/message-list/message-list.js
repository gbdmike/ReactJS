import React, {useState, useEffect} from "react";
import {Input, InputAdornment} from "@mui/material";
import {Send} from "@mui/icons-material";
import {Message} from "./message";
import styles from './message-list.module.css';

export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");

  const sendMessage = () => {
    if(value) {
      setMessageList([...messageList, { author: "User", message: value}]);
      setValue("");
    }
    
  };

  const handleSubmitInput = ({code}) => {
      if (code === "Enter")
    sendMessage();
  };

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];

    if (messageList.length && lastMessage.author === "User") {
      setTimeout(() => {
        setMessageList([...messageList, { author: "Bot", message: "Hello from Bot"},]);
      }, 500);
    }
  }, [messageList]);

  return (
    <div className={styles.wrapper}>
      {messageList.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      
      <Input
        className={styles.msg_input}
        placeholder="enter message"
        type="text"
        autoFocus
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleSubmitInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <Send onClick={sendMessage}/>}
          </InputAdornment>
        }
      />
    </div>
  );
};