import { CREATE_CONVERSATION, DELETE_CONVERSATION, HANDLE_CHANGE_MESSAGE_VALUE } from "./types";

// @TODO сделать обработку в редюсере
export const createConversations = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const handleChangeMessageValue = (value, roomId) => ({
  type: HANDLE_CHANGE_MESSAGE_VALUE,
  payload: {value, roomId},
});

//описать его в reducer
export const deleteConversations = (conversationId) => ({
  type: DELETE_CONVERSATION,
  payload: conversationId,
});