
import { SEND_MESSAGE, DELETE_MESSAGE, DELETE_MESSAGES } from "./types";

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
})