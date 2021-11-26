import { createStore } from "../store/my-redux";
// import { createStore } from "react-redux";
import {ProfileReducer} from "./profile";
import { chatsReducer } from "./chats";


export const store = createStore(ProfileReducer);

export const ADD_MESSAGE = 'MESSAGES: ADD_MESSAGE';
export const addMessage = (chatId, message) => ({
type: ADD_MESSAGE,
chatId,
message,
});