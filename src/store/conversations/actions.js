import { CREATE_CONVERSATION,
  DELETE_CONVERSATION,
  HANDLE_CHANGE_MESSAGE_VALUE,
  GET_CONVERSATIONS,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR } from "./types";

// @TODO сделать обработку в редюсере
export const createConversations = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: {value, roomId},
});

//action принимает id диалога и payload его опередает
export const deleteConversations = (conversationId) => ({
  type: DELETE_CONVERSATION,
  payload: conversationId,
});

export const getConversationsStart = () => ({
  type: GET_CONVERSATIONS,
});

export const getConversationsSuccess = (conversations) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: conversations,
});

export const getConversationsError = (error) => ({
  type: GET_CONVERSATIONS_ERROR,
  payload: error,
});