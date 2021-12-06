import React, { useState, useEffect, useRef, useCallback, useMemo, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { sendMessage, messageSelector } from "../../store/messages";
import { messageValueSelector, handleChangeMessageValue } from "../../store/conversations";
import { Message } from "./message";
import { useStyles } from "./use-styles";
import { sendMessageWithBot } from "../../store/messages/thunks";
// import { useBotAnswer } from "./hooks/use-bot-answer";

export const MessageList = () => {
  const s = useStyles();
  const dispatch = useDispatch();
  const { roomId } = useParams();

  const messageSelectorByMemo = useMemo(
    () => messageSelector(roomId),
    [roomId]
  );

  const messageValueSelectorByMemo = useMemo(
    () => messageValueSelector(roomId),
    [roomId]
  );

  const messages = useSelector(messageSelectorByMemo);
  const value = useSelector(messageValueSelectorByMemo);

  const ref = useRef(null);

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(sendMessageWithBot({ author, message }, roomId));
      }
    },
    [dispatch, roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [handleScrollBottom, messages]);

  // useBotAnswer(messages, send);

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>

      <Input
        fullWidth
        autoFocus
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => dispatch(handleChangeMessageValue(e.target.value, roomId))}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <Send onClick={() => send(value)} className={s.icon} />}
          </InputAdornment>
        }
      />
    </>
  );
};