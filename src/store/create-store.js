import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { messagesReducer } from "./messages";
import { conversationsReducer } from "./conversations";
import { botSendMessage,  logger, timeScheduler, thunk } from "./middlewares";
// import { persistStore, persistReducer } from 'redux-persist'
// import { thunk } from "redux-thunk";

export const reducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  conversations: conversationsReducer,
});

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(timeScheduler, botSendMessage, thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (args) => args
  )
);