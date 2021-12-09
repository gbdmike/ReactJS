import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { messagesReducer } from "./messages";
import { conversationsReducer } from "./conversations";
import { getGistsApi, searchGistsApi } from "../api/gists";
import { botSendMessage,  logger, timeScheduler, thunk } from "./middlewares";
import { gistsReducer } from "./gists";
// import { persistStore, persistReducer } from 'redux-persist'
// import { thunk } from "redux-thunk";

export const reducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  conversations: conversationsReducer,
  gists: gistsReducer,
});

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      timeScheduler,
      botSendMessage,
      thunk.withExtraArgument({ getGistsApi, searchGistsApi }),  
      logger
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (args) => args
  )
);