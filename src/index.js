import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from 'react-dom'; //ReactDOM берет наше приложение и вставляет его в страницу
import { MessageList, ListChat } from "./components";
import styles from './index.module.css';


function Title() {
  return <p className={styles.title}>My chat app</p>
}

const light = createTheme({
  theme: {
      color: "green"
  },
});
const dark = createTheme({
  theme: {
      color: "darkgrey"
  },
});

ReactDOM.render(
<ThemeProvider theme={light}>
  <Title />
  <div className={styles.content}>
    <ListChat />
    <MessageList />
  </div>
</ThemeProvider>,
document.getElementById('root'));