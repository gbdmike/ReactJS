import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR
 } from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  messagesLoading: true,
  messagesError: null,
  messages: {
    room1: {},
  },
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            { ...action.payload.message, id: new Date().toISOString() },
          ],
        },
      };

      case DELETE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };

    //можно удалить методом delete
    case DELETE_CONVERSATION:
      return {
        ...state,
        messages: Object.entries(state.messages).reduce((acc, [key, value]) => {
          if (key === action.payload) {
            return acc;
          }
          acc[key] = value;
          return acc;
        }, {}),
      };

      case GET_MESSAGES:
        return {
          ...state,
          messagesLoading: true,
          messagesError: null,
        };

        case GET_MESSAGES_SUCCESS:
        return {
          ...state,
          messagesLoading: false,
          messages: action.payload,
        };

        case GET_MESSAGES_ERROR:
        return {
          ...state,
          messagesLoading: false,
          messagesError: action.payload,
        };

      default:
        return state;
  }
};