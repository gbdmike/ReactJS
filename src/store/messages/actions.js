
import { 
  SEND_MESSAGE,
  DELETE_MESSAGE,
  DELETE_MESSAGES,
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR
 } from "./types";

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
  meta: {
    delay: 2000,
  },
});

export const deleteMessage = (messageId, roomId) => ({
  type: DELETE_MESSAGE,
  payload: { messageId, roomId },
});

//описать его в reducer
export const deleteMessages =(roomId) => ({
  type: DELETE_MESSAGES,
  payload: roomId,
});

export const getConversationsStart = () => ({
  type: GET_MESSAGES,
});

export const getConversationsSuccess = (messages) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: messages,
});

export const getConversationsError = (error) => ({
  type: GET_MESSAGES_ERROR,
  payload: error,
});